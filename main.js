
/*
========================================
CURRÍCULO ONLINE - DANIEL FONSECA
HTML + CSS + JAVASCRIPT
========================================
*/

const cv = {
  nome: "Daniel Fonseca",

  cargo:
    "Estudante de Análise e Desenvolvimento de Sistemas",

  cidade: "Suzano - SP, Brasil",

  // FOTO DE PERFIL
  // O sistema tenta estes nomes automaticamente.
  fotosPossiveis: [
    "foto.jpeg",
    "foto.jpg",
    "foto.jpg.jpeg",
    "foto.png"
  ],

  // CONTATOS
  // Preencha com suas informações.
  email: "",
  telefone: "",
  whatsapp: "",
  github: "",
  linkedin: "",

  // RESUMO PROFISSIONAL
  resumo:
    "Sou estudante de Análise e Desenvolvimento de Sistemas na UNIPIAGET, com conhecimentos em programação, desenvolvimento web, banco de dados e Excel Avançado. Sou responsável, organizado, proativo e tenho facilidade para aprender. Busco uma oportunidade profissional para desenvolver minhas habilidades, adquirir experiência e contribuir com dedicação e trabalho em equipe.",

  // EXPERIÊNCIA PROFISSIONAL
  experiencias: [
    {
      cargo: "Atendente",
      empresa: "McDonald's",
      periodo: "Experiência de curta duração",

      descricao:
        "Atuação em ambiente dinâmico, seguindo padrões de atendimento, organização, higiene e trabalho em equipe.",

      atividades: [
        "Atendimento ao cliente",
        "Organização do ambiente de trabalho",
        "Apoio às atividades operacionais",
        "Cumprimento de procedimentos internos",
        "Trabalho em equipe"
      ]
    }
  ],

  // FORMAÇÃO ACADÊMICA
  formacao: [
    {
      curso: "Análise e Desenvolvimento de Sistemas",
      instituicao: "UNIPIAGET - Suzano",
      periodo: "2º semestre - Em andamento",

      descricao:
        "Graduação tecnológica com estudos em programação, algoritmos, banco de dados, engenharia de software e desenvolvimento de sistemas."
    },

    {
      curso: "Ensino Médio",
      instituicao: "Concluído",
      periodo: "",
      descricao: ""
    }
  ],

  // CURSOS COMPLEMENTARES
  cursos: [
    {
      nome: "Excel Avançado",
      instituicao: "SENAI",
      situacao: "Concluído"
    },

    {
      nome: "Comandos Elétricos",
      instituicao: "SENAI",
      situacao: "Concluído"
    }
  ],

  // HABILIDADES TÉCNICAS
  habilidadesTecnicas: [
    "Excel Avançado",
    "Pacote Office",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Banco de Dados",
    "Git",
    "GitHub",
    "Supabase",
    "Desenvolvimento Web",
    "Lógica de Programação",
    "Informática"
  ],

  // HABILIDADES PESSOAIS
  habilidadesPessoais: [
    "Responsabilidade",
    "Pontualidade",
    "Organização",
    "Proatividade",
    "Trabalho em equipe",
    "Facilidade de aprendizado",
    "Comprometimento",
    "Resolução de problemas",
    "Adaptabilidade"
  ],

  // PROJETOS DESENVOLVIDOS
  projetos: [
    {
      nome: "Sistema de Controle Financeiro",

      descricao:
        "Sistema desenvolvido em Python para gerenciamento de receitas e despesas, controle de saldo e geração de relatórios financeiros.",

      tecnologias: [
        "Python",
        "Streamlit",
        "Supabase",
        "PostgreSQL",
        "Pandas",
        "Excel",
        "PDF"
      ],

      link: ""
    },

    {
      nome: "Taí Lash Studio",

      descricao:
        "Desenvolvimento de um site de agendamentos para serviços de beleza, com catálogo, seleção de horários, autenticação e painel administrativo.",

      tecnologias: [
        "Next.js",
        "React",
        "JavaScript",
        "Supabase",
        "PostgreSQL",
        "Vercel"
      ],

      link: ""
    },

    {
      nome: "Calculadora JavaScript",

      descricao:
        "Projeto de calculadora desenvolvido para praticar lógica de programação e manipulação de elementos HTML.",

      tecnologias: [
        "HTML",
        "CSS",
        "JavaScript"
      ],

      link: ""
    },

    {
      nome: "Currículo Online",

      descricao:
        "Currículo digital desenvolvido com HTML, CSS e JavaScript para apresentar informações profissionais, formação e projetos.",

      tecnologias: [
        "HTML",
        "CSS",
        "JavaScript",
        "GitHub Pages"
      ],

      link: ""
    }
  ],

  // INFORMAÇÕES ADICIONAIS
  informacoesAdicionais: [
    "Residente em Suzano - São Paulo",
    "Interesse em oportunidades de estágio, jovem aprendiz e primeiro emprego",
    "Disponibilidade para aprender novas funções e tecnologias",
    "Interesse em áreas de tecnologia, administrativas e operacionais"
  ]
};


