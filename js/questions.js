/* ============================================================================
 *  BANCO DE PERGUNTAS — ITIL 4 Foundation
 *  ----------------------------------------------------------------------------
 *  TODAS as perguntas abaixo são ORIGINAIS, escritas a partir dos CONCEITOS do
 *  syllabus oficial do ITIL 4 Foundation. Nenhuma é cópia de prova real, dump
 *  ou material protegido. Você pode editar/expandir à vontade.
 *
 *  Formato de cada questão:
 *  {
 *    id:          identificador único (string)
 *    topic:       um dos tópicos oficiais (ver TOPICS abaixo)
 *    question:    enunciado
 *    options:     array de 4 alternativas
 *    correct:     índice (0..3) da alternativa correta
 *    explanation: explicação objetiva do porquê
 *    trap:        a "pegadinha" — o que costuma confundir
 *    trigger:     gatilho curto de memorização
 *  }
 * ========================================================================== */

const TOPICS = {
  SMC: "Conceitos de Service Management",
  SVS: "Service Value System (SVS)",
  DIM: "Four Dimensions",
  GP:  "Guiding Principles",
  SVC: "Service Value Chain",
  PRA: "ITIL Practices",
  CI:  "Continual Improvement",
  SLA: "SLA / Métricas / KPIs"
};

