# Treinador ITIL 4 Foundation

App web **mobile-first**, estático e leve para estudar ITIL 4 Foundation em blocos de 10 perguntas, com correção honesta, explicação, pegadinha e gatilho de memorização. Sem backend, sem banco externo, pronto para **GitHub Pages**.

> Todas as perguntas são **originais**, escritas a partir dos conceitos do syllabus oficial. Nenhum dump, questão vazada ou material protegido por copyright.

## Funcionalidades

- 63 perguntas originais distribuídas pelos 8 tópicos do exame.
- 1 pergunta por vez, em blocos de 10, com perguntas e alternativas embaralhadas.
- Feedback imediato e direto: acertou/errou, explicação, pegadinha e gatilho.
- Tela de resultado com acertos/erros e o detalhe de cada questão errada.
- Botão **Enviar erros por e-mail** (via `mailto:`) e **Copiar erros** (fallback).
- **Novo bloco de 10** e modo **Revisar meus erros** (mostra primeiro o que você errou).
- Progresso salvo em `localStorage`: blocos feitos, taxa de acerto e tópicos mais fracos.
- Tela de estatísticas e modo escuro automático.

## Estrutura de pastas

```
itil4-quiz/
├── index.html          # estrutura das 4 telas (início, quiz, resultado, estatísticas)
├── css/
│   └── style.css       # estilos mobile-first, modo escuro, foco acessível
├── js/
│   ├── questions.js    # banco de perguntas (const JS, exposto em window)
│   └── app.js          # toda a lógica: bloco, feedback, storage, mailto, stats
└── README.md
```

## Arquitetura (resumo)

- **Camada de dados** (`questions.js`): array `QUESTIONS` + objeto `TOPICS`, expostos em `window`. Optei por **JS puro em vez de `.json` carregado via `fetch`** — assim o app funciona no GitHub Pages **e** aberto direto do disco (`file://`), sem erro de CORS. Editar é igual a um JSON: cada item tem `id`, `topic`, `question`, `options`, `correct`, `explanation`, `trap`, `trigger`.
- **Camada de lógica** (`app.js`): IIFE isolada, sem variáveis globais vazando. Embaralha bloco e alternativas (Fisher–Yates), controla o fluxo do quiz, calcula resultado, persiste em `localStorage` e gera o texto do e-mail.
- **Camada de apresentação** (`index.html` + `style.css`): 4 telas no mesmo HTML, alternadas por classe `.active`. CSS mobile-first com variáveis e modo escuro via `prefers-color-scheme`.

Sem build, sem dependências, sem framework — abre e roda.

## Rodar localmente

Abra `index.html` no navegador (duplo clique já funciona). Para simular o ambiente real:

```bash
# opcional, com Python instalado:
python3 -m http.server 8080
# acesse http://localhost:8080
```

## Publicar no GitHub Pages (passo a passo)

1. Crie um repositório no GitHub, por exemplo `itil4-quiz`.
2. Suba os arquivos mantendo a estrutura de pastas. Pelo terminal:
   ```bash
   cd itil4-quiz
   git init
   git add .
   git commit -m "App de estudo ITIL 4 Foundation"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/itil4-quiz.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/ (root)`. Salve.
6. Aguarde ~1 minuto. A URL aparece no topo da página de Pages:
   `https://SEU_USUARIO.github.io/itil4-quiz/`
7. Abra essa URL no celular e adicione à tela inicial para usar como app.

Não é preciso `.nojekyll` nem configuração extra — não há pastas com `_`.

## Editar / adicionar perguntas

Abra `js/questions.js` e copie um item existente. Use `correct` como o índice (0 a 3) da alternativa certa em `options`. O `topic` deve ser um dos valores de `TOPICS`. Não precisa mexer em mais nada.

## Sugestões de melhorias futuras

- **Modo simulado**: 40 questões cronometradas (60 min) com corte em 65%, replicando o formato do exame.
- **Repetição espaçada (SRS)**: priorizar revisão por intervalo crescente, não só "errou/acertou".
- **Estatística por tópico ao longo do tempo**: gráfico de evolução por área.
- **Importar/exportar progresso** em JSON (backup entre dispositivos, já que `localStorage` é por navegador).
- **PWA**: `manifest.json` + service worker para uso offline e instalação como app.
- **Banco maior e versionado**: separar por nível de dificuldade e marcar perguntas "mais erradas pela comunidade".
- **Acessibilidade**: navegação por teclado nas alternativas (1–4) e leitura por leitor de tela.
```