// ========================================
// INICIALIZAÇÃO
// ========================================

const root = document.getElementById("cv");

if (!root) {
  throw new Error(
    "Elemento #cv não encontrado no index.html"
  );
}


// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);

  if (classe) {
    elemento.className = classe;
  }

  if (texto !== undefined && texto !== "") {
    elemento.textContent = texto;
  }

  return elemento;
}


function criarSecao(titulo) {
  const secao = criarElemento("section", "sec");

  secao.appendChild(
    criarElemento("h2", null, titulo)
  );

  root.appendChild(secao);

  return secao;
}


function criarLista(itens) {
  const lista = criarElemento("ul");

  itens.forEach(item => {
    lista.appendChild(
      criarElemento("li", null, item)
    );
  });

  return lista;
}


function criarChips(itens) {
  const container = criarElemento("div", "chips");

  itens.forEach(item => {
    container.appendChild(
      criarElemento("span", "chip", item)
    );
  });

  return container;
}


function criarLink(texto, endereco) {
  const link = criarElemento("a", null, texto);

  link.href = endereco;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  return link;
}


// ========================================
// CABEÇALHO
// ========================================

const header = criarElemento("header", "hero");


// ========================================
// FOTO DE PERFIL - CORRIGIDA
// ========================================

const fotoContainer = criarElemento("div", "photo");

const imagem = document.createElement("img");

imagem.alt = "Foto de Daniel Fonseca";

imagem.loading = "eager";

imagem.decoding = "async";

// Testa automaticamente os nomes de foto.
let indiceFoto = 0;

function carregarFoto() {
  if (indiceFoto >= cv.fotosPossiveis.length) {
    console.error(
      "Foto não encontrada. Coloque sua imagem " +
      "na mesma pasta do index.html."
    );

    imagem.style.display = "none";

    fotoContainer.textContent = "DF";

    fotoContainer.style.display = "flex";
    fotoContainer.style.alignItems = "center";
    fotoContainer.style.justifyContent = "center";
    fotoContainer.style.fontSize = "40px";
    fotoContainer.style.fontWeight = "bold";
    fotoContainer.style.color = "#2563eb";

    return;
  }

  const nomeFoto = cv.fotosPossiveis[indiceFoto];

  indiceFoto++;

  imagem.src = nomeFoto;
}

imagem.onerror = function () {
  carregarFoto();
};

fotoContainer.appendChild(imagem);

header.appendChild(fotoContainer);

carregarFoto();


// ========================================
// INFORMAÇÕES PESSOAIS
// ========================================

const informacoes = criarElemento("div");

informacoes.appendChild(
  criarElemento("h1", null, cv.nome)
);

informacoes.appendChild(
  criarElemento("p", "title", cv.cargo)
);

informacoes.appendChild(
  criarElemento(
    "p",
    "meta",
    "📍 " + cv.cidade
  )
);


// ========================================
// CONTATOS
// ========================================

const contatos = criarElemento("div", "contacts");

if (cv.email) {
  contatos.appendChild(
    criarLink(
      "✉️ " + cv.email,
      "mailto:" + cv.email
    )
  );
}

if (cv.telefone) {
  contatos.appendChild(
    criarElemento(
      "span",
      null,
      "📞 " + cv.telefone
    )
  );
}