const QUESTIONS = [
  /* ---------------------------- SERVICE MANAGEMENT --------------------------- */
  {
    id: "smc-01",
    topic: TOPICS.SMC,
    question: "Qual é a melhor definição de 'serviço' segundo o ITIL 4?",
    options: [
      "Um meio de habilitar a cocriação de valor ao facilitar resultados que o cliente quer, sem que ele gerencie custos e riscos específicos",
      "Um conjunto de equipamentos de TI entregues ao cliente em regime de aluguel",
      "Uma tarefa executada pela equipe de TI para corrigir uma falha",
      "Um contrato formal que define penalidades por indisponibilidade"
    ],
    correct: 0,
    explanation: "Serviço é um meio de cocriar valor facilitando resultados desejados pelo cliente, removendo dele custos e riscos específicos.",
    trap: "A definição NÃO fala em entregar valor sozinho nem em equipamentos: o foco é cocriação e remoção de custos/riscos.",
    trigger: "Serviço = cocriar valor + tirar custo/risco do cliente."
  },
  {
    id: "smc-02",
    topic: TOPICS.SMC,
    question: "A diferença entre 'output' (saída) e 'outcome' (resultado) é que:",
    options: [
      "São sinônimos no ITIL 4",
      "Output é o entregável tangível ou intangível; outcome é o resultado para um stakeholder, habilitado por uma ou mais saídas",
      "Output é sempre financeiro e outcome é sempre técnico",
      "Outcome é o entregável e output é a percepção do cliente"
    ],
    correct: 1,
    explanation: "Output é aquilo que se produz (um relatório, um sistema). Outcome é o resultado obtido por um stakeholder graças a uma ou mais saídas.",
    trap: "É fácil inverter os dois. Lembre: a saída existe para habilitar o resultado, não o contrário.",
    trigger: "Output = o que entrego. Outcome = o que o cliente CONSEGUE com isso."
  },
  {
    id: "smc-03",
    topic: TOPICS.SMC,
    question: "No ITIL 4, 'utility' e 'warranty' referem-se respectivamente a:",
    options: [
      "Custo e risco do serviço",
      "Fitness for purpose (o que o serviço faz) e fitness for use (quão bem ele desempenha)",
      "Disponibilidade e capacidade",
      "Valor percebido e valor entregue"
    ],
    correct: 1,
    explanation: "Utility = adequação ao propósito (a função). Warranty = adequação ao uso (desempenho: disponibilidade, capacidade, segurança, continuidade).",
    trap: "Disponibilidade/capacidade são EXEMPLOS de warranty, não a definição. Não confunda o exemplo com o conceito.",
    trigger: "Utility = o QUE faz. Warranty = quão BEM faz. (Ambos precisam existir para ter valor.)"
  },
  {
    id: "smc-04",
    topic: TOPICS.SMC,
    question: "Quais papéis um 'service consumer' pode assumir?",
    options: [
      "Apenas usuário",
      "Cliente, usuário e patrocinador (sponsor)",
      "Fornecedor, parceiro e auditor",
      "Apenas cliente e fornecedor"
    ],
    correct: 1,
    explanation: "O consumidor de serviço é um papel genérico que se desdobra em cliente (define requisitos/resultados), usuário (usa o serviço) e patrocinador (autoriza o orçamento).",
    trap: "A mesma pessoa pode acumular os três papéis, mas isso não os torna iguais — cada um tem uma função distinta.",
    trigger: "Consumidor = Cliente (define) + Usuário (usa) + Sponsor (paga)."
  },
  {
    id: "smc-05",
    topic: TOPICS.SMC,
    question: "O que é um 'service offering'?",
    options: [
      "Um desconto promocional dado a clientes fiéis",
      "Uma descrição de um ou mais serviços, desenhada para atender às necessidades de um grupo-alvo de consumidores",
      "O contrato de SLA assinado entre as partes",
      "A fatura mensal enviada ao cliente"
    ],
    correct: 1,
    explanation: "Service offering é a descrição formal de serviços para um público-alvo; pode incluir bens, acesso a recursos e ações de serviço.",
    trap: "Não é o contrato nem o preço: é a oferta/descrição do que está disponível para um grupo de consumidores.",
    trigger: "Offering = 'cardápio' do serviço (bens + acesso + ações)."
  },
  {
    id: "smc-06",
    topic: TOPICS.SMC,
    question: "Valor (value) no ITIL 4 é melhor descrito como:",
    options: [
      "O custo total de propriedade do serviço",
      "Os benefícios percebidos, utilidade e importância de algo",
      "O lucro que o provedor obtém",
      "A quantidade de incidentes evitados"
    ],
    correct: 1,
    explanation: "Valor é a percepção de benefícios, utilidade e importância — e é subjetivo e cocriado entre provedor e consumidor.",
    trap: "Valor não é objetivo nem fixo: depende da PERCEPÇÃO do stakeholder, por isso é cocriado.",
    trigger: "Valor = percepção (benefício + utilidade + importância)."
  },
  {
    id: "smc-07",
    topic: TOPICS.SMC,
    question: "Uma 'service relationship' inclui quais atividades conjuntas?",
    options: [
      "Provisão do serviço, consumo do serviço e gestão da relação de serviço",
      "Compra, venda e auditoria",
      "Apenas a entrega técnica do serviço",
      "Marketing, vendas e cobrança"
    ],
    correct: 0,
    explanation: "A relação de serviço cobre provisão (pelo provedor), consumo (pelo consumidor) e gestão contínua da relação entre as partes.",
    trap: "Não se resume à entrega técnica: a relação é uma cooperação contínua entre provedor e consumidor.",
    trigger: "Relação de serviço = Provisão + Consumo + Gestão da relação."
  },

  /* -------------------------- SERVICE VALUE SYSTEM -------------------------- */
  {
    id: "svs-01",
    topic: TOPICS.SVS,
    question: "Quais são os componentes do Service Value System (SVS)?",
    options: [
      "Plan, Improve, Engage, Design, Obtain, Deliver",
      "Guiding Principles, Governance, Service Value Chain, Practices e Continual Improvement",
      "Pessoas, Processos, Produtos e Parceiros",
      "Utility, Warranty, Custo e Risco"
    ],
    correct: 1,
    explanation: "O SVS é formado por: princípios orientadores, governança, cadeia de valor de serviço, práticas e melhoria contínua.",
    trap: "A primeira opção lista as atividades da SVC (que é só UM componente do SVS), não os componentes do SVS.",
    trigger: "SVS = Princípios + Governança + SVC + Práticas + Melhoria Contínua."
  },
  {
    id: "svs-02",
    topic: TOPICS.SVS,
    question: "Quais são as entradas (inputs) e a saída (output) do SVS?",
    options: [
      "Entrada: dinheiro / Saída: lucro",
      "Entradas: oportunidade e demanda / Saída: valor",
      "Entrada: incidentes / Saída: mudanças",
      "Entradas: requisitos e SLA / Saída: relatórios"
    ],
    correct: 1,
    explanation: "O SVS recebe oportunidade e demanda como entradas e produz valor como saída.",
    trap: "Oportunidade e demanda são coisas diferentes: demanda é a necessidade existente; oportunidade é a possibilidade de agregar valor.",
    trigger: "Entra Oportunidade + Demanda → Sai Valor."
  },
  {
    id: "svs-03",
    topic: TOPICS.SVS,
    question: "Qual é o propósito do SVS?",
    options: [
      "Garantir que a organização opere apenas com fornecedores certificados",
      "Assegurar que a organização cocrie valor continuamente com todos os stakeholders por meio do uso e gestão de produtos e serviços",
      "Reduzir o número de mudanças emergenciais",
      "Substituir completamente frameworks anteriores"
    ],
    correct: 1,
    explanation: "O SVS descreve como todos os componentes e atividades trabalham juntos para habilitar a cocriação de valor.",
    trap: "O SVS não é sobre uma prática isolada nem sobre fornecedores: é a visão do TODO funcionando junto.",
    trigger: "SVS = o sistema inteiro funcionando junto para cocriar valor."
  },
  {
    id: "svs-04",
    topic: TOPICS.SVS,
    question: "O que é 'governance' dentro do SVS?",
    options: [
      "A automação de tarefas repetitivas",
      "O meio pelo qual a organização é dirigida e controlada",
      "O conjunto de SLAs ativos",
      "A lista de práticas certificadas"
    ],
    correct: 1,
    explanation: "Governança é como a organização é dirigida e controlada (avaliar, direcionar e monitorar).",
    trap: "Governança não é gestão do dia a dia: ela DIRECIONA e MONITORA, não executa as operações.",
    trigger: "Governança = Avaliar, Direcionar, Monitorar (não executar)."
  },
  {
    id: "svs-05",
    topic: TOPICS.SVS,
    question: "Por que o SVS foi desenhado para combater 'silos' organizacionais?",
    options: [
      "Porque silos reduzem custos com licenças",
      "Porque a integração e a coordenação entre componentes evitam o trabalho isolado que destrói valor",
      "Porque silos são proibidos por lei",
      "Porque silos aumentam a quantidade de práticas"
    ],
    correct: 1,
    explanation: "O SVS enfatiza a integração: componentes e atividades flexíveis se combinam em vários value streams, evitando trabalho em silos.",
    trap: "O objetivo não é cortar custo, e sim eliminar o isolamento entre áreas que impede a cocriação de valor.",
    trigger: "SVS = anti-silo: tudo se integra em value streams."
  },

  /* ---------------------------- FOUR DIMENSIONS ----------------------------- */
  {
    id: "dim-01",
    topic: TOPICS.DIM,
    question: "Quais são as quatro dimensões do gerenciamento de serviços?",
    options: [
      "Pessoas, Processos, Produtos, Parceiros",
      "Organizações e Pessoas; Informação e Tecnologia; Parceiros e Fornecedores; Fluxos de Valor e Processos",
      "Plan, Build, Run, Improve",
      "Utility, Warranty, Custo, Risco"
    ],
    correct: 1,
    explanation: "As quatro dimensões são: Organizações & Pessoas; Informação & Tecnologia; Parceiros & Fornecedores; Fluxos de Valor & Processos.",
    trap: "'Pessoas, Processos, Produtos, Parceiros' é a antiga visão dos 4Ps do ITIL v3 — não é a resposta no ITIL 4.",
    trigger: "4 Dimensões: Org/Pessoas · Info/Tech · Parceiros/Fornec · Fluxos/Processos."
  },
  {
    id: "dim-02",
    topic: TOPICS.DIM,
    question: "Se uma das quatro dimensões for negligenciada, o resultado provável é:",
    options: [
      "Nenhum impacto, pois as dimensões são independentes",
      "Serviços e produtos podem se tornar ineficazes ou de baixa qualidade",
      "Aumento automático da maturidade",
      "Redução obrigatória do número de práticas"
    ],
    correct: 1,
    explanation: "As quatro dimensões devem ser consideradas em conjunto; ignorar uma compromete a qualidade e a eficácia do serviço.",
    trap: "As dimensões NÃO são independentes nem opcionais — todas se aplicam a tudo no SVS.",
    trigger: "4 dimensões = sempre todas, sempre juntas."
  },
  {
    id: "dim-03",
    topic: TOPICS.DIM,
    question: "Fatores externos que afetam todas as quatro dimensões são frequentemente analisados pelo modelo:",
    options: [
      "SWOT",
      "PESTLE (Político, Econômico, Social, Tecnológico, Legal, Ambiental)",
      "RACI",
      "DIKW"
    ],
    correct: 1,
    explanation: "O ITIL 4 usa o PESTLE para descrever os fatores externos (político, econômico, social, tecnológico, legal, ambiental) que influenciam as dimensões.",
    trap: "RACI é matriz de responsabilidades e DIKW é hierarquia de conhecimento — nenhum descreve fatores externos.",
    trigger: "Fatores externos = PESTLE."
  },
  {
    id: "dim-04",
    topic: TOPICS.DIM,
    question: "A dimensão 'Parceiros e Fornecedores' trata principalmente de:",
    options: [
      "Apenas contratos jurídicos",
      "As relações da organização com outras organizações envolvidas no desenho, entrega e suporte dos serviços",
      "Somente a aquisição de hardware",
      "O treinamento interno da equipe"
    ],
    correct: 1,
    explanation: "Essa dimensão cobre as relações com terceiros e como a estratégia de sourcing influencia a entrega de valor.",
    trap: "Não é só contrato nem só compra de hardware: abrange toda a colaboração com terceiros, incluindo parcerias.",
    trigger: "Parceiros/Fornecedores = com quem você conta para entregar o serviço."
  },
  {
    id: "dim-05",
    topic: TOPICS.DIM,
    question: "A dimensão 'Informação e Tecnologia' inclui qual preocupação frequentemente esquecida?",
    options: [
      "A cor da interface do sistema",
      "Como a informação é gerenciada e protegida (incluindo segurança e conformidade)",
      "O salário da equipe técnica",
      "O número de fornecedores ativos"
    ],
    correct: 1,
    explanation: "Além da tecnologia em si, essa dimensão abrange a gestão da informação, sua arquitetura, segurança e conformidade.",
    trap: "Pegadinha clássica: focar só na 'tecnologia' e esquecer que a 'informação' (e sua proteção) também faz parte da dimensão.",
    trigger: "Info+Tech = não é só o sistema, é também o DADO e sua proteção."
  },

  /* --------------------------- GUIDING PRINCIPLES --------------------------- */
  {
    id: "gp-01",
    topic: TOPICS.GP,
    question: "Quantos são os princípios orientadores (guiding principles) do ITIL 4?",
    options: ["5", "6", "7", "9"],
    correct: 2,
    explanation: "São 7 princípios orientadores no ITIL 4.",
    trap: "É comum confundir com o número de atividades da SVC (6) ou de componentes do SVS (5).",
    trigger: "Princípios = 7. SVC = 6. SVS = 5."
  },
  {
    id: "gp-02",
    topic: TOPICS.GP,
    question: "O princípio 'Comece de onde você está' (start where you are) orienta a:",
    options: [
      "Descartar tudo o que existe e recomeçar do zero",
      "Avaliar e reaproveitar o que já existe antes de criar algo novo, medindo o estado atual com dados reais",
      "Esperar a aprovação da diretoria antes de qualquer ação",
      "Terceirizar imediatamente o serviço"
    ],
    correct: 1,
    explanation: "Antes de construir o novo, avalie objetivamente o que já existe e pode ser reutilizado, baseado em medições reais.",
    trap: "A pegadinha é achar que o princípio manda 'jogar tudo fora e recomeçar' — é exatamente o oposto.",
    trigger: "Comece de onde está = NÃO recomece do zero; reaproveite e meça."
  },
  {
    id: "gp-03",
    topic: TOPICS.GP,
    question: "O princípio 'Progrida iterativamente com feedback' significa:",
    options: [
      "Entregar tudo de uma vez para economizar tempo",
      "Organizar o trabalho em etapas menores, usando o feedback de cada uma para ajustar as próximas",
      "Evitar mudanças até ter 100% dos requisitos",
      "Trabalhar sem planejamento"
    ],
    correct: 1,
    explanation: "Divida o trabalho em iterações gerenciáveis e use o feedback de cada uma para refinar as seguintes.",
    trap: "Iterar não é trabalhar sem plano: cada iteração tem objetivo e gera feedback para a próxima.",
    trigger: "Iterativo + feedback = passos pequenos que se corrigem no caminho."
  },
  {
    id: "gp-04",
    topic: TOPICS.GP,
    question: "Qual princípio incentiva remover o que não agrega valor, evitando soluções complexas demais?",
    options: [
      "Foque no valor",
      "Mantenha simples e prático (keep it simple and practical)",
      "Pense e trabalhe de forma holística",
      "Colabore e promova visibilidade"
    ],
    correct: 1,
    explanation: "'Mantenha simples e prático' orienta a eliminar etapas e controles que não contribuem para o resultado.",
    trap: "Simples não é incompleto: você remove o que NÃO agrega valor, sem comprometer o resultado.",
    trigger: "Simples e prático = corte o que não agrega valor (mas mantenha o que funciona)."
  },
  {
    id: "gp-05",
    topic: TOPICS.GP,
    question: "Em 'Otimize e automatize', qual é a ordem correta?",
    options: [
      "Automatize primeiro, otimize depois",
      "Otimize primeiro (torne o processo o mais eficaz possível) e só então automatize",
      "Otimize e automatize são a mesma coisa",
      "Automatize tudo, sempre, sem otimizar"
    ],
    correct: 1,
    explanation: "Primeiro otimize o processo (eliminando desperdício); só depois automatize. Automatizar um processo ruim apenas o torna mais rápido em errar.",
    trap: "Pegadinha de ordem: automatizar antes de otimizar perpetua ineficiências.",
    trigger: "Otimize → DEPOIS automatize (nunca automatize a bagunça)."
  },
  {
    id: "gp-06",
    topic: TOPICS.GP,
    question: "O princípio 'Foque no valor' (focus on value) determina que:",
    options: [
      "Toda atividade deve, direta ou indiretamente, criar valor para os stakeholders",
      "O foco deve estar apenas no lucro do provedor",
      "Apenas atividades técnicas geram valor",
      "Valor é definido unicamente pela equipe de TI"
    ],
    correct: 0,
    explanation: "Tudo o que a organização faz deve se conectar à criação de valor, direta ou indiretamente, sempre na perspectiva do consumidor.",
    trap: "Valor é definido pelo consumidor/stakeholder, não pela TI. Cuidado com a opção que coloca a TI como dona do valor.",
    trigger: "Foco no valor = valor é do CONSUMIDOR, e tudo deve apontar para ele."
  },
  {
    id: "gp-07",
    topic: TOPICS.GP,
    question: "'Pense e trabalhe de forma holística' implica que:",
    options: [
      "Cada equipe deve otimizar apenas a sua própria parte",
      "Nenhum serviço, prática ou componente existe isolado; o resultado depende do funcionamento do todo",
      "Apenas a alta gestão precisa ter visão do todo",
      "Holístico significa lento e burocrático"
    ],
    correct: 1,
    explanation: "Serviços e práticas devem ser vistos como um todo integrado; otimizar uma parte isoladamente pode prejudicar o conjunto.",
    trap: "Otimização local (cada um cuidando só do seu pedaço) costuma destruir valor do todo — o oposto do holístico.",
    trigger: "Holístico = o todo importa mais que a soma das partes."
  },

  /* --------------------------- SERVICE VALUE CHAIN -------------------------- */
  {
    id: "svc-01",
    topic: TOPICS.SVC,
    question: "Quais são as seis atividades da Service Value Chain (SVC)?",
    options: [
      "Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support",
      "Strategy, Design, Transition, Operation, Improvement, Governance",
      "Identify, Assess, Approve, Build, Test, Release",
      "Plan, Do, Check, Act, Review, Close"
    ],
    correct: 0,
    explanation: "As 6 atividades da SVC são: Plan, Improve, Engage, Design & Transition, Obtain/Build e Deliver & Support.",
    trap: "Strategy/Design/Transition/Operation são as fases do ITIL v3 (lifecycle) — não são atividades da SVC do ITIL 4.",
    trigger: "SVC (6): Plan, Improve, Engage, Design&Transition, Obtain/Build, Deliver&Support."
  },
  {
    id: "svc-02",
    topic: TOPICS.SVC,
    question: "Qual atividade da SVC é responsável por entender as necessidades dos stakeholders e manter boas relações?",
    options: ["Plan", "Engage", "Deliver & Support", "Improve"],
    correct: 1,
    explanation: "'Engage' garante o bom entendimento das necessidades dos stakeholders, transparência e relacionamento contínuo.",
    trap: "Não confunda com 'Deliver & Support', que cuida da entrega e suporte do dia a dia, não do relacionamento estratégico.",
    trigger: "Engage = ENGAJAR stakeholders (relacionamento e demanda)."
  },
  {
    id: "svc-03",
    topic: TOPICS.SVC,
    question: "Sobre a SVC, é CORRETO afirmar que:",
    options: [
      "As atividades seguem sempre uma sequência fixa e linear",
      "As atividades se combinam de maneiras diferentes formando múltiplos value streams",
      "Cada atividade só pode ser usada uma vez por ano",
      "A SVC substitui os princípios orientadores"
    ],
    correct: 1,
    explanation: "A SVC é flexível: suas atividades se combinam em diferentes sequências (value streams) conforme o cenário.",
    trap: "Pegadinha clássica: achar que a SVC é linear como o antigo lifecycle. Ela é flexível e não-sequencial.",
    trigger: "SVC NÃO é linear: vira vários value streams."
  },
  {
    id: "svc-04",
    topic: TOPICS.SVC,
    question: "A atividade 'Obtain/Build' tem como objetivo:",
    options: [
      "Garantir que componentes de serviço estejam disponíveis quando e onde necessários, atendendo às especificações",
      "Negociar SLAs com o cliente",
      "Encerrar incidentes",
      "Definir a visão estratégica da organização"
    ],
    correct: 0,
    explanation: "'Obtain/Build' assegura a disponibilidade dos componentes de serviço (comprados ou construídos) conforme especificado.",
    trap: "Negociar SLA é mais ligado a 'Engage'; visão estratégica é 'Plan'. Não misture os objetivos.",
    trigger: "Obtain/Build = obter ou construir os componentes prontos para uso."
  },
  {
    id: "svc-05",
    topic: TOPICS.SVC,
    question: "Qual atividade conecta-se a TODAS as outras na cadeia de valor, recebendo e fornecendo informação a cada uma?",
    options: [
      "Deliver & Support, apenas",
      "Engage, pois interage com stakeholders em todas as etapas",
      "Improve, pois melhora todas as atividades",
      "Tanto 'Engage' quanto 'Improve' interagem com todas as demais atividades"
    ],
    correct: 3,
    explanation: "No modelo da SVC, 'Engage' e 'Improve' se conectam a todas as outras atividades: o engajamento alimenta toda a cadeia e a melhoria atua sobre toda ela.",
    trap: "Tentador escolher só 'Improve' ou só 'Engage'; o ponto é que AMBOS permeiam toda a cadeia.",
    trigger: "Engage e Improve tocam TODAS as atividades da SVC."
  },

  /* ------------------------------ ITIL PRACTICES ---------------------------- */
  {
    id: "pra-01",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Gerenciamento de Incidentes'?",
    options: [
      "Identificar a causa-raiz de problemas",
      "Minimizar o impacto negativo de incidentes, restaurando o serviço normal o mais rápido possível",
      "Aprovar mudanças de alto risco",
      "Definir os níveis de serviço acordados"
    ],
    correct: 1,
    explanation: "Incident Management busca restaurar o serviço normal o mais rápido possível, reduzindo o impacto.",
    trap: "Causa-raiz é foco de PROBLEM Management, não de Incident Management. Incidente = restaurar rápido, não investigar a fundo.",
    trigger: "Incidente = RESTAURAR RÁPIDO (causa-raiz fica com Problema)."
  },
  {
    id: "pra-02",
    topic: TOPICS.PRA,
    question: "Qual é a diferença entre um 'problema' e um 'erro conhecido' (known error)?",
    options: [
      "São a mesma coisa",
      "Problema é uma causa (ou causa potencial) de incidentes; erro conhecido é um problema analisado mas ainda não resolvido",
      "Erro conhecido é um incidente em aberto",
      "Problema só existe após o serviço cair"
    ],
    correct: 1,
    explanation: "Problema é a causa de um ou mais incidentes. Quando analisado e com causa identificada (mas sem solução definitiva), passa a ser erro conhecido.",
    trap: "Erro conhecido NÃO é incidente; é um problema já analisado, frequentemente com workaround documentado.",
    trigger: "Problema = causa. Erro conhecido = problema analisado (com workaround)."
  },
  {
    id: "pra-03",
    topic: TOPICS.PRA,
    question: "Quais são os três tipos de mudança na prática de 'Change Enablement'?",
    options: [
      "Pequena, média e grande",
      "Padrão (standard), normal e emergencial",
      "Interna, externa e híbrida",
      "Planejada, não planejada e cancelada"
    ],
    correct: 1,
    explanation: "Os tipos de mudança são: padrão (pré-autorizada e de baixo risco), normal (avaliada e autorizada) e emergencial (deve ser implementada o quanto antes).",
    trap: "Não classifique por tamanho: a classificação é por risco/autorização (standard, normal, emergencial).",
    trigger: "Mudanças: Padrão · Normal · Emergencial."
  },
  {
    id: "pra-04",
    topic: TOPICS.PRA,
    question: "Uma 'requisição de serviço' (service request) é:",
    options: [
      "Uma interrupção não planejada do serviço",
      "Uma solicitação do usuário que é parte normal da entrega do serviço (ex.: acesso, informação, item padrão)",
      "Uma mudança emergencial de alto risco",
      "Um problema com causa-raiz desconhecida"
    ],
    correct: 1,
    explanation: "Service request é uma solicitação prevista e de baixo risco, parte normal da prestação do serviço.",
    trap: "Não confunda com incidente: requisição NÃO é falha, é algo esperado (ex.: 'preciso de acesso ao sistema X').",
    trigger: "Service request = pedido normal e esperado (não é falha)."
  },
  {
    id: "pra-05",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática 'Service Desk'?",
    options: [
      "Resolver a causa-raiz de todos os problemas",
      "Ser o ponto único de contato entre o provedor de serviço e os usuários",
      "Aprovar mudanças normais",
      "Negociar contratos com fornecedores"
    ],
    correct: 1,
    explanation: "O Service Desk é o ponto único de contato (SPOC) com os usuários, capturando demanda por resolução de incidentes e requisições.",
    trap: "O valor do Service Desk é cada vez mais sobre experiência e empatia, não apenas 'capacidade técnica'. E ele não resolve causa-raiz.",
    trigger: "Service Desk = ponto ÚNICO de contato (SPOC)."
  },
  {
    id: "pra-06",
    topic: TOPICS.PRA,
    question: "No ITIL 4, as práticas são agrupadas em três categorias. Quais?",
    options: [
      "Estratégicas, táticas e operacionais",
      "Práticas de gestão geral, de gestão de serviço e de gestão técnica",
      "Internas, externas e compartilhadas",
      "Obrigatórias, opcionais e recomendadas"
    ],
    correct: 1,
    explanation: "As 34 práticas se dividem em: gestão geral (general management), gestão de serviços (service management) e gestão técnica (technical management).",
    trap: "Estratégico/tático/operacional é uma classificação genérica de gestão, não a divisão de práticas do ITIL 4.",
    trigger: "Práticas: Geral · Serviço · Técnica."
  },
  {
    id: "pra-07",
    topic: TOPICS.PRA,
    question: "O propósito do 'Problem Management' inclui:",
    options: [
      "Restaurar o serviço o mais rápido possível",
      "Reduzir a probabilidade e o impacto de incidentes identificando causas e gerenciando erros conhecidos e workarounds",
      "Atender solicitações padrão dos usuários",
      "Autorizar mudanças de baixo risco"
    ],
    correct: 1,
    explanation: "Problem Management identifica causas reais e potenciais de incidentes e gerencia erros conhecidos e workarounds para reduzir recorrência.",
    trap: "Restaurar rápido é incidente; problema é prevenir/entender a causa. As práticas se complementam mas têm focos distintos.",
    trigger: "Problema = reduzir recorrência (causas + erros conhecidos)."
  },
  {
    id: "pra-08",
    topic: TOPICS.PRA,
    question: "Quem é a 'autoridade de mudança' (change authority) ideal para mudanças padrão (standard)?",
    options: [
      "Sempre o CAB (Change Advisory Board) em reunião",
      "A autorização já está embutida no procedimento pré-aprovado da mudança padrão",
      "O CEO da empresa",
      "Um auditor externo independente"
    ],
    correct: 1,
    explanation: "Mudanças padrão são pré-autorizadas; a autoridade já está incorporada ao procedimento, dispensando avaliação caso a caso.",
    trap: "CAB é típico de mudanças NORMAIS, não das padrão. Padrão já vem pré-aprovada.",
    trigger: "Mudança padrão = pré-aprovada (sem CAB)."
  },

  /* --------------------------- CONTINUAL IMPROVEMENT ------------------------ */
  {
    id: "ci-01",
    topic: TOPICS.CI,
    question: "Quais são os passos do modelo de melhoria contínua (continual improvement model), na ordem?",
    options: [
      "Plan, Do, Check, Act",
      "Qual é a visão? · Onde estamos agora? · Onde queremos estar? · Como chegamos lá? · Execute a ação · Chegamos lá? · Como manter o momento?",
      "Identificar, Avaliar, Aprovar, Implementar",
      "Detectar, Diagnosticar, Resolver, Fechar"
    ],
    correct: 1,
    explanation: "Os 7 passos vão da visão ao 'como manter o momento', sempre ancorados na visão de negócio.",
    trap: "PDCA é um ciclo genérico de qualidade — o modelo do ITIL 4 tem 7 passos próprios começando pela visão.",
    trigger: "CI: Visão → Onde estamos → Onde queremos → Como chegar → Agir → Chegamos? → Manter momento."
  },
  {
    id: "ci-02",
    topic: TOPICS.CI,
    question: "Qual passo do modelo de melhoria contínua é frequentemente pulado, mas é essencial para baseline?",
    options: [
      "Qual é a visão?",
      "Onde estamos agora? (medir o estado atual)",
      "Execute a ação",
      "Como manter o momento?"
    ],
    correct: 1,
    explanation: "'Onde estamos agora?' estabelece a linha de base medida; sem ela é impossível avaliar se houve melhoria.",
    trap: "Pular a medição inicial é erro comum: sem baseline, você não consegue provar progresso depois.",
    trigger: "Sem 'onde estamos agora' (baseline) = não dá para provar melhoria."
  },
  {
    id: "ci-03",
    topic: TOPICS.CI,
    question: "O que é o 'continual improvement register' (CIR)?",
    options: [
      "Um relatório financeiro anual",
      "Um banco de dados/documento usado para rastrear e gerenciar ideias de melhoria",
      "A lista de incidentes em aberto",
      "O catálogo de serviços"
    ],
    correct: 1,
    explanation: "O CIR é usado para capturar, priorizar e acompanhar oportunidades de melhoria.",
    trap: "Não confunda com catálogo de serviços nem com lista de incidentes — o CIR é específico para IDEIAS de melhoria.",
    trigger: "CIR = lista viva de ideias de melhoria."
  },
  {
    id: "ci-04",
    topic: TOPICS.CI,
    question: "De quem é a responsabilidade pela melhoria contínua em uma organização?",
    options: [
      "Apenas do gerente de melhoria contínua",
      "Apenas da alta direção",
      "De todos — é responsabilidade de cada um, embora possa haver um time/coordenação dedicada",
      "Apenas dos fornecedores"
    ],
    correct: 2,
    explanation: "A melhoria contínua é responsabilidade de todos; pode existir um time dedicado, mas a cultura de melhoria deve permear a organização.",
    trap: "Ter um responsável dedicado não isenta os demais — a melhoria é de TODOS.",
    trigger: "Melhoria contínua = responsabilidade de TODOS."
  },

  /* --------------------------- SLA / MÉTRICAS / KPIs ------------------------ */
  {
    id: "sla-01",
    topic: TOPICS.SLA,
    question: "O que é um SLA (Service Level Agreement)?",
    options: [
      "Um acordo documentado entre provedor e cliente que identifica os serviços e os níveis de serviço esperados",
      "Um contrato com fornecedores externos (terceiros)",
      "Um relatório técnico de incidentes",
      "Um documento interno de configuração"
    ],
    correct: 0,
    explanation: "SLA é o acordo documentado entre provedor e CLIENTE definindo serviços e níveis esperados.",
    trap: "Acordo com fornecedor externo é normalmente um contrato/UC (underpinning contract), não um SLA.",
    trigger: "SLA = acordo com o CLIENTE (com fornecedor é contrato)."
  },
  {
    id: "sla-02",
    topic: TOPICS.SLA,
    question: "O 'efeito melancia' (watermelon effect) descreve a situação em que:",
    options: [
      "O SLA está verde (cumprido) por fora, mas o cliente está insatisfeito (vermelho) por dentro",
      "Há excesso de SLAs cadastrados",
      "Os KPIs estão todos negativos",
      "O serviço foi descontinuado"
    ],
    correct: 0,
    explanation: "O efeito melancia ocorre quando as métricas mostram tudo 'verde', mas a experiência real do cliente é ruim ('vermelha').",
    trap: "O perigo é medir só o que é fácil (métricas técnicas) e ignorar a percepção real do cliente.",
    trigger: "Melancia = verde por fora (SLA ok), vermelho por dentro (cliente insatisfeito)."
  },
  {
    id: "sla-03",
    topic: TOPICS.SLA,
    question: "Boas práticas de SLA recomendam medir:",
    options: [
      "Apenas a disponibilidade do servidor",
      "Um conjunto equilibrado de métricas (balanced bundle) ligado à experiência e aos resultados do cliente",
      "Somente o número de tickets fechados",
      "Apenas o tempo de resposta do help desk"
    ],
    correct: 1,
    explanation: "Recomenda-se um 'balanced bundle' de métricas que reflita a experiência do cliente e os resultados de negócio, não apenas indicadores técnicos isolados.",
    trap: "Medir uma única métrica técnica leva direto ao efeito melancia. O foco deve ser o resultado para o cliente.",
    trigger: "SLA bom = pacote equilibrado focado na experiência do cliente."
  },
  {
    id: "sla-04",
    topic: TOPICS.SLA,
    question: "Qual é a diferença entre uma 'métrica' e um 'KPI'?",
    options: [
      "São sinônimos exatos",
      "Métrica é uma medição; KPI é uma métrica importante usada para avaliar o sucesso em relação a um objetivo",
      "KPI é sempre financeiro; métrica é sempre técnica",
      "Métrica é da TI; KPI é do cliente"
    ],
    correct: 1,
    explanation: "Toda KPI é uma métrica, mas nem toda métrica é KPI: a KPI é a medição selecionada por ser crítica para um objetivo.",
    trap: "Confundir 'medir tudo' com 'medir o que importa'. KPI = a métrica que realmente indica sucesso.",
    trigger: "KPI = métrica que IMPORTA para o objetivo."
  },
  {
    id: "sla-05",
    topic: TOPICS.SLA,
    question: "Para que um SLA seja útil, ele deve estar relacionado a:",
    options: [
      "Métricas baseadas em resultados (outcome-based), refletindo o que o cliente realmente valoriza",
      "Apenas indicadores internos de infraestrutura",
      "Cláusulas jurídicas de penalidade, somente",
      "O número de servidores monitorados"
    ],
    correct: 0,
    explanation: "SLAs eficazes são baseados em resultados percebidos pelo cliente, não apenas em métricas operacionais internas.",
    trap: "SLA não é só penalidade contratual nem só métrica de infra: o foco é o resultado para o cliente.",
    trigger: "SLA eficaz = baseado em OUTCOME do cliente."
  },

  /* --------------------- EXTRAS PARA REFORÇO (mistos) ----------------------- */
  {
    id: "smc-08",
    topic: TOPICS.SMC,
    question: "Custo (cost) e risco (risk), na perspectiva do consumidor, são:",
    options: [
      "Sempre transferidos integralmente ao provedor",
      "Compostos por custos/riscos removidos pelo serviço e custos/riscos impostos pelo serviço",
      "Irrelevantes para a cocriação de valor",
      "Idênticos para todos os serviços"
    ],
    correct: 1,
    explanation: "O serviço remove certos custos/riscos do consumidor, mas também pode impor novos custos/riscos — ambos influenciam o valor percebido.",
    trap: "O serviço não elimina TODO custo/risco; ele pode até introduzir novos. Valor depende do saldo entre o que é removido e o que é imposto.",
    trigger: "Custo/Risco = removidos PELO serviço − impostos PELO serviço."
  },
  {
    id: "gp-08",
    topic: TOPICS.GP,
    question: "'Colabore e promova visibilidade' (collaborate and promote visibility) defende que:",
    options: [
      "A informação deve ser restrita a poucos para garantir controle",
      "Trabalhar em conjunto e tornar o trabalho visível gera melhores resultados e confiança",
      "Cada equipe deve trabalhar isolada para evitar conflito",
      "Visibilidade significa apenas relatórios para a diretoria"
    ],
    correct: 1,
    explanation: "Colaboração entre as pessoas certas e a transparência sobre o trabalho aumentam a confiança e a qualidade das decisões.",
    trap: "Visibilidade não é só 'reportar para cima': é tornar o trabalho transparente para quem precisa, incentivando colaboração.",
    trigger: "Colabore + visibilidade = transparência gera confiança."
  },
  {
    id: "svc-06",
    topic: TOPICS.SVC,
    question: "A atividade 'Improve' da SVC tem como objetivo principal:",
    options: [
      "Entregar serviços conforme acordado",
      "Garantir a melhoria contínua de produtos, serviços e práticas em todas as atividades da cadeia",
      "Obter componentes de fornecedores",
      "Negociar contratos"
    ],
    correct: 1,
    explanation: "'Improve' assegura melhoria contínua de produtos, serviços, práticas e de todas as atividades da SVC.",
    trap: "Não confunda a ATIVIDADE 'Improve' da SVC com a PRÁTICA de melhoria contínua nem com o COMPONENTE do SVS — são camadas diferentes com o mesmo tema.",
    trigger: "Improve (SVC) = melhorar tudo na cadeia, de ponta a ponta."
  },
  {
    id: "dim-06",
    topic: TOPICS.DIM,
    question: "A dimensão 'Fluxos de Valor e Processos' preocupa-se com:",
    options: [
      "Como o trabalho é organizado e como as atividades se integram para criar valor",
      "Apenas o organograma da empresa",
      "Somente os fornecedores externos",
      "A escolha das ferramentas de monitoramento"
    ],
    correct: 0,
    explanation: "Essa dimensão trata de como as atividades, fluxos de trabalho e procedimentos se organizam para entregar valor de forma eficiente.",
    trap: "Organograma é mais 'Organizações e Pessoas'; ferramentas são 'Informação e Tecnologia'. Cuidado em separar as dimensões.",
    trigger: "Fluxos/Processos = COMO o trabalho flui para gerar valor."
  },
  {
    id: "pra-09",
    topic: TOPICS.PRA,
    question: "Qual prática tem o propósito de definir metas claras de níveis de serviço e garantir que a entrega seja avaliada contra elas?",
    options: [
      "Service Level Management",
      "Incident Management",
      "Change Enablement",
      "Service Request Management"
    ],
    correct: 0,
    explanation: "Service Level Management estabelece, monitora e avalia metas de nível de serviço baseadas no negócio.",
    trap: "É comum atribuir SLA só a 'contratos'; na verdade há uma PRÁTICA dedicada (SLM) que cuida das metas e da avaliação contínua.",
    trigger: "SLM = define e mede as METAS de nível de serviço."
  },
  {
    id: "ci-05",
    topic: TOPICS.CI,
    question: "Por que o passo 'Como manter o momento?' (How do we keep the momentum going?) é importante?",
    options: [
      "Porque encerra definitivamente qualquer melhoria",
      "Porque garante que as melhorias sejam sustentadas e incorporadas, evitando regressão ao estado anterior",
      "Porque substitui a necessidade de medir",
      "Porque é opcional e raramente usado"
    ],
    correct: 1,
    explanation: "Sustentar o ganho evita que a organização volte ao comportamento antigo; melhoria sem sustentação se perde.",
    trap: "Melhoria não termina ao 'chegar lá': sem sustentar o momento, o ganho regride.",
    trigger: "Manter momento = não deixar a melhoria regredir."
  },
  {
    id: "svs-06",
    topic: TOPICS.SVS,
    question: "No SVS, os princípios orientadores (guiding principles) servem para:",
    options: [
      "Substituir a governança",
      "Orientar a organização em qualquer circunstância, independentemente de mudanças em metas, estratégias ou estrutura",
      "Definir os SLAs com clientes",
      "Listar as práticas obrigatórias"
    ],
    correct: 1,
    explanation: "Os princípios são recomendações universais que guiam decisões e ações em qualquer contexto.",
    trap: "Princípios não substituem governança nem práticas: eles ORIENTAM o uso de tudo no SVS.",
    trigger: "Princípios = bússola universal (valem sempre)."
  },
  {
    id: "smc-09",
    topic: TOPICS.SMC,
    question: "No contexto de gestão de serviços, 'cocriação de valor' significa que:",
    options: [
      "Só o provedor cria valor e o entrega ao cliente",
      "Provedor e consumidor colaboram ativamente para gerar valor juntos",
      "O valor é criado apenas pelo cliente",
      "Valor é criado automaticamente pela tecnologia"
    ],
    correct: 1,
    explanation: "Valor não é entregue de forma unilateral: provedor e consumidor cooperam, cada um contribuindo para o resultado.",
    trap: "A ideia antiga de 'TI entrega valor pronto' está superada: no ITIL 4, valor é COcriado.",
    trigger: "Cocriação = valor feito JUNTO (provedor + consumidor)."
  },
  {
    id: "gp-09",
    topic: TOPICS.GP,
    question: "Ao aplicar os princípios orientadores, a recomendação é:",
    options: [
      "Aplicar apenas um princípio por projeto",
      "Considerar todos os princípios relevantes em conjunto, pois eles interagem e se reforçam",
      "Usar somente 'Foque no valor', ignorando os demais",
      "Aplicá-los em ordem numérica obrigatória"
    ],
    correct: 1,
    explanation: "Os princípios não são isolados nem sequenciais; devem ser combinados conforme a situação, reforçando uns aos outros.",
    trap: "Não há 'ordem fixa' nem 'um por vez': os princípios se aplicam juntos e de forma contextual.",
    trigger: "Princípios = use vários juntos, conforme o contexto."
  },
  {
    id: "sla-06",
    topic: TOPICS.SLA,
    question: "Métricas focadas apenas em atividades internas da TI (ex.: 'tickets fechados por hora') correm o risco de:",
    options: [
      "Refletir perfeitamente a satisfação do cliente",
      "Incentivar comportamentos que melhoram o número, mas não a experiência real do cliente",
      "Eliminar o efeito melancia",
      "Substituir a necessidade de SLAs"
    ],
    correct: 1,
    explanation: "Métricas internas mal escolhidas podem ser 'gameadas' e melhorar no papel sem melhorar a experiência real — origem do efeito melancia.",
    trap: "Número alto de tickets fechados pode esconder retrabalho e insatisfação. Quantidade ≠ qualidade percebida.",
    trigger: "Métrica interna isolada = risco de melancia (bom número, cliente insatisfeito)."
  },
  {
    id: "pra-10",
    topic: TOPICS.PRA,
    question: "A prática 'Continual Improvement' (como prática de gestão geral) é responsável por:",
    options: [
      "Alinhar práticas e serviços às necessidades de negócio em mudança, por meio de melhoria recorrente",
      "Resolver incidentes urgentes",
      "Construir componentes de serviço",
      "Negociar contratos com fornecedores"
    ],
    correct: 0,
    explanation: "A prática de melhoria contínua promove o alinhamento constante de serviços/práticas às necessidades de negócio que mudam.",
    trap: "Cuidado: 'Continual Improvement' aparece como COMPONENTE do SVS, como ATIVIDADE da SVC (Improve) e como PRÁTICA. Mesmo tema, camadas diferentes.",
    trigger: "Melhoria contínua: aparece em 3 camadas (SVS, SVC-Improve, Prática)."
  },
  {
    id: "dim-07",
    topic: TOPICS.DIM,
    question: "A dimensão 'Organizações e Pessoas' inclui preocupações com:",
    options: [
      "Cultura, papéis, responsabilidades, competências e estrutura organizacional",
      "Apenas o número de funcionários",
      "Somente os contratos com fornecedores",
      "A escolha do banco de dados"
    ],
    correct: 0,
    explanation: "Essa dimensão abrange cultura organizacional, estrutura, papéis, competências e a forma como as pessoas colaboram.",
    trap: "Não é só 'headcount': cultura e competências (muitas vezes esquecidas) fazem parte desta dimensão.",
    trigger: "Org/Pessoas = cultura + estrutura + papéis + competências."
  },
  {
    id: "svc-07",
    topic: TOPICS.SVC,
    question: "A atividade 'Design & Transition' é responsável por:",
    options: [
      "Garantir que produtos e serviços atendam continuamente às expectativas de qualidade, custo e time-to-market",
      "Apenas operar o serviço em produção",
      "Somente coletar feedback de stakeholders",
      "Aprovar orçamentos da organização"
    ],
    correct: 0,
    explanation: "'Design & Transition' assegura que serviços novos e alterados atendam às expectativas de qualidade, custo e prazo, e sejam disponibilizados adequadamente.",
    trap: "Operar em produção é 'Deliver & Support'; coletar feedback é 'Engage'. Não misture os objetivos das atividades.",
    trigger: "Design&Transition = desenhar e ENTREGAR pronto (qualidade, custo, prazo)."
  },
  {
    id: "ci-06",
    topic: TOPICS.CI,
    question: "Ao planejar melhorias, o princípio orientador mais diretamente associado à melhoria contínua é:",
    options: [
      "Mantenha simples e prático",
      "Progrida iterativamente com feedback",
      "Otimize e automatize",
      "Todos os princípios podem apoiar a melhoria contínua, mas 'progrida iterativamente com feedback' é central"
    ],
    correct: 3,
    explanation: "Embora todos os princípios apoiem a melhoria, a abordagem iterativa com feedback é a espinha dorsal de melhorar de forma sustentável e mensurável.",
    trap: "A questão tenta fazer você escolher um único princípio; a melhor resposta reconhece o conjunto, destacando o iterativo com feedback.",
    trigger: "Melhoria contínua ❤ iterar + feedback (mas todos ajudam)."
  },
  {
    id: "smc-10",
    topic: TOPICS.SMC,
    question: "Um 'produto' (product) no ITIL 4 é melhor descrito como:",
    options: [
      "Apenas um software vendido ao cliente",
      "Uma configuração de recursos da organização, projetada para oferecer valor a um consumidor",
      "O mesmo que um incidente",
      "Um contrato de fornecimento"
    ],
    correct: 1,
    explanation: "Produto é uma configuração dos recursos da organização (pessoas, info, tecnologia, etc.) desenhada para gerar valor; normalmente não é totalmente visível ao consumidor.",
    trap: "Produto não é só 'software': é a combinação de recursos por trás da oferta, parte dela invisível ao cliente.",
    trigger: "Produto = configuração de recursos (parte fica nos bastidores)."
  },
  {
    id: "pra-11",
    topic: TOPICS.PRA,
    question: "A prática 'Service Request Management' depende fortemente de:",
    options: [
      "Investigação demorada de causa-raiz",
      "Padronização e automação de fluxos para solicitações previsíveis e repetíveis",
      "Reuniões de CAB para cada pedido",
      "Mudanças emergenciais"
    ],
    correct: 1,
    explanation: "Como requisições são previsíveis e recorrentes, a prática se beneficia muito de padronização e automação.",
    trap: "Requisições não exigem investigação de causa-raiz (isso é problema) nem CAB (isso é mudança normal).",
    trigger: "Service request = padronizar + automatizar (é repetível)."
  },
  {
    id: "svs-07",
    topic: TOPICS.SVS,
    question: "Qual elemento é considerado o componente CENTRAL do SVS, em torno do qual as demais partes operam?",
    options: [
      "A governança",
      "A Service Value Chain (cadeia de valor de serviço)",
      "A lista de práticas",
      "O catálogo de serviços"
    ],
    correct: 1,
    explanation: "A SVC é o elemento central do SVS: representa o conjunto de atividades que convertem demanda/oportunidade em valor, usando as práticas e guiado pelos princípios e pela governança.",
    trap: "Governança e práticas apoiam a SVC, mas o NÚCLEO operacional do SVS é a própria cadeia de valor.",
    trigger: "Coração do SVS = SVC (a cadeia de valor)."
  },

  /* ==========================================================================
   *  LOTE 2 — COBERTURA NO ESTILO DO EXAME (originais)
   *  Peso reforçado em Practices e Guiding Principles, como na prova real.
   * ======================================================================== */

  /* --------------------------- ITIL PRACTICES (+18) ------------------------ */
  {
    id: "pra-12",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Information Security Management'?",
    options: [
      "Proteger a informação de que a organização precisa para conduzir seu negócio (confidencialidade, integridade e disponibilidade)",
      "Instalar antivírus em todas as estações de trabalho",
      "Aprovar todas as mudanças emergenciais",
      "Gerenciar o inventário de hardware"
    ],
    correct: 0,
    explanation: "A prática protege a informação do negócio, gerenciando riscos à confidencialidade, integridade e disponibilidade (além de autenticação e não-repúdio).",
    trap: "Não se resume a ferramentas (antivírus): é gestão de RISCO da informação, não uma tarefa técnica isolada.",
    trigger: "InfoSec = proteger info (C.I.D.: Confidencialidade, Integridade, Disponibilidade)."
  },
  {
    id: "pra-13",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Relationship Management'?",
    options: [
      "Resolver incidentes técnicos rapidamente",
      "Estabelecer e nutrir os vínculos entre a organização e seus stakeholders nos níveis estratégico e tático",
      "Negociar contratos de fornecimento de hardware",
      "Monitorar eventos da infraestrutura"
    ],
    correct: 1,
    explanation: "Relationship Management cuida dos vínculos com stakeholders em nível estratégico e tático, identificando necessidades e mediando interesses.",
    trap: "Não confunda com Supplier Management (foco em fornecedores) nem com Service Desk (contato operacional com usuários).",
    trigger: "Relationship = relação com stakeholders (estratégico/tático)."
  },
  {
    id: "pra-14",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Supplier Management'?",
    options: [
      "Garantir que os fornecedores e seu desempenho sejam gerenciados de forma adequada para apoiar a entrega de produtos e serviços de qualidade",
      "Capturar a demanda dos usuários por suporte",
      "Definir a visão estratégica da organização",
      "Implantar componentes no ambiente de produção"
    ],
    correct: 0,
    explanation: "Supplier Management assegura que fornecedores e seu desempenho sejam geridos para sustentar entregas de qualidade, alinhando contratos e níveis de serviço.",
    trap: "Fornecedor é externo; não confunda com Relationship Management (stakeholders em geral) nem com gestão de usuários.",
    trigger: "Supplier = gerir FORNECEDORES e seu desempenho."
  },
  {
    id: "pra-15",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'IT Asset Management'?",
    options: [
      "Apenas etiquetar fisicamente os equipamentos",
      "Planejar e gerenciar o ciclo de vida completo de todos os ativos de TI para maximizar valor, controlar custos e gerenciar riscos",
      "Restaurar serviços após uma falha",
      "Aprovar requisições de serviço"
    ],
    correct: 1,
    explanation: "ITAM cobre todo o ciclo de vida dos ativos (compra, uso, reuso, descarte), maximizando valor e controlando custo e risco.",
    trap: "Não é só etiqueta/inventário físico: envolve decisões de ciclo de vida (reuso, aposentadoria, conformidade).",
    trigger: "ITAM = ciclo de vida do ativo (valor, custo, risco)."
  },
  {
    id: "pra-16",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Monitoring and Event Management'?",
    options: [
      "Observar sistematicamente serviços e componentes, registrando e reportando mudanças de estado selecionadas (eventos)",
      "Gerenciar contratos com fornecedores",
      "Definir os SLAs com o cliente",
      "Mover componentes para produção"
    ],
    correct: 0,
    explanation: "A prática observa serviços/componentes e trata os eventos relevantes, priorizando e definindo a resposta adequada.",
    trap: "Monitorar gera eventos; nem todo evento é incidente. A prática DECIDE quais eventos exigem ação.",
    trigger: "Monitoring & Event = observar + tratar mudanças de estado."
  },
  {
    id: "pra-17",
    topic: TOPICS.PRA,
    question: "Sobre 'Release Management' e 'Deployment Management', é correto afirmar que:",
    options: [
      "São a mesma prática com nomes diferentes",
      "Release torna funcionalidades disponíveis para uso; deployment move componentes para um ambiente — e podem ocorrer em momentos distintos",
      "Deployment só ocorre depois do release, sempre juntos",
      "Release é técnico e deployment é estratégico"
    ],
    correct: 1,
    explanation: "Deployment é mover componentes para um ambiente (ex.: produção). Release é liberar a funcionalidade para uso. É possível implantar sem liberar (ex.: feature flag) e vice-versa.",
    trap: "Pegadinha clássica do ITIL 4: separar 'implantar' (deployment) de 'liberar para uso' (release). Não são sinônimos.",
    trigger: "Deployment = mover p/ ambiente. Release = liberar p/ uso. (Diferentes!)"
  },
  {
    id: "pra-18",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Service Configuration Management'?",
    options: [
      "Garantir informação precisa e confiável sobre a configuração dos serviços e os itens de configuração (CIs) que os suportam, disponível quando e onde for necessária",
      "Resolver a causa-raiz de problemas",
      "Negociar metas de nível de serviço",
      "Treinar a equipe de suporte"
    ],
    correct: 0,
    explanation: "SCM mantém informação confiável sobre os CIs e suas relações, apoiando outras práticas (mudança, incidente, problema).",
    trap: "Não é o ativo em si (isso é ITAM): é a INFORMAÇÃO sobre a configuração e as relações entre os CIs.",
    trigger: "SCM = informação confiável dos CIs e suas RELAÇÕES."
  },
  {
    id: "pra-19",
    topic: TOPICS.PRA,
    question: "A prática de 'Deployment Management' é responsável por:",
    options: [
      "Mover hardware, software, documentação ou qualquer componente novo/alterado para os ambientes (produção, teste, homologação)",
      "Definir a estratégia de negócio",
      "Capturar requisições de serviço dos usuários",
      "Avaliar a satisfação do cliente"
    ],
    correct: 0,
    explanation: "Deployment Management move componentes para os ambientes-alvo, podendo atuar em produção, teste ou staging.",
    trap: "Implantar não é o mesmo que liberar para uso (release). E não se limita à produção.",
    trigger: "Deployment = mover componente para o ambiente."
  },
  {
    id: "pra-20",
    topic: TOPICS.PRA,
    question: "No ITIL 4, 'mudança' (change) é definida como:",
    options: [
      "Qualquer incidente que afete a produção",
      "A adição, modificação ou remoção de qualquer coisa que possa ter efeito direto ou indireto sobre os serviços",
      "Uma solicitação padrão do usuário",
      "Uma falha de segurança"
    ],
    correct: 1,
    explanation: "Mudança é adicionar, modificar ou remover algo que possa afetar serviços, direta ou indiretamente.",
    trap: "O 'indireto' é chave: algo que parece não afetar o serviço pode, sim, ser uma mudança.",
    trigger: "Mudança = adicionar / modificar / remover algo que afeta serviços."
  },
  {
    id: "pra-21",
    topic: TOPICS.PRA,
    question: "Para que serve o 'change schedule' (cronograma de mudanças)?",
    options: [
      "Registrar os incidentes em aberto",
      "Ajudar a planejar mudanças, melhorar a comunicação e evitar conflitos de recursos e de janelas",
      "Substituir o catálogo de serviços",
      "Listar os erros conhecidos"
    ],
    correct: 1,
    explanation: "O change schedule apoia o planejamento, a comunicação e a alocação de recursos, evitando que mudanças colidam entre si.",
    trap: "Não confunda com a lista de incidentes ou de erros conhecidos: é a agenda das MUDANÇAS.",
    trigger: "Change schedule = agenda de mudanças (planejar e evitar conflito)."
  },
  {
    id: "pra-22",
    topic: TOPICS.PRA,
    question: "Quais são as três fases da prática de 'Problem Management'?",
    options: [
      "Detecção, escalonamento e fechamento",
      "Identificação do problema, controle do problema e controle de erro",
      "Padrão, normal e emergencial",
      "Plan, Do, Check"
    ],
    correct: 1,
    explanation: "As fases são: identificação do problema, controle do problema (análise e priorização) e controle de erro (gestão de erros conhecidos e workarounds).",
    trap: "Padrão/normal/emergencial são tipos de MUDANÇA, não fases de problema. Não troque.",
    trigger: "Problema (3 fases): Identificação → Controle do problema → Controle de erro."
  },
  {
    id: "pra-23",
    topic: TOPICS.PRA,
    question: "Um 'incidente maior' (major incident) normalmente exige:",
    options: [
      "O mesmo tratamento de qualquer incidente comum",
      "Um procedimento separado, com prazos mais curtos e resposta coordenada dedicada",
      "Abertura de uma mudança padrão",
      "Espera até a próxima reunião de CAB"
    ],
    correct: 1,
    explanation: "Incidentes maiores têm alto impacto e geralmente seguem procedimento próprio, com equipe dedicada e prazos reduzidos.",
    trap: "Não tratar um incidente maior como rotina: o ponto é a resposta coordenada e mais ágil.",
    trigger: "Incidente maior = procedimento próprio, rápido e coordenado."
  },
  {
    id: "pra-24",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Service Request Management'?",
    options: [
      "Investigar a causa-raiz de incidentes recorrentes",
      "Apoiar a qualidade acordada do serviço tratando todas as requisições pré-definidas e iniciadas pelo usuário de forma eficaz e amigável",
      "Autorizar mudanças de alto risco",
      "Monitorar a infraestrutura"
    ],
    correct: 1,
    explanation: "A prática trata requisições previsíveis e iniciadas pelo usuário, com forte padronização, automação e fluxos de aprovação quando necessário.",
    trap: "Requisição é parte NORMAL do serviço (não é falha). Padronização e automação são o coração da prática.",
    trigger: "Service Request = pedidos previsíveis, padronizados e (quando preciso) aprovados."
  },
  {
    id: "pra-25",
    topic: TOPICS.PRA,
    question: "Qual conjunto de habilidades é especialmente importante para a prática de 'Service Level Management'?",
    options: [
      "Programação e administração de banco de dados",
      "Escuta ativa, relacionamento com o negócio e tradução de necessidades em metas mensuráveis",
      "Configuração de firewall e redes",
      "Soldagem de hardware"
    ],
    correct: 1,
    explanation: "SLM depende de engajamento e escuta: entender o que o negócio valoriza e transformar isso em metas claras e mensuráveis.",
    trap: "SLM não é tarefa técnica: é relacionamento e tradução de expectativas em alvos de serviço.",
    trigger: "SLM = ouvir o negócio e virar meta mensurável."
  },
  {
    id: "pra-26",
    topic: TOPICS.PRA,
    question: "Na prática de 'Monitoring and Event Management', os eventos costumam ser classificados como:",
    options: [
      "Padrão, normal e emergencial",
      "Informativo, de alerta (warning) e de exceção",
      "Baixo, médio e alto custo",
      "Aberto, em andamento e fechado"
    ],
    correct: 1,
    explanation: "Eventos são tipicamente classificados em informativos, de alerta e de exceção, definindo o tipo de resposta necessária.",
    trap: "Padrão/normal/emergencial é mudança. Aberto/andamento/fechado é status de ticket. Evento ≠ esses.",
    trigger: "Eventos: Informativo · Alerta · Exceção."
  },
  {
    id: "pra-27",
    topic: TOPICS.PRA,
    question: "O Service Desk moderno agrega valor principalmente por:",
    options: [
      "Ser apenas um filtro para reduzir chamados",
      "Oferecer experiência de qualidade ao usuário, com empatia e múltiplos canais, sendo o ponto único de contato",
      "Resolver a causa-raiz de todos os problemas",
      "Aprovar mudanças normais e emergenciais"
    ],
    correct: 1,
    explanation: "O valor do Service Desk está cada vez mais na experiência e empatia, não só na capacidade técnica; ele é o SPOC com os usuários, por vários canais.",
    trap: "Reduzir o Service Desk a 'filtro técnico' ignora seu papel na experiência. E ele não resolve causa-raiz (isso é problema).",
    trigger: "Service Desk = SPOC + experiência/empatia (não é só técnica)."
  },
  {
    id: "pra-28",
    topic: TOPICS.PRA,
    question: "O que é um 'workaround' (solução de contorno)?",
    options: [
      "A resolução definitiva de um problema",
      "Uma solução que reduz ou elimina o impacto de um incidente ou problema sem que exista ainda uma resolução completa",
      "Um tipo de mudança padrão",
      "Um relatório de incidente maior"
    ],
    correct: 1,
    explanation: "Workaround reduz/elimina o impacto enquanto a causa não é resolvida; pode ser documentado num erro conhecido.",
    trap: "Workaround NÃO é a correção definitiva: é um contorno temporário (mas pode durar bastante).",
    trigger: "Workaround = contorno (não resolve a causa)."
  },
  {
    id: "pra-29",
    topic: TOPICS.PRA,
    question: "Qual das seguintes é uma prática de GESTÃO GERAL (general management practice)?",
    options: [
      "Deployment Management",
      "Incident Management",
      "Supplier Management",
      "Service Desk"
    ],
    correct: 2,
    explanation: "Supplier Management é prática de gestão geral. Incident Management e Service Desk são de gestão de serviços; Deployment Management é de gestão técnica.",
    trap: "Muitas práticas 'parecem' técnicas. A classificação segue a origem (geral/serviço/técnica), não a intuição.",
    trigger: "Geral = vem da gestão de negócios (ex.: Supplier, Relationship, InfoSec)."
  },

  /* ------------------------- GUIDING PRINCIPLES (+6) ----------------------- */
  {
    id: "gp-10",
    topic: TOPICS.GP,
    question: "Cenário: uma equipe quer descartar todo o sistema atual de chamados e comprar outro do zero, sem avaliar o que já existe. Qual princípio foi ignorado?",
    options: [
      "Foque no valor",
      "Comece de onde você está",
      "Otimize e automatize",
      "Mantenha simples e prático"
    ],
    correct: 1,
    explanation: "'Comece de onde você está' pede que se avalie e reaproveite o que já existe antes de recriar tudo.",
    trap: "A tentação de 'recomeçar do zero' é exatamente o que esse princípio combate.",
    trigger: "Antes de jogar fora, MEÇA e reaproveite (start where you are)."
  },
  {
    id: "gp-11",
    topic: TOPICS.GP,
    question: "Cenário: um processo cheio de retrabalho será automatizado exatamente como está. Qual princípio orienta corrigir isso?",
    options: [
      "Otimize e automatize (otimize antes de automatizar)",
      "Colabore e promova visibilidade",
      "Pense e trabalhe de forma holística",
      "Progrida iterativamente com feedback"
    ],
    correct: 0,
    explanation: "Automatizar um processo ruim só o torna mais rápido em errar; primeiro otimize, depois automatize.",
    trap: "Ordem importa: 'otimize e automatize' não é automatizar primeiro.",
    trigger: "Arrume o processo ANTES de automatizá-lo."
  },
  {
    id: "gp-12",
    topic: TOPICS.GP,
    question: "Aplicar 'Foque no valor' começa por:",
    options: [
      "Definir quem é o consumidor do serviço e o que ele realmente valoriza",
      "Escolher a ferramenta de monitoramento",
      "Contratar mais fornecedores",
      "Aumentar o número de métricas internas"
    ],
    correct: 0,
    explanation: "Sem saber QUEM consome e O QUE valoriza, é impossível direcionar esforço para o que gera valor.",
    trap: "Valor é definido pelo consumidor; começar pela ferramenta ou pela métrica inverte a lógica.",
    trigger: "Foco no valor: 1º descubra QUEM e O QUE valoriza."
  },
  {
    id: "gp-13",
    topic: TOPICS.GP,
    question: "Cenário: um passo de aprovação no fluxo não reduz risco nem agrega valor, apenas atrasa. O que o princípio 'Mantenha simples e prático' recomenda?",
    options: [
      "Manter o passo por segurança",
      "Remover o passo, pois não contribui para o resultado",
      "Duplicar o passo para garantir controle",
      "Automatizar o passo sem mudá-lo"
    ],
    correct: 1,
    explanation: "Elimine etapas e controles que não contribuem para o valor; menos é mais quando o passo não agrega nada.",
    trap: "Simples não é inseguro: você remove o que NÃO agrega, mantendo o que de fato controla risco.",
    trigger: "Se o passo não agrega valor, corte (keep it simple)."
  },
  {
    id: "gp-14",
    topic: TOPICS.GP,
    question: "Cenário: um projeto grande paralisa porque a equipe quer entregar tudo perfeito de uma só vez. Qual princípio resolve?",
    options: [
      "Progrida iterativamente com feedback",
      "Otimize e automatize",
      "Foque no valor",
      "Comece de onde você está"
    ],
    correct: 0,
    explanation: "Dividir em iterações menores, entregando e ajustando com feedback, evita a paralisia do 'tudo de uma vez'.",
    trap: "Buscar perfeição total antes de entregar contraria a abordagem iterativa.",
    trigger: "Entregue em pedaços + use o feedback (iterativo)."
  },
  {
    id: "gp-15",
    topic: TOPICS.GP,
    question: "Quando o trabalho fica invisível entre áreas e ninguém sabe o que o outro faz, qual princípio está sendo violado?",
    options: [
      "Mantenha simples e prático",
      "Colabore e promova visibilidade",
      "Otimize e automatize",
      "Foque no valor"
    ],
    correct: 1,
    explanation: "Trabalho invisível gera retrabalho e desconfiança; o princípio defende colaboração e transparência sobre o que é feito.",
    trap: "Visibilidade não é vigilância nem só relatório para a chefia: é tornar o trabalho transparente para quem precisa.",
    trigger: "Trabalho escondido = decisão ruim. Torne visível e colabore."
  },

  /* -------------------------- FOUR DIMENSIONS (+4) ------------------------- */
  {
    id: "dim-08",
    topic: TOPICS.DIM,
    question: "Um 'value stream' (fluxo de valor), considerado na dimensão de Fluxos de Valor e Processos, é:",
    options: [
      "Um relatório financeiro mensal",
      "Uma série de passos que a organização executa para criar e entregar produtos e serviços aos consumidores",
      "A lista de fornecedores ativos",
      "O organograma da área de TI"
    ],
    correct: 1,
    explanation: "Value stream é a sequência de passos (combinando atividades da SVC) que cria e entrega valor ao consumidor.",
    trap: "Não confunda com processo isolado: o value stream atravessa atividades e áreas, ponta a ponta.",
    trigger: "Value stream = passos ponta a ponta para entregar valor."
  },
  {
    id: "dim-09",
    topic: TOPICS.DIM,
    question: "Na dimensão 'Parceiros e Fornecedores', uma decisão estratégica relevante é:",
    options: [
      "A cor do logotipo do fornecedor",
      "A estratégia de sourcing (o que fazer internamente vs. terceirizar) e o nível de integração de serviços",
      "O salário dos colaboradores internos",
      "A marca dos servidores"
    ],
    correct: 1,
    explanation: "Essa dimensão envolve escolher o que terceirizar, como integrar serviços de múltiplos fornecedores e como gerir essas relações.",
    trap: "É decisão estratégica de sourcing/integração, não detalhe cosmético nem de RH interno.",
    trigger: "Parceiros/Fornec = decisão de sourcing + integração."
  },
  {
    id: "dim-10",
    topic: TOPICS.DIM,
    question: "Ao avaliar uma nova tecnologia na dimensão 'Informação e Tecnologia', uma pergunta-chave é:",
    options: [
      "A tecnologia é a mais nova do mercado?",
      "A tecnologia é compatível com a arquitetura atual e está alinhada às necessidades de informação e conformidade?",
      "O fornecedor tem o maior número de clientes?",
      "A interface tem cores agradáveis?"
    ],
    correct: 1,
    explanation: "Avalia-se compatibilidade, requisitos de informação, segurança, conformidade e adequação às necessidades — não apenas o 'mais novo'.",
    trap: "'Mais nova' ou 'mais popular' não é critério: o que importa é adequação e compatibilidade.",
    trigger: "Nova tech = compatível + alinhada às necessidades (não só hype)."
  },
  {
    id: "dim-11",
    topic: TOPICS.DIM,
    question: "As quatro dimensões aplicam-se a quê dentro da gestão de serviços?",
    options: [
      "Apenas à fase de operação",
      "A todo o SVS e a cada produto e serviço, de forma integrada",
      "Somente às práticas técnicas",
      "Apenas aos serviços terceirizados"
    ],
    correct: 1,
    explanation: "As quatro dimensões são relevantes para o SVS como um todo e para cada produto/serviço, não apenas para uma parte.",
    trap: "Elas não se restringem a uma fase ou tipo de prática: aplicam-se a tudo, sempre juntas.",
    trigger: "4 dimensões = aplicam-se a TUDO no SVS."
  },

  /* ------------------------ SERVICE VALUE SYSTEM (+3) ---------------------- */
  {
    id: "svs-08",
    topic: TOPICS.SVS,
    question: "Qual é a diferença essencial entre governança e gestão (management) no SVS?",
    options: [
      "São sinônimos",
      "Governança avalia, direciona e monitora; a gestão planeja e executa as atividades para atingir os objetivos definidos",
      "Governança executa o dia a dia; a gestão apenas observa",
      "Governança é externa; a gestão é sempre terceirizada"
    ],
    correct: 1,
    explanation: "Governança define a direção e monitora; a gestão operacionaliza essa direção no dia a dia.",
    trap: "Governança NÃO executa operações: ela direciona e monitora. A execução é da gestão.",
    trigger: "Governança = avaliar/direcionar/monitorar. Gestão = executar."
  },
  {
    id: "svs-09",
    topic: TOPICS.SVS,
    question: "No ITIL 4, uma 'prática' (practice) é definida como:",
    options: [
      "Um documento contratual",
      "Um conjunto de recursos organizacionais projetado para realizar trabalho ou atingir um objetivo",
      "Uma única ferramenta de software",
      "Um tipo de mudança"
    ],
    correct: 1,
    explanation: "Prática é um conjunto de recursos organizacionais (pessoas, processos, informação, tecnologia, parceiros) voltado a realizar trabalho ou alcançar um objetivo.",
    trap: "Prática não é só um processo nem só uma ferramenta: é um CONJUNTO de recursos (lembra as 4 dimensões).",
    trigger: "Prática = conjunto de recursos para fazer o trabalho."
  },
  {
    id: "svs-10",
    topic: TOPICS.SVS,
    question: "Qual a diferença entre 'oportunidade' e 'demanda' como entradas do SVS?",
    options: [
      "São a mesma coisa",
      "Oportunidade é a possibilidade de agregar valor ou melhorar; demanda é a necessidade ou desejo por produtos e serviços",
      "Oportunidade é interna e demanda é sempre externa",
      "Demanda é a saída e oportunidade é a entrada"
    ],
    correct: 1,
    explanation: "Oportunidade representa possibilidades de melhoria/valor; demanda é a necessidade existente por produtos e serviços.",
    trap: "São entradas distintas: confundir as duas é erro comum. Ambas entram, valor sai.",
    trigger: "Oportunidade = poderia melhorar. Demanda = já precisam."
  },

  /* ----------------------- SERVICE VALUE CHAIN (+4) ------------------------ */
  {
    id: "svc-08",
    topic: TOPICS.SVC,
    question: "Como as atividades da SVC se relacionam com os value streams?",
    options: [
      "Cada value stream usa uma única atividade",
      "Um value stream combina diferentes atividades da SVC, em sequências variadas, conforme o cenário",
      "Value streams substituem as atividades da SVC",
      "Atividades e value streams não têm relação"
    ],
    correct: 1,
    explanation: "Value streams são combinações específicas das atividades da SVC, montadas conforme a necessidade de cada situação.",
    trap: "A SVC é flexível: as atividades não seguem ordem fixa — viram diferentes value streams.",
    trigger: "Value stream = combinação flexível das atividades da SVC."
  },
  {
    id: "svc-09",
    topic: TOPICS.SVC,
    question: "Qual é o propósito da atividade 'Plan' na SVC?",
    options: [
      "Resolver incidentes",
      "Garantir entendimento compartilhado da visão, situação atual e direção de melhoria para as quatro dimensões e todos os produtos e serviços",
      "Mover componentes para produção",
      "Negociar com fornecedores um a um"
    ],
    correct: 1,
    explanation: "'Plan' assegura visão, status e direção comuns em todas as dimensões e ofertas da organização.",
    trap: "Não confunda 'Plan' (visão/direção) com 'Design & Transition' (desenhar e entregar o serviço).",
    trigger: "Plan = visão + direção compartilhada (as 4 dimensões)."
  },
  {
    id: "svc-10",
    topic: TOPICS.SVC,
    question: "Qual é o propósito da atividade 'Deliver & Support'?",
    options: [
      "Garantir que os serviços sejam entregues e suportados conforme as especificações acordadas e as expectativas dos stakeholders",
      "Definir a estratégia de longo prazo",
      "Avaliar fornecedores",
      "Construir componentes de software"
    ],
    correct: 0,
    explanation: "'Deliver & Support' cuida da entrega e do suporte contínuo do serviço, dentro do acordado.",
    trap: "É a operação do dia a dia; não confunda com 'Engage' (relacionamento) nem com 'Obtain/Build' (obter componentes).",
    trigger: "Deliver & Support = entregar e dar suporte no dia a dia."
  },
  {
    id: "svc-11",
    topic: TOPICS.SVC,
    question: "Para executar suas atividades, a SVC:",
    options: [
      "Usa sempre uma única prática por atividade",
      "Combina diferentes práticas conforme a necessidade de cada atividade",
      "Dispensa o uso de práticas",
      "Usa apenas práticas técnicas"
    ],
    correct: 1,
    explanation: "Cada atividade da SVC recorre a uma combinação de práticas (geral, de serviço e técnica) conforme o contexto.",
    trap: "Não há mapeamento fixo 1-para-1 entre atividade e prática: a combinação é flexível.",
    trigger: "SVC usa um MIX de práticas em cada atividade."
  },

  /* ---------------------- CONTINUAL IMPROVEMENT (+3) ----------------------- */
  {
    id: "ci-07",
    topic: TOPICS.CI,
    question: "Por que medir uma linha de base (baseline) é essencial na melhoria contínua?",
    options: [
      "Porque substitui a necessidade de uma visão",
      "Porque sem o ponto de partida medido não é possível comprovar progresso depois",
      "Porque elimina a necessidade de agir",
      "Porque garante que nenhuma melhoria será necessária"
    ],
    correct: 1,
    explanation: "A baseline é a referência: sem ela, qualquer alegação de melhoria fica sem base de comparação.",
    trap: "Pular o 'onde estamos agora?' impede provar ganho — erro comum em iniciativas de melhoria.",
    trigger: "Sem baseline = sem prova de melhoria."
  },
  {
    id: "ci-08",
    topic: TOPICS.CI,
    question: "O passo 'Qual é a visão?' do modelo de melhoria contínua serve para:",
    options: [
      "Definir penalidades contratuais",
      "Alinhar as iniciativas de melhoria aos objetivos e à visão do negócio",
      "Listar os incidentes do mês",
      "Escolher o fornecedor mais barato"
    ],
    correct: 1,
    explanation: "A visão conecta a melhoria aos objetivos de negócio, dando direção e propósito a tudo que vem depois.",
    trap: "Melhorar 'por melhorar', sem visão de negócio, leva a esforço desconectado de valor.",
    trigger: "Comece pela VISÃO (ligada ao negócio)."
  },
  {
    id: "ci-09",
    topic: TOPICS.CI,
    question: "Decisões de melhoria contínua devem, idealmente, ser:",
    options: [
      "Baseadas em opinião e intuição apenas",
      "Baseadas em dados e medições relevantes",
      "Tomadas somente pela diretoria",
      "Evitadas para não gerar mudanças"
    ],
    correct: 1,
    explanation: "A melhoria contínua é orientada por dados: medições sustentam as decisões e comprovam resultados.",
    trap: "Intuição sem dados leva a melhorias que não se confirmam. Meça antes e depois.",
    trigger: "Melhoria = decisão baseada em DADOS."
  },

  /* ----------------------- SLA / MÉTRICAS / KPIs (+3) ---------------------- */
  {
    id: "sla-07",
    topic: TOPICS.SLA,
    question: "Um SLA eficaz deve ser escrito:",
    options: [
      "Em linguagem técnica detalhada, voltada apenas à equipe de TI",
      "Em linguagem clara e simples, compreensível por todas as partes envolvidas",
      "Apenas em termos jurídicos de penalidade",
      "Sem definir metas, para dar flexibilidade"
    ],
    correct: 1,
    explanation: "SLAs devem ser claros e fáceis de entender por provedor e cliente, evitando ambiguidade.",
    trap: "SLA cheio de jargão técnico falha porque o cliente não consegue validar nem cobrar o acordado.",
    trigger: "SLA = simples e claro para os DOIS lados."
  },
  {
    id: "sla-08",
    topic: TOPICS.SLA,
    question: "Para um SLA ser significativo, ele deve estar relacionado a:",
    options: [
      "Um único componente de infraestrutura, como um servidor",
      "Um serviço definido, refletindo os resultados que o cliente realmente espera",
      "Apenas o tempo de atividade da rede",
      "O número de funcionários da TI"
    ],
    correct: 1,
    explanation: "O SLA deve cobrir um serviço como um todo e os resultados esperados, não uma métrica isolada de componente.",
    trap: "Medir só um componente (ex.: servidor no ar) leva ao efeito melancia: verde técnico, cliente insatisfeito.",
    trigger: "SLA = sobre o SERVIÇO e o resultado, não um componente isolado."
  },
  {
    id: "sla-09",
    topic: TOPICS.SLA,
    question: "Sobre a revisão de SLAs ao longo do tempo, o correto é:",
    options: [
      "Definir uma vez e nunca mais alterar",
      "Revisar periodicamente para garantir que continuam refletindo as necessidades do negócio",
      "Revisar apenas se houver penalidade aplicada",
      "Deixar a critério exclusivo do fornecedor"
    ],
    correct: 1,
    explanation: "Necessidades mudam; SLAs precisam ser revisados regularmente para permanecerem relevantes e alinhados ao valor.",
    trap: "SLA não é documento estático: congelar metas antigas o torna inútil com o tempo.",
    trigger: "SLA = revisar sempre (acompanha o negócio)."
  },

  /* -------------------- CONCEITOS DE SERVICE MANAGEMENT (+3) --------------- */
  {
    id: "smc-11",
    topic: TOPICS.SMC,
    question: "A 'warranty' (garantia) de um serviço normalmente abrange quais áreas?",
    options: [
      "Marketing, vendas, cobrança e suporte",
      "Disponibilidade, capacidade, segurança e continuidade",
      "Custo, risco, preço e lucro",
      "Hardware, software, rede e usuários"
    ],
    correct: 1,
    explanation: "Warranty (adequação ao uso) costuma cobrir disponibilidade, capacidade, segurança e continuidade do serviço.",
    trap: "Essas são as condições de DESEMPENHO (warranty), não a função (utility). Não troque os conceitos.",
    trigger: "Warranty = Disponibilidade · Capacidade · Segurança · Continuidade."
  },
  {
    id: "smc-12",
    topic: TOPICS.SMC,
    question: "No ITIL 4, 'risco' (risk) é melhor definido como:",
    options: [
      "Um custo fixo do serviço",
      "Um possível evento que pode causar dano ou perda, ou dificultar o alcance de objetivos (incerteza de resultado)",
      "Uma falha já ocorrida no serviço",
      "Uma requisição de usuário"
    ],
    correct: 1,
    explanation: "Risco é um evento possível que pode causar dano/perda ou dificultar objetivos; relaciona-se à incerteza de resultado.",
    trap: "Risco é POSSIBILIDADE futura, não a falha já ocorrida (essa seria um incidente).",
    trigger: "Risco = evento POSSÍVEL (incerteza), não falha consumada."
  },
  {
    id: "smc-13",
    topic: TOPICS.SMC,
    question: "Uma 'service offering' pode incluir quais elementos?",
    options: [
      "Apenas software",
      "Bens (goods), acesso a recursos e ações de serviço (service actions)",
      "Somente o contrato e a fatura",
      "Apenas suporte telefônico"
    ],
    correct: 1,
    explanation: "Uma oferta de serviço pode combinar bens (cuja posse pode ser transferida), acesso a recursos (sob termos acordados) e ações de serviço executadas para o consumidor.",
    trap: "Não é só 'um produto': a oferta mistura bens, acesso e ações — e cada um tem regras diferentes.",
    trigger: "Offering = Bens + Acesso a recursos + Ações de serviço."
  },

  /* ==========================================================================
   *  LOTE 3 — SIMULADO (40 questões estilo prova — originais baseadas no syllabus)
   * ======================================================================== */

  /* -------- SERVICE DESK / PRACTICES -------- */
  {
    id: "pra-30",
    topic: TOPICS.PRA,
    question: "Qual é o propósito da prática de 'Service Desk' segundo o ITIL 4?",
    options: [
      "Investigar a causa-raiz de todos os problemas reportados",
      "Aprovar mudanças normais e emergenciais",
      "Negociar contratos com fornecedores externos",
      "Capturar a demanda por resolução de incidentes e requisições, sendo o ponto único de contato com os usuários"
    ],
    correct: 3,
    explanation: "O Service Desk é o SPOC (ponto único de contato) entre o provedor e todos os usuários, capturando incidentes e requisições de serviço.",
    trap: "O Service Desk não investiga causa-raiz (isso é Problem Management) nem aprova mudanças (Change Enablement).",
    trigger: "Service Desk = SPOC + capturar incidentes e requisições."
  },
  {
    id: "pra-31",
    topic: TOPICS.PRA,
    question: "Quais são as três fases da prática de Gerenciamento de Problemas no ITIL 4?",
    options: [
      "Resolução de Problemas, Solução de Problemas, Erradicação de Problemas",
      "Identificação de Problemas, Controle de Problemas, Controle de Erros",
      "Resistência a Problemas, Recuperação de Problemas, Correção de Problemas",
      "Revisão de Problemas, Identificação de Problemas, Análise de Problemas"
    ],
    correct: 1,
    explanation: "As três fases são: Identificação do problema (detectar e registrar), Controle do problema (analisar e priorizar) e Controle de erros (gerir erros conhecidos e workarounds).",
    trap: "Resolução definitiva pode não ocorrer: o controle de erros lida com erros conhecidos e workarounds enquanto a solução permanente não está disponível.",
    trigger: "Problema: Identificar → Controlar → Controlar Erro."
  },
  {
    id: "pra-32",
    topic: TOPICS.PRA,
    question: "A equipe de Service Desk precisa de treinamento especialmente em quais habilidades de atendimento ao cliente?",
    options: [
      "Empatia, análise de incidentes, priorização, comunicação eficaz e inteligência emocional",
      "Socialização, categorização, priorização, análise de conflitos e análise de causa raiz",
      "Avaliação de mudanças, revisões de grandes problemas, reuniões de revisão de serviço e gestão de fornecedores",
      "Análise de métricas, gestão do tempo, negociação e liderança de equipe"
    ],
    correct: 0,
    explanation: "O ITIL 4 destaca empatia, comunicação eficaz e inteligência emocional como habilidades-chave do Service Desk, além de capacidade técnica de analisar e priorizar incidentes.",
    trap: "Análise de causa raiz não é papel do Service Desk — é do Problem Management. Foco do SD é na experiência do usuário.",
    trigger: "SD: empatia + comunicação + inteligência emocional (não só técnica)."
  },
  {
    id: "pra-33",
    topic: TOPICS.PRA,
    question: "A prática de Gerenciamento de Incidentes deve ser gerenciada:",
    options: [
      "Com resolução imediata obrigatória de todos os incidentes",
      "Exigindo causa definida antes de encerrar qualquer incidente",
      "Conforme metas acordadas e realistas de resolução",
      "Com prazo fixo de 4 horas para todos os incidentes"
    ],
    correct: 2,
    explanation: "O Gerenciamento de Incidentes deve seguir metas acordadas com o negócio e realistas — não há prazo único para todos os incidentes.",
    trap: "Nem todo incidente precisa de causa definida (isso é problema). A meta de tempo varia por impacto e urgência.",
    trigger: "Incidente = gerir conforme metas acordadas e realistas."
  },
  {
    id: "pra-34",
    topic: TOPICS.PRA,
    question: "Quem pode encerrar formalmente um incidente no ITIL 4?",
    options: [
      "Alta gestão da organização",
      "Líder técnico da equipe de infraestrutura",
      "O consumidor/usuário do serviço",
      "Exclusivamente o Service Desk"
    ],
    correct: 2,
    explanation: "O consumidor é quem valida que o serviço foi restaurado satisfatoriamente; é ele quem deve confirmar o encerramento do incidente.",
    trap: "O Service Desk pode operar o fechamento administrativo, mas a validação final é do consumidor — afinal, o valor é percebido por ele.",
    trigger: "Quem fecha o incidente = o CONSUMIDOR (quem usa o serviço)."
  },
  {
    id: "pra-35",
    topic: TOPICS.PRA,
    question: "Qual prática tem como propósito 'proteger as informações necessárias para o negócio'?",
    options: [
      "Gestão de Configuração de Serviço",
      "Gestão de Obter/Construir",
      "Gestão de Ativos de TI",
      "Gestão de Segurança da Informação"
    ],
    correct: 3,
    explanation: "Information Security Management protege a informação do negócio, gerenciando riscos de confidencialidade, integridade e disponibilidade.",
    trap: "Gestão de Ativos cuida do ciclo de vida dos ativos, não da proteção da informação. São práticas distintas.",
    trigger: "Segurança da Informação = proteger info do negócio (C-I-D)."
  },
  {
    id: "pra-36",
    topic: TOPICS.PRA,
    question: "O propósito da prática de Gestão de Releases é:",
    options: [
      "Proteger informações sensíveis do negócio",
      "Gerenciar projetos de TI do início ao fim",
      "Observar e reportar eventos na infraestrutura",
      "Disponibilizar serviços novos e alterados para uso"
    ],
    correct: 3,
    explanation: "Release Management tem como propósito tornar disponíveis para uso os serviços e funcionalidades novas ou modificadas.",
    trap: "Não confunda com Deployment (mover componentes para ambiente). Release = liberar para USO do consumidor.",
    trigger: "Release = disponibilizar para uso (não é só mover para produção)."
  },
  {
    id: "pra-37",
    topic: TOPICS.PRA,
    question: "O propósito da prática de Gestão de Requisições de Serviço é:",
    options: [
      "Gerenciar o relacionamento com stakeholders estratégicos",
      "Fazer o design de novos serviços de TI",
      "Elaborar ofertas de serviço ao cliente",
      "Tratar requisições de serviço de forma eficaz e amigável ao usuário"
    ],
    correct: 3,
    explanation: "Service Request Management trata pedidos previsíveis, padronizados e iniciados pelo usuário de forma eficiente e com boa experiência.",
    trap: "Requisição não é incidente (falha) nem mudança de alto risco. É um pedido normal e esperado.",
    trigger: "Gestão de Requisições = pedido normal, eficaz e amigável."
  },
  {
    id: "pra-38",
    topic: TOPICS.PRA,
    question: "Qual é o modelo ideal de perfil de habilidade recomendado para profissionais de Service Desk no ITIL 4?",
    options: [
      "U-Shaped (especialização profunda em dois campos)",
      "T-Shaped (profundidade em uma área + amplitude em várias)",
      "I-Shaped (especialização total em um único domínio)",
      "Ship-Shaped (habilidades distribuídas horizontalmente sem profundidade)"
    ],
    correct: 1,
    explanation: "O perfil T-Shaped é o recomendado: o profissional tem profundidade em sua área de especialidade e ao mesmo tempo conhecimento amplo em outras áreas para colaborar melhor.",
    trap: "I-Shaped (especialista puro) é limitado para o Service Desk que precisa de versatilidade; T-Shaped equilibra profundidade e amplitude.",
    trigger: "T-Shaped = fundo numa coisa + largo em muitas."
  },
  {
    id: "pra-39",
    topic: TOPICS.PRA,
    question: "Qual prática planeja e gerencia o ciclo de vida completo dos ativos de TI?",
    options: [
      "Gestão de Ativos de TI",
      "Gestão de Configuração de Serviço",
      "Planejar e Engajar",
      "Gestão de Parceiros e Fornecedores"
    ],
    correct: 0,
    explanation: "IT Asset Management cobre todo o ciclo de vida dos ativos (aquisição, uso, reuso, aposentadoria/descarte), maximizando valor e controlando custo e risco.",
    trap: "Gestão de Configuração cuida das informações sobre relacionamentos entre CIs, não do ciclo de vida financeiro/físico dos ativos.",
    trigger: "ITAM = ciclo de vida completo do ativo de TI."
  },
  {
    id: "pra-40",
    topic: TOPICS.PRA,
    question: "Quais são os canais pelos quais o Service Desk pode ser acessado pelos usuários?",
    options: [
      "Telefone, canais de mídia social e presencial (local)",
      "Telefone, canais de mídia social e reclamações a fornecedores",
      "Telefone, presencial e reclamações a fornecedores",
      "Mídia social, presencial e reclamações a fornecedores"
    ],
    correct: 0,
    explanation: "O Service Desk pode ser acessado por múltiplos canais: telefone, portais, e-mail, chat, mídia social e atendimento presencial — mas reclamações a fornecedores não é um canal de acesso ao SD.",
    trap: "Reclamação a fornecedores não é canal do Service Desk; é uma atividade de Gestão de Fornecedores.",
    trigger: "Canais do SD: telefone + social + presencial + outros (não fornecedor)."
  },
  {
    id: "pra-41",
    topic: TOPICS.PRA,
    question: "Sobre a prática de Gestão de Requisições de Serviço, qual afirmação é correta?",
    options: [
      "Não envolve a atividade Obtain/Build da SVC",
      "Contribui exclusivamente para a atividade Design da SVC",
      "Contribui somente para a atividade Improve da SVC",
      "Pode exigir aquisição de itens pré-aprovados conforme a oferta de serviço"
    ],
    correct: 3,
    explanation: "A gestão de requisições pode envolver a aquisição de componentes ou itens pré-aprovados (ex.: novo notebook para colaborador), ligando-se à atividade Obtain/Build da SVC.",
    trap: "Requisição não é exclusivamente operacional: algumas envolvem obtenção de recursos, conectando-se a Obtain/Build.",
    trigger: "Requisição pode puxar Obtain/Build quando envolve aquisição pré-aprovada."
  },
  {
    id: "pra-42",
    topic: TOPICS.PRA,
    question: "Qual é a definição de 'evento' no contexto da prática de Monitoramento e Gestão de Eventos?",
    options: [
      "Qualquer mudança relevante na cadeia de valor de serviço",
      "Uma mudança de estado relevante para a gestão de um serviço ou item de configuração",
      "Qualquer alteração no SVS que afete a governança",
      "Uma mudança no valor percebido pelo cliente"
    ],
    correct: 1,
    explanation: "Evento é qualquer mudança de estado que seja relevante para a gestão de um serviço ou CI — pode ser informativo, de alerta ou de exceção.",
    trap: "Não confunda evento com incidente: o evento é a mudança de estado detectada; o incidente é o evento que interrompe o serviço.",
    trigger: "Evento = mudança de estado relevante para o serviço ou CI."
  },

  /* -------- SERVICE MANAGEMENT CONCEPTS -------- */
  {
    id: "smc-14",
    topic: TOPICS.SMC,
    question: "Qual é o tipo de modelo que descreve o Service Value System (SVS)?",
    options: [
      "Modelo de interpretação regulatória",
      "Modelo operacional",
      "Modelo organizacional hierárquico",
      "Modelo de recursos humanos"
    ],
    correct: 1,
    explanation: "O SVS é um modelo operacional que descreve como todos os componentes e atividades trabalham juntos para criar valor.",
    trap: "Não é um modelo apenas organizacional ou hierárquico: o SVS é operacional — mostra o funcionamento integrado, não a estrutura de cargos.",
    trigger: "SVS = modelo OPERACIONAL (como tudo funciona junto)."
  },
  {
    id: "smc-15",
    topic: TOPICS.SMC,
    question: "Qual é a definição de 'organização' segundo o ITIL 4?",
    options: [
      "Uma equipe temporária criada para um projeto específico",
      "Uma função exercida por uma única pessoa",
      "Um processo documentado de entrega de serviços",
      "Uma pessoa ou grupo com funções próprias, responsabilidades, autoridades e relações para atingir objetivos"
    ],
    correct: 3,
    explanation: "Organização é definida como uma pessoa ou grupo que tem funções próprias com responsabilidades, autoridades e relações para alcançar seus objetivos.",
    trap: "Organização no ITIL 4 não é sinônimo de empresa: pode ser uma equipe, departamento ou até uma pessoa com função definida.",
    trigger: "Organização = papéis + responsabilidades + autoridades + relações."
  },
  {
    id: "smc-16",
    topic: TOPICS.SMC,
    question: "O valor (value) no ITIL 4 é melhor caracterizado como:",
    options: [
      "Subjetivo e influenciado por fatores como custo, percepção, experiência, velocidade, facilidade de uso e segurança",
      "Puramente objetivo e medido exclusivamente em termos financeiros",
      "Criado e entregue somente pelo provedor de serviço",
      "Responsabilidade exclusiva do cliente definir e comunicar"
    ],
    correct: 0,
    explanation: "Valor é subjetivo — depende da percepção do stakeholder e é influenciado por múltiplos fatores. É cocriado entre provedor e consumidor.",
    trap: "Valor não é objetivo nem unilateral: é a PERCEPÇÃO do stakeholder, influenciada por muitos fatores, e cocriado entre as partes.",
    trigger: "Valor = subjetivo + cocriado (percepção é do consumidor)."
  },
  {
    id: "smc-17",
    topic: TOPICS.SMC,
    question: "O que é uma 'relação de serviço' (service relationship) no ITIL 4?",
    options: [
      "Uma amizade informal entre equipes de TI",
      "Um entendimento tácito entre usuários sobre como usar o sistema",
      "Um contrato de terceirização com cláusulas de penalidade",
      "Uma cooperação entre provedor e consumidor de serviço"
    ],
    correct: 3,
    explanation: "A relação de serviço é a cooperação entre provedor e consumidor, envolvendo provisão, consumo e gestão da relação para cocriar valor.",
    trap: "Não é só um contrato formal: é uma cooperação ativa e contínua entre as partes.",
    trigger: "Relação de serviço = cooperação provedor ↔ consumidor."
  },
  {
    id: "smc-18",
    topic: TOPICS.SMC,
    question: "'Consumo de Serviço' é definido como:",
    options: [
      "Atividades realizadas pelo provedor para fornecer serviços",
      "Atividades realizadas pelo provedor para construir serviços",
      "Atividades realizadas pelo consumidor para receber e utilizar serviços",
      "Atividades realizadas pelo provedor para produzir componentes"
    ],
    correct: 2,
    explanation: "Consumo de serviço refere-se às atividades do lado do consumidor: gerenciar recursos de consumo, uso dos serviços e solicitação de ações de serviço.",
    trap: "Fornecer e construir são atividades do provedor. Consumo é o que o CONSUMIDOR faz com o serviço.",
    trigger: "Consumo = o que o consumidor faz (não o provedor)."
  },
  {
    id: "smc-19",
    topic: TOPICS.SMC,
    question: "No ITIL 4, 'garantia' (warranty) de um serviço é definida como:",
    options: [
      "A funcionalidade entregue pelo serviço ao consumidor",
      "A garantia de que um produto ou serviço atenderá aos requisitos acordados",
      "Uma oferta comercial de serviço ao cliente",
      "O contrato de gestão de ativos da organização"
    ],
    correct: 1,
    explanation: "Warranty é a garantia de que o serviço atenderá aos requisitos acordados — ou seja, o quão bem ele desempenha (disponibilidade, capacidade, segurança, continuidade).",
    trap: "A funcionalidade é 'utility'. Warranty é sobre o DESEMPENHO e a confiabilidade do serviço.",
    trigger: "Warranty = garantia de que atende aos requisitos (fitness for use)."
  },
  {
    id: "smc-20",
    topic: TOPICS.SMC,
    question: "Sobre riscos no ITIL 4, qual afirmação é correta?",
    options: [
      "Riscos nunca podem ser evitados em serviços de TI",
      "Riscos devem sempre ser completamente eliminados",
      "Riscos são sempre eventos negativos para a organização",
      "Riscos podem representar tanto ameaças quanto oportunidades para a organização"
    ],
    correct: 3,
    explanation: "O ITIL 4 reconhece que risco é incerteza de resultado: pode ser negativo (ameaça) ou positivo (oportunidade). Gerenciar risco inclui ambas as perspectivas.",
    trap: "A visão tradicional vê risco apenas como negativo, mas o ITIL 4 alinha-se às melhores práticas de gestão de riscos, que incluem oportunidades.",
    trigger: "Risco = incerteza: pode ser ameaça OU oportunidade."
  },
  {
    id: "smc-21",
    topic: TOPICS.SMC,
    question: "'Gestão de serviços' é definida como:",
    options: [
      "Um sistema de integração de aplicações e monitoramento (SIAM)",
      "Capacidades organizacionais especializadas para gerar valor para clientes na forma de serviços",
      "As atividades que o consumidor realiza para utilizar os serviços",
      "As atividades de provisão de serviços pelo provedor"
    ],
    correct: 1,
    explanation: "Gestão de serviços é o conjunto de capacidades organizacionais especializadas — pessoas, processos, tecnologia — que permitem gerar valor na forma de serviços.",
    trap: "Não é um sistema ou ferramenta: é um conjunto de CAPACIDADES organizacionais para gerar valor.",
    trigger: "Gestão de serviços = capacidades especializadas para gerar valor."
  },
  {
    id: "smc-22",
    topic: TOPICS.SMC,
    question: "No contexto de papéis do consumidor de serviço, como eles se relacionam corretamente?",
    options: [
      "Usuário define requisitos; Consumidor autoriza orçamento; Sponsor usa o serviço; Cliente é papel genérico",
      "Usuário é papel genérico; Sponsor autoriza orçamento; Consumidor define requisitos; Cliente usa o serviço",
      "Usuário usa o serviço; Consumidor é papel genérico; Sponsor autoriza orçamento; Cliente define requisitos",
      "Usuário usa o serviço; Consumidor autoriza orçamento; Sponsor é papel genérico; Cliente define requisitos"
    ],
    correct: 2,
    explanation: "Usuário (usa o serviço), Consumidor (papel genérico que engloba os demais), Sponsor (autoriza orçamento) e Cliente (define requisitos e resultados esperados).",
    trap: "A pegadinha está em trocar Cliente com Consumidor. Consumidor é o papel GENÉRICO; Cliente é o que define o que quer.",
    trigger: "Usuário=usa · Consumidor=genérico · Sponsor=paga · Cliente=define."
  },
  {
    id: "smc-23",
    topic: TOPICS.SMC,
    question: "Em qual atividade da SVC o envolvimento com stakeholders externos é sempre necessário?",
    options: [
      "Plan",
      "Improve",
      "Obtain/Build",
      "Engage"
    ],
    correct: 3,
    explanation: "'Engage' é a atividade da SVC que sempre envolve lidar com stakeholders externos — clientes, usuários, parceiros e fornecedores.",
    trap: "Plan e Improve também se conectam a stakeholders, mas Engage é especificamente sobre relacionamento e captura de necessidades com partes externas.",
    trigger: "Stakeholders externos = sempre 'Engage'."
  },
  {
    id: "smc-24",
    topic: TOPICS.SMC,
    question: "'Outcome' (resultado) no ITIL 4 é definido como:",
    options: [
      "Uma conquista interna da equipe de TI",
      "A garantia contratual do serviço",
      "O resultado obtido por um stakeholder, habilitado por uma ou mais saídas (outputs)",
      "A oferta de serviço disponível no catálogo"
    ],
    correct: 2,
    explanation: "Outcome é o resultado gerado para um stakeholder por meio de um ou mais outputs — é o que o consumidor efetivamente ganha com o serviço.",
    trap: "Output é o que se entrega; outcome é o que o stakeholder CONSEGUE graças a essa entrega. São conceitos distintos.",
    trigger: "Outcome = resultado para o stakeholder (habilitado pelos outputs)."
  },
  {
    id: "smc-25",
    topic: TOPICS.SMC,
    question: "'Disponibilidade' (availability) no ITIL 4 é definida como:",
    options: [
      "A performance máxima alcançada pelo serviço",
      "A capacidade de operar o serviço quando necessário",
      "A segurança das informações do serviço",
      "Um ativo de TI gerenciado pela organização"
    ],
    correct: 1,
    explanation: "Disponibilidade é a capacidade de um serviço, componente ou CI de funcionar quando requerido — é um elemento da warranty.",
    trap: "Não confunda com performance (velocidade) ou segurança: disponibilidade é sobre estar OPERACIONAL quando necessário.",
    trigger: "Disponibilidade = capacidade de operar quando for preciso."
  },

  /* -------- SVS / SVC -------- */
  {
    id: "svs-11",
    topic: TOPICS.SVS,
    question: "Qual é o gatilho das atividades dentro do Service Value System (SVS)?",
    options: [
      "Requisição formal de serviço",
      "Contrato firmado com terceiros",
      "Desenvolvimento de nova funcionalidade de TI",
      "Oportunidade e demanda"
    ],
    correct: 3,
    explanation: "As entradas (gatilhos) do SVS são oportunidade e demanda; o SVS as processa e gera valor como saída.",
    trap: "Requisição de serviço é uma forma de demanda, mas o gatilho genérico do SVS é 'oportunidade e demanda', não apenas requisições.",
    trigger: "Gatilho do SVS = oportunidade + demanda."
  },
  {
    id: "svs-12",
    topic: TOPICS.SVS,
    question: "Quais são os componentes do Service Value System (SVS)?",
    options: [
      "Plan, Improve, Engage, Design, Obtain, Deliver",
      "Princípios orientadores, Governança, Cadeia de valor de serviço, Práticas e Melhoria contínua",
      "Gerenciamento de serviços, Gerenciamento técnico, Gerenciamento geral",
      "Disponibilidade, Capacidade, Segurança, Continuidade"
    ],
    correct: 1,
    explanation: "O SVS é composto por: Princípios orientadores, Governança, Cadeia de valor de serviço (SVC), Práticas e Melhoria contínua.",
    trap: "A primeira opção lista as 6 ATIVIDADES da SVC (que é apenas um componente do SVS), não os componentes do SVS em si.",
    trigger: "SVS = Princípios + Governança + SVC + Práticas + Melhoria Contínua."
  },
  {
    id: "svc-12",
    topic: TOPICS.SVC,
    question: "Quais são as seis atividades da Service Value Chain (cadeia de valor de serviço)?",
    options: [
      "Plan, Improve, Engage, Design & Transition, Obtain/Build, Deliver & Support",
      "Strategy, Design, Transition, Operation, Improvement, Governance",
      "Identify, Assess, Approve, Build, Test, Release",
      "Plan, Support, Engage, Design, Obtain, Review"
    ],
    correct: 0,
    explanation: "As 6 atividades da SVC são: Plan (planejar), Improve (melhorar), Engage (engajar), Design & Transition, Obtain/Build e Deliver & Support.",
    trap: "Strategy/Design/Transition/Operation é o lifecycle do ITIL v3 — não é a SVC do ITIL 4. Cuidado com essa armadilha clássica.",
    trigger: "SVC: Plan · Improve · Engage · Design&T · Obtain/Build · Deliver&S."
  },
  {
    id: "svc-13",
    topic: TOPICS.SVC,
    question: "Value streams (fluxos de valor) devem:",
    options: [
      "Nunca ser alterados após a implementação inicial",
      "Ser melhorados apenas quando um problema crítico surgir",
      "Ser continuamente melhorados para eliminar desperdícios e aumentar a entrega de valor",
      "Nunca ser submetidos a processos de melhoria"
    ],
    correct: 2,
    explanation: "A melhoria contínua se aplica também aos value streams: eles devem ser periodicamente revisados e otimizados para entregar mais valor com menos desperdício.",
    trap: "Esperar um problema para melhorar é reativo; o ITIL 4 defende melhoria CONTÍNUA e proativa dos fluxos de valor.",
    trigger: "Value streams = melhoria contínua (sempre, não só quando há problema)."
  },
  {
    id: "svc-14",
    topic: TOPICS.SVC,
    question: "Cada prática do ITIL 4 em relação às atividades da SVC:",
    options: [
      "Se associa a uma única atividade da SVC, exclusivamente",
      "Deve ter uma atividade da SVC dedicada para ela",
      "Não tem influência sobre as atividades da SVC",
      "Pode suportar múltiplas atividades da SVC simultaneamente"
    ],
    correct: 3,
    explanation: "As práticas são transversais: uma única prática pode contribuir para várias atividades da SVC, conforme o contexto e a necessidade.",
    trap: "Não há mapeamento 1-para-1 fixo entre prática e atividade. A combinação é flexível e orientada ao cenário.",
    trigger: "Prática ↔ SVC: uma prática → múltiplas atividades."
  },

  /* -------- GUIDING PRINCIPLES -------- */
  {
    id: "gp-16",
    topic: TOPICS.GP,
    question: "Qual das seguintes NÃO é um princípio orientador do ITIL 4?",
    options: [
      "Foco no valor",
      "Comece onde está",
      "Adote mentalidade ágil",
      "Progrida iterativamente com feedback"
    ],
    correct: 2,
    explanation: "'Adote mentalidade ágil' não é um dos 7 princípios orientadores do ITIL 4. Os sete são: Foco no valor; Comece onde está; Progrida iterativamente com feedback; Colabore e promova visibilidade; Pense e trabalhe holisticamente; Mantenha simples e prático; Otimize e automatize.",
    trap: "Agilidade é um valor importante no contexto ITIL, mas não é um dos 7 princípios orientadores em si.",
    trigger: "7 princípios: memorize a lista — 'adote mentalidade ágil' não está nela."
  },
  {
    id: "gp-17",
    topic: TOPICS.GP,
    question: "O princípio 'Otimize e automatize' orienta que:",
    options: [
      "Deve-se simplificar e otimizar os processos antes de automatizá-los",
      "A automação deve preceder sempre a otimização",
      "Todo processo deve ser completamente automatizado",
      "As dificuldades mais complexas devem ser automatizadas primeiro"
    ],
    correct: 0,
    explanation: "A ordem correta é: primeiro otimizar (eliminar desperdício, simplificar), depois automatizar. Automatizar um processo ruim apenas o torna mais rápido em errar.",
    trap: "A tentação é automatizar tudo rapidamente. Mas o ITIL 4 é claro: otimize ANTES. Automatizar a bagunça mantém a bagunça.",
    trigger: "Otimize PRIMEIRO → automatize DEPOIS (nunca o contrário)."
  },

  /* -------- FOUR DIMENSIONS -------- */
  {
    id: "dim-12",
    topic: TOPICS.DIM,
    question: "Quais fatores externos afetam todas as quatro dimensões do gerenciamento de serviços?",
    options: [
      "Posicional, equitativo, psicológico e comportamental",
      "Político, econômico, social, tecnológico, legal e ambiental (PESTLE)",
      "Prático, ergonômico, sistêmico e cultural",
      "Problemático, econômico, social e tecnológico"
    ],
    correct: 1,
    explanation: "O ITIL 4 utiliza o modelo PESTLE para descrever os fatores externos (político, econômico, social, tecnológico, legal e ambiental) que afetam todas as quatro dimensões.",
    trap: "PESTLE é uma sigla: Political, Economic, Social, Technological, Legal, Environmental. Não confunda com SWOT ou outras análises.",
    trigger: "Fatores externos = PESTLE (6 fatores, afetam todas as dimensões)."
  },
  {
    id: "dim-13",
    topic: TOPICS.DIM,
    question: "Quais são as dimensões corretas do gerenciamento de serviços no ITIL 4?",
    options: [
      "Informação e Pessoas; Informação e Tecnologia",
      "Informação e Tecnologia; Valor e Pessoas",
      "Informação e Pessoas; Valor e Processos",
      "Informação e Tecnologia; Fluxos de Valor e Processos"
    ],
    correct: 3,
    explanation: "As quatro dimensões do ITIL 4 são: Organizações e Pessoas; Informação e Tecnologia; Parceiros e Fornecedores; Fluxos de Valor e Processos.",
    trap: "Não existe dimensão 'Valor e Pessoas' ou 'Informação e Pessoas' no ITIL 4. As dimensões corretas envolvem 'Informação E Tecnologia' e 'Fluxos de Valor E Processos'.",
    trigger: "4D: Org/Pessoas · Info/Tech · Parceiros/Fornec · Fluxos/Processos."
  },

  /* -------- CONTINUAL IMPROVEMENT -------- */
  {
    id: "ci-10",
    topic: TOPICS.CI,
    question: "Sobre a melhoria contínua no ITIL 4, qual é a afirmação correta?",
    options: [
      "Deve estar incorporada em todos os papéis, equipes e práticas da organização",
      "Deve ser responsabilidade de uma única equipe dedicada",
      "Deve ser responsabilidade de uma única pessoa designada",
      "Deve ser aplicada por meio de uma única técnica padronizada"
    ],
    correct: 0,
    explanation: "A melhoria contínua é responsabilidade de todos na organização — todos os papéis e equipes devem contribuir para a cultura de melhoria, não apenas um time isolado.",
    trap: "Pode existir uma equipe ou responsável dedicado à coordenação, mas isso não isenta os demais. A melhoria é de TODOS.",
    trigger: "Melhoria contínua = responsabilidade de TODOS (não de um time)."
  },

  /* -------- SLA / MÉTRICAS -------- */
  {
    id: "sla-10",
    topic: TOPICS.SLA,
    question: "Com que frequência devem ser realizadas as revisões de serviço (service reviews) entre provedor e cliente?",
    options: [
      "Anualmente, conforme ciclo fiscal",
      "Semestralmente, a cada 6 meses",
      "Trimestralmente, a cada 3 meses",
      "Regularmente, conforme acordado entre as partes"
    ],
    correct: 3,
    explanation: "O ITIL 4 não prescreve um período fixo: as revisões de serviço devem ocorrer regularmente, na frequência acordada entre provedor e cliente conforme as necessidades do negócio.",
    trap: "Prescrever um período fixo (anual, trimestral) é o erro: a resposta certa é 'regular', pois a frequência varia conforme o contexto.",
    trigger: "Service review = regular (frequência acordada, não prescrita)."
  }
];

/* Exposição global (sem módulos, para funcionar em GitHub Pages e até em file://) */
window.ITIL_TOPICS = TOPICS;
window.ITIL_QUESTIONS = QUESTIONS;
