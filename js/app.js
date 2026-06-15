/* ============================================================================
 *  ITIL 4 Foundation — Treinador de Estudo (lógica)
 *  JavaScript puro, sem frameworks. Tudo roda no navegador.
 *  Dados persistidos em localStorage (sem backend, sem banco externo).
 * ========================================================================== */

(function () {
  "use strict";

  const QUESTIONS = window.ITIL_QUESTIONS || [];
  const BLOCK_SIZE = 10;
  const STORAGE_KEY = "itil4_progress_v1";

  /* ---------------------------- Estado em memória --------------------------- */
  let block = [];          // perguntas do bloco atual (com opções já embaralhadas)
  let current = 0;         // índice da pergunta atual
  let results = [];        // [{question, chosenText, correctText, isCorrect}]
  let answered = false;    // a pergunta atual já foi respondida?

  /* ------------------------------- Utilidades ------------------------------- */
  const $ = (id) => document.getElementById(id);

  // Embaralhamento Fisher–Yates (sem viés)
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $(id).classList.add("active");
    window.scrollTo(0, 0);
  }

  function toast(msg) {
    const t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 1800);
  }

  /* -------------------------- Persistência (localStorage) ------------------- */
  function defaultProgress() {
    return {
      blocksCompleted: 0,
      totalCorrect: 0,
      totalWrong: 0,
      topicErrors: {},        // { "Tópico": quantidade de erros }
      wrongQuestionIds: []    // ids errados ainda não dominados (para revisar)
    };
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultProgress();
      return Object.assign(defaultProgress(), JSON.parse(raw));
    } catch (e) {
      // Se o storage estiver corrompido ou indisponível, segue com dados zerados.
      return defaultProgress();
    }
  }

  function saveProgress(p) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) {
      toast("Não foi possível salvar o progresso neste navegador.");
    }
  }

  /* --------------------------- Montagem de um bloco ------------------------- */
  // Prepara uma pergunta para exibição: embaralha as opções e recalcula o índice correto.
  function prepareQuestion(q) {
    const opts = q.options.map((text, i) => ({ text, isCorrect: i === q.correct }));
    const shuffled = shuffle(opts);
    return {
      ref: q,
      options: shuffled,
      correctIndex: shuffled.findIndex((o) => o.isCorrect)
    };
  }

  // Monta um bloco normal: embaralha tudo e pega os 10 primeiros.
  function buildNormalBlock() {
    return shuffle(QUESTIONS).slice(0, BLOCK_SIZE).map(prepareQuestion);
  }

  // Monta um bloco de revisão: primeiro os erros anteriores, depois completa o resto.
  function buildReviewBlock() {
    const p = loadProgress();
    const wrongSet = new Set(p.wrongQuestionIds);
    const wrong = shuffle(QUESTIONS.filter((q) => wrongSet.has(q.id)));
    const others = shuffle(QUESTIONS.filter((q) => !wrongSet.has(q.id)));
    return wrong.concat(others).slice(0, BLOCK_SIZE).map(prepareQuestion);
  }

  /* ------------------------------- Fluxo do quiz ---------------------------- */
  function startBlock(review) {
    block = review ? buildReviewBlock() : buildNormalBlock();
    if (block.length === 0) {
      toast("Nenhuma pergunta disponível.");
      return;
    }
    if (review && loadProgress().wrongQuestionIds.length === 0) {
      toast("Você não tem erros para revisar. Bom trabalho.");
    }
    current = 0;
    results = [];
    showScreen("screen-quiz");
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const item = block[current];
    const q = item.ref;

    $("q-counter").textContent = (current + 1) + " / " + block.length;
    $("q-topic").textContent = q.topic;
    $("q-progress").style.width = ((current) / block.length * 100) + "%";
    $("q-text").textContent = q.question;

    const list = $("q-options");
    list.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E", "F"];

    item.options.forEach((opt, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.innerHTML = '<span class="mark">' + letters[i] + '</span>' + escapeHtml(opt.text);
      btn.addEventListener("click", () => answer(i));
      li.appendChild(btn);
      list.appendChild(li);
    });

    $("q-feedback").hidden = true;
    $("q-feedback").innerHTML = "";
    $("btn-next").hidden = true;
  }

  function answer(choiceIndex) {
    if (answered) return;
    answered = true;

    const item = block[current];
    const q = item.ref;
    const isCorrect = choiceIndex === item.correctIndex;

    // Marca visualmente as opções
    const buttons = $("q-options").querySelectorAll(".option");
    buttons.forEach((b, i) => {
      b.disabled = true;
      if (i === item.correctIndex) b.classList.add("is-correct");
      if (i === choiceIndex && !isCorrect) b.classList.add("is-wrong");
    });

    // Registra o resultado
    results.push({
      id: q.id,
      topic: q.topic,
      question: q.question,
      chosenText: item.options[choiceIndex].text,
      correctText: item.options[item.correctIndex].text,
      explanation: q.explanation,
      trap: q.trap,
      trigger: q.trigger,
      isCorrect: isCorrect
    });

    // Painel de feedback honesto
    const fb = $("q-feedback");
    fb.hidden = false;
    fb.innerHTML =
      verdictHtml(isCorrect) +
      detailHtml("Explicação", q.explanation) +
      detailHtml("Pegadinha", q.trap) +
      detailHtml("Gatilho de memorização", q.trigger, "trigger");

    $("q-progress").style.width = ((current + 1) / block.length * 100) + "%";

    const next = $("btn-next");
    next.hidden = false;
    next.textContent = (current + 1 < block.length) ? "Próxima" : "Ver resultado";
    next.focus();
  }

  function verdictHtml(ok) {
    return ok
      ? '<div class="verdict ok">✓ Você acertou.</div>'
      : '<div class="verdict bad">✗ Você ERROU. Veja por quê abaixo.</div>';
  }

  function detailHtml(label, text, extraClass) {
    return '<div class="detail ' + (extraClass || "") + '">' +
             '<span class="label">' + label + '</span>' +
             '<span class="text">' + escapeHtml(text) + '</span>' +
           '</div>';
  }

  function nextQuestion() {
    current++;
    if (current < block.length) {
      renderQuestion();
    } else {
      finishBlock();
    }
  }

  /* ------------------------------ Fim do bloco ------------------------------ */
  function finishBlock() {
    const correct = results.filter((r) => r.isCorrect).length;
    const wrong = results.length - correct;

    // Atualiza progresso persistido
    const p = loadProgress();
    p.blocksCompleted += 1;
    p.totalCorrect += correct;
    p.totalWrong += wrong;

    const wrongSet = new Set(p.wrongQuestionIds);
    results.forEach((r) => {
      if (r.isCorrect) {
        wrongSet.delete(r.id);                 // dominou: sai da lista de revisão
      } else {
        wrongSet.add(r.id);                    // errou: entra/permanece na revisão
        p.topicErrors[r.topic] = (p.topicErrors[r.topic] || 0) + 1;
      }
    });
    p.wrongQuestionIds = Array.from(wrongSet);
    saveProgress(p);

    renderResults(correct, wrong);
    showScreen("screen-results");
  }

  function renderResults(correct, wrong) {
    $("r-correct").textContent = correct;
    $("r-wrong").textContent = wrong;

    // Mensagem honesta conforme desempenho
    const pct = Math.round((correct / results.length) * 100);
    let msg;
    if (pct === 100) msg = "Bloco perfeito. Mantenha o ritmo, mas não relaxe nas pegadinhas.";
    else if (pct >= 70) msg = "Acima da linha de corte típica do exame (65%). Ainda há erros para eliminar.";
    else if (pct >= 50) msg = "Abaixo do confortável. Revise os erros antes de avançar.";
    else msg = "Resultado fraco. Não adianta seguir: revise tópico por tópico.";
    $("r-headline").textContent = "Você acertou " + correct + " de " + results.length + " (" + pct + "%)";
    $("r-message").textContent = msg;

    const wrongList = results.filter((r) => !r.isCorrect);
    const container = $("r-wrong-list");
    const title = $("r-wrong-title");

    if (wrongList.length === 0) {
      title.style.display = "none";
      container.innerHTML = '<div class="empty">Nenhum erro neste bloco.</div>';
      $("btn-email").style.display = "none";
      $("btn-copy").style.display = "none";
    } else {
      title.style.display = "";
      $("btn-email").style.display = "";
      $("btn-copy").style.display = "";
      container.innerHTML = wrongList.map(wrongItemHtml).join("");
    }
  }

  function wrongItemHtml(r) {
    return '<div class="wrong-item">' +
      '<div class="q">' + escapeHtml(r.question) + '</div>' +
      '<div class="row"><b>Tópico:</b> ' + escapeHtml(r.topic) + '</div>' +
      '<div class="row">Sua resposta: <span class="yours">' + escapeHtml(r.chosenText) + '</span></div>' +
      '<div class="row">Correta: <span class="right">' + escapeHtml(r.correctText) + '</span></div>' +
      '<div class="row"><b>Explicação:</b> ' + escapeHtml(r.explanation) + '</div>' +
      '<div class="row"><b>Pegadinha:</b> ' + escapeHtml(r.trap) + '</div>' +
      '<div class="row"><b>Gatilho:</b> ' + escapeHtml(r.trigger) + '</div>' +
    '</div>';
  }

  /* --------------------------- Envio / cópia de erros ----------------------- */
  function buildErrorsText() {
    const wrongList = results.filter((r) => !r.isCorrect);
    const lines = [];
    lines.push("Erros — ITIL 4 Foundation");
    lines.push("Data: " + new Date().toLocaleString("pt-BR"));
    lines.push("Total de erros neste bloco: " + wrongList.length);
    lines.push("");
    wrongList.forEach((r, i) => {
      lines.push((i + 1) + ") [" + r.topic + "]");
      lines.push("Pergunta: " + r.question);
      lines.push("Minha resposta: " + r.chosenText);
      lines.push("Resposta correta: " + r.correctText);
      lines.push("Explicação: " + r.explanation);
      lines.push("Pegadinha: " + r.trap);
      lines.push("Gatilho: " + r.trigger);
      lines.push("");
    });
    return lines.join("\n");
  }

  function sendEmail() {
    const wrongCount = results.filter((r) => !r.isCorrect).length;
    if (wrongCount === 0) return;
    const subject = "Erros ITIL 4 Foundation — " + new Date().toLocaleDateString("pt-BR");
    const body = buildErrorsText();
    // mailto não tem destinatário fixo: o usuário escolhe para quem enviar (ex.: ele mesmo).
    const href = "mailto:?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = href;
  }

  async function copyErrors() {
    const text = buildErrorsText();
    try {
      await navigator.clipboard.writeText(text);
      toast("Erros copiados.");
    } catch (e) {
      // Fallback para navegadores sem permissão de clipboard
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); toast("Erros copiados."); }
      catch (_) { toast("Não foi possível copiar."); }
      document.body.removeChild(ta);
    }
  }

  /* ------------------------------- Estatísticas ----------------------------- */
  function renderHomeSummary() {
    const p = loadProgress();
    const total = p.totalCorrect + p.totalWrong;
    $("hs-blocks").textContent = p.blocksCompleted;
    $("hs-rate").textContent = total ? Math.round(p.totalCorrect / total * 100) + "%" : "—";

    const weak = topWeakTopics(p, 1);
    $("hs-weak").textContent = weak.length
      ? "Tópico mais fraco: " + weak[0].topic + " (" + weak[0].count + " erros)."
      : "Sem erros registrados ainda.";
  }

  function topWeakTopics(p, limit) {
    return Object.keys(p.topicErrors)
      .map((topic) => ({ topic, count: p.topicErrors[topic] }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit || 99);
  }

  function renderStats() {
    const p = loadProgress();
    const total = p.totalCorrect + p.totalWrong;
    $("st-correct").textContent = p.totalCorrect;
    $("st-wrong").textContent = p.totalWrong;
    $("st-rate").textContent = total ? Math.round(p.totalCorrect / total * 100) + "%" : "—";
    $("st-blocks").textContent = p.blocksCompleted;

    const weak = topWeakTopics(p);
    const box = $("st-weak");
    if (weak.length === 0) {
      box.innerHTML = '<div class="empty">Sem erros registrados. Faça alguns blocos.</div>';
      return;
    }
    const max = weak[0].count;
    box.innerHTML = weak.map((w) =>
      '<div class="bar-row">' +
        '<div class="top"><span>' + escapeHtml(w.topic) + '</span><span class="cnt">' + w.count + '</span></div>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + (w.count / max * 100) + '%"></div></div>' +
      '</div>'
    ).join("");
  }

  function resetProgress() {
    if (!confirm("Apagar TODO o progresso salvo neste navegador? Isso não pode ser desfeito.")) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    renderStats();
    renderHomeSummary();
    toast("Progresso apagado.");
  }

  /* --------------------------------- Segurança ------------------------------ */
  // Escapa texto para evitar qualquer interpretação de HTML (boa prática).
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ------------------------------- Ligações de UI --------------------------- */
  function bind() {
    $("btn-start").addEventListener("click", () => startBlock(false));
    $("btn-review").addEventListener("click", () => startBlock(true));
    $("btn-next").addEventListener("click", nextQuestion);

    $("btn-email").addEventListener("click", sendEmail);
    $("btn-copy").addEventListener("click", copyErrors);
    $("btn-newblock").addEventListener("click", () => startBlock(false));
    $("btn-home").addEventListener("click", () => { renderHomeSummary(); showScreen("screen-home"); });

    $("nav-stats").addEventListener("click", () => { renderStats(); showScreen("screen-stats"); });
    $("btn-back").addEventListener("click", () => { renderHomeSummary(); showScreen("screen-home"); });
    $("btn-reset").addEventListener("click", resetProgress);
  }

  /* ---------------------------------- Início -------------------------------- */
  document.addEventListener("DOMContentLoaded", function () {
    bind();
    renderHomeSummary();
  });
})();