if (cv.whatsapp) {
  contatos.appendChild(
    criarLink(
      "💬 WhatsApp",
      "https://wa.me/" +
      cv.whatsapp.replace(/\D/g, "")
    )
  );
}

if (cv.github) {
  contatos.appendChild(
    criarLink("GitHub", cv.github)
  );
}

if (cv.linkedin) {
  contatos.appendChild(
    criarLink("LinkedIn", cv.linkedin)
  );
}

informacoes.appendChild(contatos);

header.appendChild(informacoes);

root.appendChild(header);


// ========================================
// RESUMO PROFISSIONAL
// ========================================

const resumo = criarSecao("Resumo Profissional");

resumo.appendChild(
  criarElemento("p", null, cv.resumo)
);


// ========================================
// EXPERIÊNCIA PROFISSIONAL
// ========================================

const experiencia = criarSecao(
  "Experiência Profissional"
);

cv.experiencias.forEach(item => {
  const artigo = criarElemento("article", "entry");

  artigo.appendChild(
    criarElemento("h3", null, item.cargo)
  );

  artigo.appendChild(
    criarElemento("p", "meta", item.empresa)
  );

  artigo.appendChild(
    criarElemento("p", "meta", item.periodo)
  );

  artigo.appendChild(
    criarElemento("p", null, item.descricao)
  );

  artigo.appendChild(
    criarLista(item.atividades)
  );

  experiencia.appendChild(artigo);
});


// ========================================
// FORMAÇÃO ACADÊMICA
// ========================================

const formacao = criarSecao("Formação Acadêmica");

cv.formacao.forEach(item => {
  const artigo = criarElemento("article", "entry");

  artigo.appendChild(
    criarElemento("h3", null, item.curso)
  );

  artigo.appendChild(
    criarElemento("p", "meta", item.instituicao)
  );

  if (item.periodo) {
    artigo.appendChild(
      criarElemento("p", "meta", item.periodo)
    );
  }

  if (item.descricao) {
    artigo.appendChild(
      criarElemento("p", null, item.descricao)
    );
  }

  formacao.appendChild(artigo);
});


// ========================================
// CURSOS COMPLEMENTARES
// ========================================

const cursos = criarSecao("Cursos Complementares");

cv.cursos.forEach(item => {
  const artigo = criarElemento("article", "entry");

  artigo.appendChild(
    criarElemento("h3", null, item.nome)
  );

  artigo.appendChild(
    criarElemento(
      "p",
      "meta",
      item.instituicao + " - " + item.situacao
    )
  );

  cursos.appendChild(artigo);
});


// ========================================
// HABILIDADES
// ========================================

const habilidades = criarSecao("Habilidades");

habilidades.appendChild(
  criarElemento(
    "h3",
    null,
    "Conhecimentos Técnicos"
  )
);

habilidades.appendChild(
  criarChips(cv.habilidadesTecnicas)
);

habilidades.appendChild(
  criarElemento(
    "h3",
    null,
    "Competências Pessoais"
  )
);

habilidades.appendChild(
  criarChips(cv.habilidadesPessoais)
);


// ========================================
// PROJETOS DESENVOLVIDOS
// ========================================

const projetos = criarSecao(
  "Projetos Desenvolvidos"
);

cv.projetos.forEach(item => {
  const artigo = criarElemento("article", "entry");

  artigo.appendChild(
    criarElemento("h3", null, item.nome)
  );

  artigo.appendChild(
    criarElemento("p", null, item.descricao)
  );

  artigo.appendChild(
    criarChips(item.tecnologias)
  );

  if (item.link) {
    artigo.appendChild(
      criarLink("Ver projeto", item.link)
    );
  }

  projetos.appendChild(artigo);
});


// ========================================
// INFORMAÇÕES ADICIONAIS
// ========================================

const adicionais = criarSecao(
  "Informações Adicionais"
);

adicionais.appendChild(
  criarLista(cv.informacoesAdicionais)
);


// ========================================
// RODAPÉ
// ========================================

const rodape = criarElemento(
  "footer",
  null,
  "Daniel Fonseca | Currículo Online | 2026"
);

root.appendChild(rodape);

document.title = cv.nome + " | Currículo";
