
"use strict";

/* =========================================================
   ORÇAFÁCIL — LagaresDev
   Orçamentos profissionais por área de atuação
   HTML + CSS + JavaScript, sem dependências externas
========================================================= */

const CONFIG = {
    chave: "lagaredev_orcafacil_orcamentos",
    versao: 1,
    moeda: "BRL"
};

const PROFISSOES = {
    construcao: {
        nome: "Construção e alvenaria",
        icone: "🧱",
        descricao: "Alvenaria, reboco, contrapiso, pisos, revestimentos e reformas.",
        unidadePadrao: "m²",
        unidades: ["m²", "m³", "metro linear", "unidade", "diária", "hora", "serviço"],
        sugestoes: [
            "Assentamento de tijolos",
            "Reboco de parede",
            "Contrapiso",
            "Assentamento de piso",
            "Assentamento de revestimento",
            "Demolição",
            "Construção de muro",
            "Reparo de alvenaria",
            "Impermeabilização",
            "Outro serviço"
        ],
        campos: [
            { nome: "Área ou quantidade", tipo: "quantidade", unidade: "m²" },
            { nome: "Tipo de trabalho", tipo: "texto", placeholder: "Ex.: parede interna, muro, banheiro..." },
            { nome: "Condição do local", tipo: "select", opcoes: ["Obra nova", "Reforma", "Reparo", "Acabamento"] }
        ]
    },

    pintura: {
        nome: "Pintura",
        icone: "🎨",
        descricao: "Pintura interna, externa, preparação de superfícies e acabamento.",
        unidadePadrao: "m²",
        unidades: ["m²", "metro linear", "unidade", "diária", "hora", "serviço"],
        sugestoes: [
            "Pintura de parede interna",
            "Pintura de parede externa",
            "Pintura de teto",
            "Pintura de portão",
            "Pintura de portas",
            "Pintura de janelas",
            "Lixamento e preparação",
            "Aplicação de massa corrida",
            "Aplicação de selador",
            "Textura ou efeito decorativo",
            "Retoque de pintura",
            "Outro serviço"
        ],
        campos: [
            { nome: "Área a pintar", tipo: "quantidade", unidade: "m²" },
            { nome: "Condição da superfície", tipo: "select", opcoes: ["Nova", "Em bom estado", "Com descascamento", "Com infiltração ou umidade", "Precisa de reparos"] },
            { nome: "Tipo de acabamento", tipo: "select", opcoes: ["Fosco", "Acetinado", "Semibrilho", "Texturizado", "A definir"] },
            { nome: "Demãos previstas", tipo: "select", opcoes: ["1 demão", "2 demãos", "3 demãos", "A definir após avaliação"] }
        ]
    },

    eletrica: {
        nome: "Elétrica",
        icone: "⚡",
        descricao: "Tomadas, iluminação, circuitos, quadros elétricos e instalações.",
        unidadePadrao: "ponto",
        unidades: ["ponto", "unidade", "metro linear", "circuito", "diária", "hora", "serviço"],
        sugestoes: [
            "Instalação de tomada",
            "Instalação de interruptor",
            "Instalação de luminária",
            "Instalação de chuveiro elétrico",
            "Instalação de ventilador de teto",
            "Passagem de fiação",
            "Instalação de circuito",
            "Instalação ou organização de quadro",
            "Troca de disjuntor",
            "Diagnóstico de falha elétrica",
            "Revisão da instalação",
            "Outro serviço"
        ],
        campos: [
            { nome: "Quantidade de pontos", tipo: "quantidade", unidade: "ponto" },
            { nome: "Tipo de instalação", tipo: "select", opcoes: ["Instalação nova", "Substituição", "Manutenção", "Diagnóstico"] },
            { nome: "Local da instalação", tipo: "texto", placeholder: "Ex.: cozinha, quarto, área externa..." },
            { nome: "Precisa passar fiação?", tipo: "select", opcoes: ["Sim", "Não", "A avaliar"] }
        ]
    },

    climatizacao: {
        nome: "Ar-condicionado",
        icone: "❄️",
        descricao: "Instalação, higienização, manutenção e diagnóstico de climatização.",
        unidadePadrao: "unidade",
        unidades: ["unidade", "metro linear", "visita", "hora", "diária", "serviço"],
        sugestoes: [
            "Instalação de ar-condicionado split",
            "Desinstalação de equipamento",
            "Limpeza e higienização",
            "Manutenção preventiva",
            "Manutenção corretiva",
            "Diagnóstico de defeito",
            "Instalação de dreno",
            "Instalação de tubulação",
            "Instalação de suporte",
            "Verificação de vazamento",
            "Outro serviço"
        ],
        campos: [
            { nome: "Quantidade de aparelhos", tipo: "quantidade", unidade: "unidade" },
            { nome: "Tipo de atendimento", tipo: "select", opcoes: ["Instalação", "Limpeza", "Manutenção preventiva", "Manutenção corretiva", "Diagnóstico"] },
            { nome: "Capacidade do aparelho", tipo: "select", opcoes: ["Até 9.000 BTUs", "12.000 BTUs", "18.000 BTUs", "24.000 BTUs", "Acima de 24.000 BTUs", "Outro / não informado"] },
            { nome: "Tipo de equipamento", tipo: "select", opcoes: ["Split hi-wall", "Multi-split", "Janela", "Cassete", "Piso-teto", "Outro"] },
            { nome: "Tubulação adicional", tipo: "select", opcoes: ["Não", "Sim", "A avaliar no local"] }
        ]
    },

    hidraulica: {
        nome: "Hidráulica e encanamento",
        icone: "🚰",
        descricao: "Torneiras, vazamentos, tubulações, registros e instalações hidráulicas.",
        unidadePadrao: "ponto",
        unidades: ["ponto", "unidade", "metro linear", "visita", "hora", "diária", "serviço"],
        sugestoes: [
            "Instalação de torneira",
            "Troca de torneira",
            "Instalação de vaso sanitário",
            "Instalação de pia ou cuba",
            "Instalação de chuveiro",
            "Troca de registro",
            "Reparo de vazamento",
            "Instalação de tubulação",
            "Desentupimento",
            "Instalação de caixa-d'água",
            "Revisão hidráulica",
            "Outro serviço"
        ],
        campos: [
            { nome: "Quantidade de pontos", tipo: "quantidade", unidade: "ponto" },
            { nome: "Tipo de atendimento", tipo: "select", opcoes: ["Instalação nova", "Reparo", "Substituição", "Desentupimento", "Diagnóstico"] },
            { nome: "Tipo de tubulação", tipo: "select", opcoes: ["Água fria", "Água quente", "Esgoto", "Pluvial", "Não se aplica", "A avaliar"] },
            { nome: "Local do problema", tipo: "texto", placeholder: "Ex.: banheiro, cozinha, quintal..." }
        ]
    },

    manutencao: {
        nome: "Manutenção e reparos",
        icone: "🛠️",
        descricao: "Pequenos reparos, montagem, ajustes, instalações e manutenção geral.",
        unidadePadrao: "serviço",
        unidades: ["serviço", "unidade", "hora", "diária", "metro linear", "m²"],
        sugestoes: [
            "Pequeno reparo residencial",
            "Montagem de móvel",
            "Instalação de suporte",
            "Instalação de acessórios",
            "Ajuste de porta",
            "Reparo de parede",
            "Fixação de objetos",
            "Manutenção preventiva",
            "Visita técnica",
            "Outro serviço"
        ],
        campos: [
            { nome: "Quantidade de itens", tipo: "quantidade", unidade: "unidade" },
            { nome: "Tipo de atendimento", tipo: "select", opcoes: ["Instalação", "Reparo", "Montagem", "Ajuste", "Manutenção preventiva", "Visita técnica"] },
            { nome: "Local do serviço", tipo: "texto", placeholder: "Ex.: sala, cozinha, área externa..." }
        ]
    },

    outros: {
        nome: "Outros serviços",
        icone: "🔧",
        descricao: "Monte um orçamento personalizado para outros tipos de trabalho.",
        unidadePadrao: "serviço",
        unidades: ["serviço", "unidade", "hora", "diária", "metro linear", "m²", "m³"],
        sugestoes: [
            "Serviço personalizado",
            "Visita técnica",
            "Instalação",
            "Reparo",
            "Manutenção",
            "Outro serviço"
        ],
        campos: [
            { nome: "Quantidade", tipo: "quantidade", unidade: "unidade" },
            { nome: "Tipo de serviço", tipo: "texto", placeholder: "Descreva o trabalho..." },
            { nome: "Observações técnicas", tipo: "texto", placeholder: "Informações importantes sobre o serviço..." }
        ]
    }
};


/* =========================================================
   1. ESTADO E FUNÇÕES BÁSICAS
========================================================= */

let orcamentos = carregarOrcamentos();
let profissaoAtual = "construcao";
let modoEdicao = false;
let idEmEdicao = null;

const $ = (seletor, raiz = document) => raiz.querySelector(seletor);
const $$ = (seletor, raiz = document) => [...raiz.querySelectorAll(seletor)];

const porId = id => document.getElementById(id);

function gerarId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") {
        return window.crypto.randomUUID();
    }

    return `orc-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function dinheiro(valor) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: CONFIG.moeda
    }).format(Number(valor) || 0);
}

function numero(valor) {
    if (typeof valor === "number") {
        return Number.isFinite(valor) ? valor : 0;
    }

    let texto = String(valor ?? "").trim();
    if (!texto) return 0;

    texto = texto.replace(/\s/g, "").replace(/R\$/gi, "");

    if (texto.includes(",")) {
        texto = texto.replace(/\./g, "").replace(",", ".");
    }

    const resultado = Number(texto);
    return Number.isFinite(resultado) ? resultado : 0;
}

function textoSeguro(valor) {
    return String(valor ?? "").trim();
}

function escaparHTML(valor) {
    return String(valor ?? "").replace(/[&<>"']/g, caractere => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[caractere]);
}

function dataLocal(valor = new Date()) {
    const data = new Date(valor);
    return new Intl.DateTimeFormat("pt-BR").format(data);
}

function dataHoraLocal(valor = new Date()) {
    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    }).format(new Date(valor));
}

function valorCampo(id, padrao = "") {
    const elemento = porId(id);
    return elemento ? elemento.value : padrao;
}

function definirCampo(id, valor) {
    const elemento = porId(id);
    if (elemento) elemento.value = valor ?? "";
}

function definirTexto(id, valor) {
    const elemento = porId(id);
    if (elemento) elemento.textContent = valor ?? "";
}

function definirHTML(id, html) {
    const elemento = porId(id);
    if (elemento) elemento.innerHTML = html;
}

function mostrar(elemento, visivel = true) {
    if (!elemento) return;
    elemento.hidden = !visivel;
}

function lerRadio(nome, padrao = "") {
    const selecionado = $(`input[name="${nome}"]:checked`);
    return selecionado ? selecionado.value : padrao;
}

function definirRadio(nome, valor) {
    $$(`input[name="${nome}"]`).forEach(input => {
        input.checked = input.value === valor;
    });
}

function valorDeInput(raiz, seletor, padrao = "") {
    const elemento = $(seletor, raiz);
    return elemento ? elemento.value : padrao;
}

function formatarTelefone(telefone) {
    return String(telefone || "").replace(/\D/g, "");
}

function validarTelefoneWhatsApp(telefone) {
    const numeros = formatarTelefone(telefone);

    if (numeros.length < 10 || numeros.length > 13) {
        return "";
    }

    // Se o DDD e o número foram informados sem código do país,
    // acrescenta o código do Brasil.
    return numeros.startsWith("55") ? numeros : `55${numeros}`;
}


/* =========================================================
   2. ARMAZENAMENTO LOCAL
========================================================= */

function carregarOrcamentos() {
    try {
        const salvo = localStorage.getItem(CONFIG.chave);
        if (!salvo) return [];

        const dados = JSON.parse(salvo);
        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        console.error("Não foi possível carregar os orçamentos:", erro);
        return [];
    }
}

function salvarOrcamentos() {
    try {
        localStorage.setItem(CONFIG.chave, JSON.stringify(orcamentos));
        return true;
    } catch (erro) {
        console.error("Não foi possível salvar os orçamentos:", erro);
        alert(
            "Não foi possível salvar os dados neste navegador. " +
            "Verifique o espaço disponível e exporte um backup."
        );
        return false;
    }
}


/* =========================================================
   3. NAVEGAÇÃO ENTRE TELAS
========================================================= */

function mostrarSecao(nome) {
    const secoes = {
        inicio: "secao-inicio",
        formulario: "secao-formulario",
        historico: "secao-historico",
        backup: "secao-backup"
    };

    Object.entries(secoes).forEach(([chave, id]) => {
        const secao = porId(id);
        if (secao) mostrar(secao, chave === nome);
    });

    $$(".botao-navegacao").forEach(botao => {
        const destino = botao.dataset.secao || botao.dataset.destino;
        botao.classList.toggle("ativo", destino === nome);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function abrirInicio() {
    mostrarSecao("inicio");
    atualizarDashboard();
}

function abrirHistorico() {
    mostrarSecao("historico");
    renderizarHistorico();
}

function abrirBackup() {
    mostrarSecao("backup");
}

function conectarNavegacao() {
    const ligacoes = [
        ["btn-inicio", abrirInicio],
        ["link-inicio", abrirInicio],
        ["btn-rodape-inicio", abrirInicio],
        ["btn-voltar-inicio", abrirInicio],
        ["btn-historico", abrirHistorico],
        ["btn-voltar-historico", abrirHistorico],
        ["btn-backup", abrirBackup],
        ["btn-voltar-backup", abrirBackup],
        ["btn-novo-orcamento", () => iniciarNovoOrcamento()],
        ["btn-comecar-orcamento", () => iniciarNovoOrcamento()],
        ["btn-novo-historico", () => iniciarNovoOrcamento()],
        ["btn-criar-primeiro-orcamento", () => iniciarNovoOrcamento()]
    ];

    ligacoes.forEach(([id, acao]) => {
        const elemento = porId(id);
        if (elemento) elemento.addEventListener("click", acao);
    });

    $$("[data-area]").forEach(cartao => {
        cartao.addEventListener("click", () => {
            const area = cartao.dataset.area;
            if (PROFISSOES[area]) iniciarNovoOrcamento(area);
        });
    });
}


/* =========================================================
   4. SERVIÇOS PERSONALIZADOS POR PROFISSÃO
========================================================= */

function iniciarNovoOrcamento(area = "construcao") {
    profissaoAtual = PROFISSOES[area] ? area : "outros";
    modoEdicao = false;
    idEmEdicao = null;

    const formulario = porId("formulario-container");
    if (formulario) formulario.reset();

    definirCampo("orcamento-id", "");
    definirCampo("area-servico", profissaoAtual);
    definirCampo("titulo-formulario", "");
    definirCampo("nome-cliente", "");
    definirCampo("telefone-cliente", "");
    definirCampo("endereco-servico", "");
    definirCampo("titulo-servico", "");
    definirCampo("descricao-servico", "");
    definirCampo("observacoes-orcamento", "");
    definirCampo("validade-orcamento", "7");
    definirCampo("dias-servico", "1");
    definirCampo("quantidade-ajudantes", "0");
    definirCampo("valor-diaria-ajudante", "0");
    definirCampo("custo-transporte", "0");
    definirCampo("despesas-extras", "0");

    // Não usamos percentual de lucro. O profissional informa
    // diretamente o preço que deseja cobrar em cada serviço.
    definirCampo("margem-lucro", "0");

    definirRadio("responsavel-materiais", "profissional");

    renderizarCamposProfissao();
    renderizarListaServicos([]);
    renderizarListaMateriais([]);
    limparMensagemFormulario();

    definirTexto(
        "titulo-formulario",
        `Novo orçamento — ${PROFISSOES[profissaoAtual].nome}`
    );

    mostrarSecao("formulario");
    adicionarServico();
    atualizarResumo();
}

function renderizarCamposProfissao(dadosSalvos = {}) {
    const painel = porId("painel-servicos-profissionais");
    if (!painel) return;

    const profissao = PROFISSOES[profissaoAtual];

    painel.innerHTML = `
        <div class="bloco-cabecalho">
            <div class="numero-etapa">✦</div>
            <div>
                <h2>Detalhes de ${escaparHTML(profissao.nome.toLowerCase())}</h2>
                <p>Preencha os dados técnicos que fazem sentido para este tipo de serviço.</p>
            </div>
        </div>

        <div class="grade-campos">
            ${profissao.campos.map((campo, indice) => {
                const id = `campo-profissao-${indice}`;
                const valorSalvo = dadosSalvos[campo.nome] ?? "";

                if (campo.tipo === "select") {
                    return `
                        <div class="grupo-campo">
                            <label for="${id}">${escaparHTML(campo.nome)}</label>
                            <select id="${id}" data-campo-profissao="${escaparHTML(campo.nome)}">
                                ${campo.opcoes.map(opcao => `
                                    <option value="${escaparHTML(opcao)}"
                                        ${valorSalvo === opcao ? "selected" : ""}>
                                        ${escaparHTML(opcao)}
                                    </option>
                                `).join("")}
                            </select>
                        </div>
                    `;
                }

                if (campo.tipo === "quantidade") {
                    return `
                        <div class="grupo-campo">
                            <label for="${id}">${escaparHTML(campo.nome)}</label>
                            <input
                                id="${id}"
                                type="number"
                                min="0"
                                step="0.01"
                                value="${escaparHTML(valorSalvo)}"
                                placeholder="Informe a quantidade"
                                data-campo-profissao="${escaparHTML(campo.nome)}"
                            >
                            <small>Unidade de referência: ${escaparHTML(campo.unidade)}</small>
                        </div>
                    `;
                }

                return `
                    <div class="grupo-campo">
                        <label for="${id}">${escaparHTML(campo.nome)}</label>
                        <input
                            id="${id}"
                            type="text"
                            value="${escaparHTML(valorSalvo)}"
                            placeholder="${escaparHTML(campo.placeholder || "Informe os detalhes")}"
                            data-campo-profissao="${escaparHTML(campo.nome)}"
                        >
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function coletarCamposProfissao() {
    const dados = {};

    $$("[data-campo-profissao]").forEach(campo => {
        dados[campo.dataset.campoProfissao] = campo.value;
    });

    return dados;
}


/* =========================================================
   5. LINHAS DE SERVIÇO
========================================================= */

function renderizarListaServicos(servicos = []) {
    const lista = porId("lista-servicos");
    if (!lista) return;

    lista.innerHTML = "";

    servicos.forEach(servico => criarLinhaServico(servico));
}

function criarLinhaServico(dados = {}) {
    const lista = porId("lista-servicos");
    if (!lista) return;

    const indice = lista.children.length + 1;
    const profissao = PROFISSOES[profissaoAtual];
    const unidadeInicial = dados.unidade || profissao.unidadePadrao;

    const artigo = document.createElement("article");
    artigo.className = "item-servico";

    artigo.innerHTML = `
        <div class="cabecalho-item-servico">
            <h3>Serviço ${indice}</h3>
            <button type="button" class="botao-remover-servico" data-remover-servico>
                Remover
            </button>
        </div>

        <div class="campos-servico">
            <div class="grupo-campo campo-completo">
                <label>Qual serviço será realizado?</label>
                <input
                    type="text"
                    data-servico="descricao"
                    list="sugestoes-${gerarId()}"
                    placeholder="Descreva o serviço"
                    value="${escaparHTML(dados.descricao || "")}"
                    required
                >
                <datalist id="sugestoes-${gerarId()}">
                    ${profissao.sugestoes.map(item =>
                        `<option value="${escaparHTML(item)}"></option>`
                    ).join("")}
                </datalist>
            </div>

            <div class="grupo-campo">
                <label>Quantidade</label>
                <input
                    type="number"
                    data-servico="quantidade"
                    min="0.01"
                    step="0.01"
                    value="${escaparHTML(dados.quantidade ?? 1)}"
                    required
                >
            </div>

            <div class="grupo-campo">
                <label>Unidade de cobrança</label>
                <select data-servico="unidade">
                    ${profissao.unidades.map(unidade => `
                        <option value="${escaparHTML(unidade)}"
                            ${unidadeInicial === unidade ? "selected" : ""}>
                            ${escaparHTML(unidade)}
                        </option>
                    `).join("")}
                </select>
            </div>

            <div class="grupo-campo">
                <label>Preço cobrado por unidade (R$)</label>
                <input
                    type="number"
                    data-servico="preco"
                    min="0"
                    step="0.01"
                    value="${escaparHTML(dados.preco ?? 0)}"
                    placeholder="Ex.: 45,00"
                    required
                >
                <small>Informe o preço que você cobra por m², ponto, hora, diária ou serviço.</small>
            </div>

            <div class="grupo-campo">
                <label>Custo interno deste serviço (R$)</label>
                <input
                    type="number"
                    data-servico="custo"
                    min="0"
                    step="0.01"
                    value="${escaparHTML(dados.custo ?? 0)}"
                    placeholder="Opcional — somente para seu controle"
                >
                <small>Não aparece no orçamento enviado ao cliente.</small>
            </div>
        </div>

        <div class="resumo-item-servico">
            <span>Total cobrado por este serviço</span>
            <strong data-servico="total">R$ 0,00</strong>
        </div>
    `;

    lista.appendChild(artigo);

    // Garante que o campo de sugestões e o datalist tenham o mesmo ID.
    const inputDescricao = $('[data-servico="descricao"]', artigo);
    const datalist = $("datalist", artigo);
    if (inputDescricao && datalist) {
        const id = `sugestoes-${gerarId()}`;
        inputDescricao.setAttribute("list", id);
        datalist.id = id;
    }

    artigo.addEventListener("input", atualizarResumo);
    artigo.addEventListener("change", atualizarResumo);

    const botaoRemover = $("[data-remover-servico]", artigo);
    botaoRemover.addEventListener("click", () => {
        artigo.remove();
        renumerarItens("lista-servicos", "Serviço");
        atualizarResumo();
    });

    atualizarResumo();
}

function adicionarServico(dados = {}) {
    criarLinhaServico(dados);
}

function coletarServicos() {
    return $$(".item-servico", porId("lista-servicos") || document).map(item => ({
        descricao: valorDeInput(item, '[data-servico="descricao"]'),
        quantidade: Math.max(0, numero(valorDeInput(item, '[data-servico="quantidade"]'))),
        unidade: valorDeInput(item, '[data-servico="unidade"]'),
        preco: Math.max(0, numero(valorDeInput(item, '[data-servico="preco"]'))),
        custo: Math.max(0, numero(valorDeInput(item, '[data-servico="custo"]')))
    }));
}


/* =========================================================
   6. LINHAS DE MATERIAIS
========================================================= */

function renderizarListaMateriais(materiais = []) {
    const lista = porId("lista-materiais");
    if (!lista) return;

    lista.innerHTML = "";
    materiais.forEach(material => criarLinhaMaterial(material));
}

function criarLinhaMaterial(dados = {}) {
    const lista = porId("lista-materiais");
    if (!lista) return;

    const artigo = document.createElement("article");
    artigo.className = "item-material";

    artigo.innerHTML = `
        <div class="cabecalho-item-servico">
            <h3>Material ${lista.children.length + 1}</h3>
            <button type="button" class="botao-remover-servico" data-remover-material>
                Remover
            </button>
        </div>

        <div class="campos-servico">
            <div class="grupo-campo campo-completo">
                <label>Nome do material</label>
                <input
                    type="text"
                    data-material="nome"
                    value="${escaparHTML(dados.nome || "")}"
                    placeholder="Ex.: tinta, fio, tubo, cimento..."
                    required
                >
            </div>

            <div class="grupo-campo">
                <label>Quantidade necessária</label>
                <input
                    type="number"
                    data-material="quantidade"
                    min="0"
                    step="0.01"
                    value="${escaparHTML(dados.quantidade ?? 1)}"
                    required
                >
            </div>

            <div class="grupo-campo">
                <label>Unidade</label>
                <select data-material="unidade">
                    ${["unidade", "saco", "lata", "galão", "caixa", "rolo", "metro", "m²", "kg", "litro", "barra", "peça", "pacote"].map(unidade => `
                        <option value="${escaparHTML(unidade)}"
                            ${(dados.unidade || "unidade") === unidade ? "selected" : ""}>
                            ${escaparHTML(unidade)}
                        </option>
                    `).join("")}
                </select>
            </div>

            <div class="grupo-campo">
                <label>Como você compra este material?</label>
                <select data-material="tipo-preco">
                    <option value="unidade" ${(dados.tipoPreco || "unidade") === "unidade" ? "selected" : ""}>
                        Por unidade
                    </option>
                    <option value="embalagem" ${dados.tipoPreco === "embalagem" ? "selected" : ""}>
                        Por pacote, caixa, lata ou embalagem
                    </option>
                </select>
            </div>

            <div class="grupo-campo" data-grupo-embalagem>
                <label>Quantas unidades vêm na embalagem?</label>
                <input
                    type="number"
                    data-material="quantidade-embalagem"
                    min="0.01"
                    step="0.01"
                    value="${escaparHTML(dados.quantidadeEmbalagem ?? 1)}"
                >
            </div>

            <div class="grupo-campo">
                <label>Preço de compra (R$)</label>
                <input
                    type="number"
                    data-material="preco"
                    min="0"
                    step="0.01"
                    value="${escaparHTML(dados.preco ?? 0)}"
                    required
                >
                <small>Use o preço por unidade ou o preço da embalagem, conforme selecionado.</small>
            </div>
        </div>

        <div class="resumo-item-servico">
            <span>Custo estimado deste material</span>
            <strong data-material="total">R$ 0,00</strong>
        </div>
    `;

    lista.appendChild(artigo);

    const seletorTipo = $('[data-material="tipo-preco"]', artigo);
    const campoEmbalagem = $('[data-material="quantidade-embalagem"]', artigo);
    const grupoEmbalagem = $("[data-grupo-embalagem]", artigo);

    function atualizarCampoEmbalagem() {
        const usaEmbalagem = seletorTipo.value === "embalagem";
        mostrar(grupoEmbalagem, usaEmbalagem);
        campoEmbalagem.required = usaEmbalagem;
        atualizarResumo();
    }

    seletorTipo.addEventListener("change", atualizarCampoEmbalagem);
    artigo.addEventListener("input", atualizarResumo);
    artigo.addEventListener("change", atualizarResumo);

    $("[data-remover-material]", artigo).addEventListener("click", () => {
        artigo.remove();
        renumerarItens("lista-materiais", "Material");
        atualizarResumo();
    });

    atualizarCampoEmbalagem();
}

function adicionarMaterial(dados = {}) {
    criarLinhaMaterial(dados);
}

function coletarMateriais() {
    return $$(".item-material", porId("lista-materiais") || document).map(item => ({
        nome: valorDeInput(item, '[data-material="nome"]'),
        quantidade: Math.max(0, numero(valorDeInput(item, '[data-material="quantidade"]'))),
        unidade: valorDeInput(item, '[data-material="unidade"]'),
        tipoPreco: valorDeInput(item, '[data-material="tipo-preco"]', "unidade"),
        quantidadeEmbalagem: Math.max(
            0.01,
            numero(valorDeInput(item, '[data-material="quantidade-embalagem"]', "1"))
        ),
        preco: Math.max(0, numero(valorDeInput(item, '[data-material="preco"]')))
    }));
}

function calcularCustoMaterial(material) {
    if (material.tipoPreco === "embalagem") {
        const unidades = Math.max(0.01, numero(material.quantidadeEmbalagem));
        const pacotes = Math.ceil(material.quantidade / unidades);
        return pacotes * material.preco;
    }

    return material.quantidade * material.preco;
}


/* =========================================================
   7. CÁLCULO DO ORÇAMENTO
========================================================= */

function calcularTotais(dados) {
    const totalServicos = dados.servicos.reduce(
        (soma, servico) => soma + servico.quantidade * servico.preco,
        0
    );

    const custoInternoServicos = dados.servicos.reduce(
        (soma, servico) => soma + servico.quantidade * servico.custo,
        0
    );

    const totalMateriais = dados.materiais.reduce(
        (soma, material) => soma + calcularCustoMaterial(material),
        0
    );

    const quantidadeAjudantes = Math.max(0, numero(dados.quantidadeAjudantes));
    const valorDiariaAjudante = Math.max(0, numero(dados.valorDiariaAjudante));
    const dias = Math.max(1, numero(dados.diasServico) || 1);

    const custoAjudantes = quantidadeAjudantes * valorDiariaAjudante * dias;
    const transporte = Math.max(0, numero(dados.custoTransporte)) * dias;
    const despesasExtras = Math.max(0, numero(dados.despesasExtras));

    const responsabilidadeMateriais = dados.responsavelMateriais || "profissional";

    // Materiais só entram no valor cobrado do cliente quando
    // o profissional assume a compra e o fornecimento.
    const materiaisIncluidos = responsabilidadeMateriais === "profissional"
        ? totalMateriais
        : 0;

    const totalCliente = totalServicos + materiaisIncluidos + custoAjudantes + transporte + despesasExtras;

    const custoInterno = custoInternoServicos + totalMateriais + custoAjudantes + transporte + despesasExtras;
    const resultadoEstimado = totalCliente - custoInterno;

    return {
        totalServicos,
        custoInternoServicos,
        totalMateriais,
        materiaisIncluidos,
        custoAjudantes,
        transporte,
        despesasExtras,
        totalCliente,
        custoInterno,
        resultadoEstimado,
        dias
    };
}

function coletarDadosFormulario() {
    return {
        area: profissaoAtual,
        profissao: PROFISSOES[profissaoAtual]?.nome || "Outros serviços",
        nomeCliente: textoSeguro(valorCampo("nome-cliente")),
        telefoneCliente: textoSeguro(valorCampo("telefone-cliente")),
        endereco: textoSeguro(valorCampo("endereco-servico")),
        titulo: textoSeguro(valorCampo("titulo-servico")),
        descricao: textoSeguro(valorCampo("descricao-servico")),
        observacoes: textoSeguro(valorCampo("observacoes-orcamento")),
        validade: Math.max(0, numero(valorCampo("validade-orcamento", "7"))),
        diasServico: Math.max(1, numero(valorCampo("dias-servico", "1")) || 1),
        quantidadeAjudantes: Math.max(0, numero(valorCampo("quantidade-ajudantes"))),
        valorDiariaAjudante: Math.max(0, numero(valorCampo("valor-diaria-ajudante"))),
        custoTransporte: Math.max(0, numero(valorCampo("custo-transporte"))),
        despesasExtras: Math.max(0, numero(valorCampo("despesas-extras"))),
        responsavelMateriais: lerRadio("responsavel-materiais", "profissional"),
        detalhesProfissao: coletarCamposProfissao(),
        servicos: coletarServicos(),
        materiais: coletarMateriais()
    };
}

function atualizarResumo() {
    const dados = coletarDadosFormulario();
    const totais = calcularTotais(dados);

    $$(".item-servico").forEach(item => {
        const quantidade = numero(valorDeInput(item, '[data-servico="quantidade"]'));
        const preco = numero(valorDeInput(item, '[data-servico="preco"]'));
        definirTextoDentro(item, '[data-servico="total"]', dinheiro(quantidade * preco));
    });

    $$(".item-material").forEach(item => {
        const material = {
            quantidade: numero(valorDeInput(item, '[data-material="quantidade"]')),
            tipoPreco: valorDeInput(item, '[data-material="tipo-preco"]', "unidade"),
            quantidadeEmbalagem: numero(valorDeInput(item, '[data-material="quantidade-embalagem"]', "1")),
            preco: numero(valorDeInput(item, '[data-material="preco"]'))
        };

        definirTextoDentro(item, '[data-material="total"]', dinheiro(calcularCustoMaterial(material)));
    });

    definirTexto("total-materiais", dinheiro(totais.totalMateriais));
    definirTexto("total-mao-obra", dinheiro(totais.totalServicos));
    definirTexto("total-materiais-resumo", dinheiro(totais.materiaisIncluidos));
    definirTexto("total-ajudantes", dinheiro(totais.custoAjudantes));
    definirTexto("total-transporte", dinheiro(totais.transporte));
    definirTexto("total-despesas-extras", dinheiro(totais.despesasExtras));
    definirTexto("valor-lucro", dinheiro(totais.resultadoEstimado));
    definirTexto("valor-total-orcamento", dinheiro(totais.totalCliente));

    const avisoMateriais = porId("aviso-responsabilidade-materiais");
    if (avisoMateriais) {
        avisoMateriais.textContent = dados.responsavelMateriais === "cliente"
            ? "O cliente comprará os materiais. A estimativa aparece separadamente e não entra no total cobrado pelo profissional."
            : "O profissional fornecerá os materiais. O valor estimado dos materiais está incluído no total do orçamento.";
    }

    const explicacao = porId("explicacao-total");
    if (explicacao) {
        explicacao.textContent = dados.responsavelMateriais === "cliente"
            ? "Total do profissional. Os materiais serão comprados e pagos pelo cliente à parte."
            : "Total do serviço, incluindo os materiais fornecidos pelo profissional.";
    }
}

function definirTextoDentro(raiz, seletor, texto) {
    const elemento = $(seletor, raiz);
    if (elemento) elemento.textContent = texto;
}


/* =========================================================
   8. VALIDAÇÃO DO FORMULÁRIO
========================================================= */

function validarFormulario(dados) {
    if (!dados.nomeCliente) {
        return "Informe o nome do cliente.";
    }

    if (!dados.titulo) {
        return "Informe o título do orçamento ou do serviço.";
    }

    if (!dados.servicos.length) {
        return "Adicione pelo menos um serviço ao orçamento.";
    }

    for (let i = 0; i < dados.servicos.length; i++) {
        const servico = dados.servicos[i];

        if (!servico.descricao) {
            return `Informe a descrição do serviço ${i + 1}.`;
        }

        if (servico.quantidade <= 0) {
            return `A quantidade do serviço ${i + 1} deve ser maior que zero.`;
        }

        if (servico.preco < 0) {
            return `O preço do serviço ${i + 1} não pode ser negativo.`;
        }
    }

    for (let i = 0; i < dados.materiais.length; i++) {
        const material = dados.materiais[i];

        if (!material.nome) {
            return `Informe o nome do material ${i + 1}.`;
        }

        if (material.quantidade < 0) {
            return `A quantidade do material ${i + 1} não pode ser negativa.`;
        }

        if (material.tipoPreco === "embalagem" && material.quantidadeEmbalagem <= 0) {
            return `Informe quantas unidades vêm na embalagem do material ${i + 1}.`;
        }
    }

    return "";
}

function exibirMensagemFormulario(mensagem, tipo = "sucesso") {
    const elemento = porId("mensagem-formulario");
    if (!elemento) {
        alert(mensagem);
        return;
    }

    elemento.textContent = mensagem;
    elemento.classList.remove("sucesso", "erro");
    elemento.classList.add(tipo);
}

function limparMensagemFormulario() {
    const elemento = porId("mensagem-formulario");
    if (!elemento) return;

    elemento.textContent = "";
    elemento.classList.remove("sucesso", "erro");
}


/* =========================================================
   9. SALVAR E EDITAR ORÇAMENTO COMPLETO
========================================================= */

function salvarOrcamento(evento) {
    if (evento) evento.preventDefault();

    const dados = coletarDadosFormulario();
    const erro = validarFormulario(dados);

    if (erro) {
        exibirMensagemFormulario(erro, "erro");
        return;
    }

    const agora = new Date().toISOString();
    const totais = calcularTotais(dados);

    if (modoEdicao && idEmEdicao) {
        const indice = orcamentos.findIndex(item => item.id === idEmEdicao);

        if (indice !== -1) {
            const antigo = orcamentos[indice];

            orcamentos[indice] = {
                ...antigo,
                ...dados,
                totais,
                atualizadoEm: agora
            };
        } else {
            exibirMensagemFormulario("Não foi possível localizar o orçamento que você está editando.", "erro");
            return;
        }
    } else {
        const novo = {
            id: gerarId(),
            numero: gerarNumeroOrcamento(),
            ...dados,
            totais,
            status: "pendente",
            criadoEm: agora,
            atualizadoEm: agora
        };

        orcamentos.unshift(novo);
        idEmEdicao = novo.id;
        modoEdicao = true;
    }

    if (!salvarOrcamentos()) return;

    atualizarDashboard();
    renderizarHistorico();

    exibirMensagemFormulario(
        "Orçamento salvo com sucesso neste navegador. Você pode continuar editando, imprimir ou compartilhar com o cliente.",
        "sucesso"
    );
}

function gerarNumeroOrcamento() {
    const data = new Date();
    const ano = data.getFullYear();
    const sequencia = String(orcamentos.length + 1).padStart(4, "0");
    return `OF-${ano}-${sequencia}`;
}

function editarOrcamento(id) {
    const orcamento = orcamentos.find(item => item.id === id);
    if (!orcamento) {
        alert("Não foi possível encontrar este orçamento.");
        return;
    }

    profissaoAtual = PROFISSOES[orcamento.area] ? orcamento.area : "outros";
    modoEdicao = true;
    idEmEdicao = orcamento.id;

    mostrarSecao("formulario");

    const formulario = porId("formulario-container");
    if (formulario) formulario.reset();

    definirCampo("orcamento-id", orcamento.id);
    definirCampo("area-servico", profissaoAtual);
    definirCampo("nome-cliente", orcamento.nomeCliente);
    definirCampo("telefone-cliente", orcamento.telefoneCliente);
    definirCampo("endereco-servico", orcamento.endereco);
    definirCampo("titulo-servico", orcamento.titulo);
    definirCampo("descricao-servico", orcamento.descricao);
    definirCampo("observacoes-orcamento", orcamento.observacoes);
    definirCampo("validade-orcamento", orcamento.validade);
    definirCampo("dias-servico", orcamento.diasServico);
    definirCampo("quantidade-ajudantes", orcamento.quantidadeAjudantes);
    definirCampo("valor-diaria-ajudante", orcamento.valorDiariaAjudante);
    definirCampo("custo-transporte", orcamento.custoTransporte);
    definirCampo("despesas-extras", orcamento.despesasExtras);

    definirRadio("responsavel-materiais", orcamento.responsavelMateriais || "profissional");

    renderizarCamposProfissao(orcamento.detalhesProfissao || {});
    renderizarListaServicos(orcamento.servicos || []);
    renderizarListaMateriais(orcamento.materiais || []);

    definirTexto(
        "titulo-formulario",
        `Editar orçamento ${orcamento.numero || ""}`
    );

    limparMensagemFormulario();
    atualizarResumo();
}

function renumerarItens(idLista, prefixo) {
    const lista = porId(idLista);
    if (!lista) return;

    $$(".item-servico, .item-material", lista).forEach((item, indice) => {
        const titulo = $("h3", item);
        if (titulo) titulo.textContent = `${prefixo} ${indice + 1}`;
    });
}


/* =========================================================
   10. ORÇAMENTO PARA O CLIENTE — SEM CUSTOS INTERNOS
========================================================= */

function textoOrcamentoCliente(orcamento) {
    const totais = calcularTotais(orcamento);
    const validade = Number(orcamento.validade) || 7;

    const linhas = [
        `*ORÇAMENTO ${orcamento.numero || ""} — ORÇAFÁCIL*`,
        "",
        `*Profissional:* ${orcamento.profissao || PROFISSOES[orcamento.area]?.nome || "Prestador de serviços"}`,
        `*Cliente:* ${orcamento.nomeCliente}`,
        orcamento.telefoneCliente ? `*Telefone:* ${orcamento.telefoneCliente}` : "",
        orcamento.endereco ? `*Local do serviço:* ${orcamento.endereco}` : "",
        "",
        `*Serviço:* ${orcamento.titulo}`,
        orcamento.descricao ? `*Descrição:* ${orcamento.descricao}` : "",
        "",
        "*SERVIÇOS E VALORES*",
        ...orcamento.servicos.map(servico =>
            `• ${servico.descricao}: ${servico.quantidade} ${servico.unidade} × ${dinheiro(servico.preco)} = ${dinheiro(servico.quantidade * servico.preco)}`
        ),
        "",
        `*Prazo estimado:* ${totais.dias} dia(s)`,
        `*Materiais:* ${orcamento.responsavelMateriais === "cliente" ? "Compra por conta do cliente" : "Fornecidos pelo profissional"}`,
        orcamento.responsavelMateriais === "cliente"
            ? `*Estimativa de materiais (à parte):* ${dinheiro(totais.totalMateriais)}`
            : `*Materiais incluídos:* ${dinheiro(totais.totalMateriais)}`,
        "",
        `*TOTAL DO ORÇAMENTO: ${dinheiro(totais.totalCliente)}*`,
        "",
        `*Validade:* ${validade} dia(s)`,
        orcamento.observacoes ? `*Observações:* ${orcamento.observacoes}` : "",
        "",
        "Obrigado pela oportunidade! Fico à disposição para esclarecer dúvidas e combinar o início do serviço."
    ];

    // Não adicionamos custo interno, resultado estimado ou preço de compra.
    return linhas.filter(Boolean).join("\n");
}

function obterOrcamentoAtual() {
    if (idEmEdicao) {
        const salvo = orcamentos.find(item => item.id === idEmEdicao);
        if (salvo) return salvo;
    }

    const dados = coletarDadosFormulario();
    return {
        numero: "RASCUNHO",
        ...dados,
        totais: calcularTotais(dados)
    };
}

function compartilharWhatsApp(id = null) {
    let orcamento;

    if (id) {
        orcamento = orcamentos.find(item => item.id === id);
    } else {
        orcamento = obterOrcamentoAtual();
    }

    if (!orcamento) {
        alert("Salve o orçamento antes de compartilhá-lo.");
        return;
    }

    const erro = validarFormulario(orcamento);
    if (erro) {
        alert(`Antes de compartilhar, corrija: ${erro}`);
        return;
    }

    const mensagem = textoOrcamentoCliente(orcamento);
    const telefone = validarTelefoneWhatsApp(orcamento.telefoneCliente);

    const url = telefone
        ? `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`
        : `https://wa.me/?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}


/* =========================================================
   11. IMPRIMIR OU SALVAR EM PDF
========================================================= */

function htmlOrcamentoParaImpressao(orcamento) {
    const totais = calcularTotais(orcamento);
    const materiaisDoCliente = orcamento.responsavelMateriais === "cliente";

    const linhasServicos = orcamento.servicos.map(servico => `
        <tr>
            <td>${escaparHTML(servico.descricao)}</td>
            <td>${escaparHTML(servico.quantidade)} ${escaparHTML(servico.unidade)}</td>
            <td>${dinheiro(servico.preco)}</td>
            <td>${dinheiro(servico.quantidade * servico.preco)}</td>
        </tr>
    `).join("");

    return `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Orçamento ${escaparHTML(orcamento.numero || "")}</title>
            <style>
                * { box-sizing: border-box; }
                body {
                    margin: 0;
                    padding: 36px;
                    color: #1d2939;
                    background: #fff;
                    font: 14px/1.6 Arial, sans-serif;
                }
                .folha { max-width: 850px; margin: auto; }
                .topo {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    padding-bottom: 22px;
                    border-bottom: 3px solid #536fe8;
                }
                h1 { margin: 0; font-size: 27px; }
                h2 { margin: 28px 0 12px; font-size: 17px; }
                p { margin: 6px 0; }
                .subtitulo { color: #667085; }
                .caixa {
                    margin-top: 20px;
                    padding: 18px;
                    border: 1px solid #d9e0eb;
                    border-radius: 8px;
                }
                .grade {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 14px 25px;
                }
                .rotulo {
                    display: block;
                    color: #667085;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: .4px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 12px;
                }
                th, td {
                    padding: 11px 8px;
                    border-bottom: 1px solid #e4e7ec;
                    text-align: left;
                    vertical-align: top;
                }
                th { background: #f2f5fb; font-size: 11px; }
                td { font-size: 12px; }
                .totais {
                    max-width: 390px;
                    margin: 22px 0 0 auto;
                }
                .linha-total {
                    display: flex;
                    justify-content: space-between;
                    gap: 15px;
                    padding: 9px 0;
                    border-bottom: 1px solid #e4e7ec;
                }
                .destaque {
                    margin-top: 8px;
                    padding: 16px;
                    background: #eef2ff;
                    border-radius: 8px;
                    font-size: 20px;
                    font-weight: bold;
                }
                .nota { color: #667085; font-size: 11px; }
                .rodape {
                    margin-top: 38px;
                    padding-top: 15px;
                    border-top: 1px solid #d9e0eb;
                    color: #667085;
                    font-size: 11px;
                }
                @media print {
                    body { padding: 0; }
                    .folha { max-width: none; }
                    .nao-imprimir { display: none; }
                }
            </style>
        </head>
        <body>
            <main class="folha">
                <header class="topo">
                    <div>
                        <h1>Orçamento de serviço</h1>
                        <p class="subtitulo">${escaparHTML(orcamento.profissao || "Prestação de serviços")}</p>
                    </div>
                    <div>
                        <strong>${escaparHTML(orcamento.numero || "Rascunho")}</strong>
                        <p>Data: ${dataLocal(orcamento.criadoEm || new Date())}</p>
                    </div>
                </header>

                <section class="caixa">
                    <div class="grade">
                        <div>
                            <span class="rotulo">Cliente</span>
                            <strong>${escaparHTML(orcamento.nomeCliente)}</strong>
                        </div>
                        <div>
                            <span class="rotulo">Telefone</span>
                            <strong>${escaparHTML(orcamento.telefoneCliente || "Não informado")}</strong>
                        </div>
                        <div>
                            <span class="rotulo">Local do serviço</span>
                            <strong>${escaparHTML(orcamento.endereco || "A combinar")}</strong>
                        </div>
                        <div>
                            <span class="rotulo">Validade</span>
                            <strong>${escaparHTML(orcamento.validade || 7)} dia(s)</strong>
                        </div>
                    </div>
                </section>

                <h2>${escaparHTML(orcamento.titulo)}</h2>
                ${orcamento.descricao ? `<p>${escaparHTML(orcamento.descricao)}</p>` : ""}

                <h2>Serviços incluídos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Preço unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>${linhasServicos}</tbody>
                </table>

                <h2>Materiais</h2>
                <p>${materiaisDoCliente
                    ? "Os materiais serão comprados e pagos pelo cliente. A estimativa abaixo não está incluída no total do profissional."
                    : "Os materiais necessários estão sob responsabilidade do profissional e foram incluídos no total do orçamento."}
                </p>

                ${orcamento.materiais.length ? `
                    <table>
                        <thead>
                            <tr>
                                <th>Material</th>
                                <th>Quantidade prevista</th>
                                <th>Estimativa</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${orcamento.materiais.map(material => `
                                <tr>
                                    <td>${escaparHTML(material.nome)}</td>
                                    <td>${escaparHTML(material.quantidade)} ${escaparHTML(material.unidade)}</td>
                                    <td>${dinheiro(calcularCustoMaterial(material))}</td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                ` : "<p>Nenhum material discriminado.</p>"}

                <section class="totais">
                    <div class="linha-total">
                        <span>Serviços</span>
                        <strong>${dinheiro(totais.totalServicos)}</strong>
                    </div>
                    ${!materiaisDoCliente ? `
                        <div class="linha-total">
                            <span>Materiais</span>
                            <strong>${dinheiro(totais.totalMateriais)}</strong>
                        </div>
                    ` : ""}
                    <div class="linha-total">
                        <span>Prazo estimado</span>
                        <strong>${totais.dias} dia(s)</strong>
                    </div>
                    <div class="destaque">
                        TOTAL: ${dinheiro(totais.totalCliente)}
                    </div>
                </section>

                ${orcamento.observacoes ? `
                    <section>
                        <h2>Observações e condições</h2>
                        <p>${escaparHTML(orcamento.observacoes)}</p>
                    </section>
                ` : ""}

                <footer class="rodape">
                    <p>Este orçamento é válido por ${escaparHTML(orcamento.validade || 7)} dia(s), a partir da data de emissão.</p>
                    <p>Valores e prazo sujeitos à confirmação das condições do local e do escopo descrito.</p>
                    <p>Documento gerado pelo OrçaFácil.</p>
                </footer>

                <div class="nao-imprimir" style="margin-top:24px">
                    <button onclick="window.print()">Imprimir / Salvar em PDF</button>
                </div>
            </main>
            <script>
                window.addEventListener("load", () => {
                    setTimeout(() => window.print(), 300);
                });
            <\/script>
        </body>
        </html>
    `;
}

function imprimirOrcamento(id = null) {
    const orcamento = id
        ? orcamentos.find(item => item.id === id)
        : obterOrcamentoAtual();

    if (!orcamento) {
        alert("Não foi possível localizar o orçamento.");
        return;
    }

    const erro = validarFormulario(orcamento);
    if (erro) {
        alert(`Antes de imprimir, corrija: ${erro}`);
        return;
    }

    const janela = window.open("", "_blank");

    if (!janela) {
        alert("O navegador bloqueou a janela de impressão. Permita pop-ups para este site e tente novamente.");
        return;
    }

    janela.document.open();
    janela.document.write(htmlOrcamentoParaImpressao(orcamento));
    janela.document.close();
}


/* =========================================================
   12. HISTÓRICO E STATUS
========================================================= */

function atualizarDashboard() {
    definirTexto("total-orcamentos", orcamentos.length);
    definirTexto("orcamentos-pendentes", orcamentos.filter(o => o.status === "pendente").length);
    definirTexto("orcamentos-aprovados", orcamentos.filter(o => o.status === "aprovado").length);
    definirTexto("orcamentos-rejeitados", orcamentos.filter(o => o.status === "rejeitado").length);
}

function renderizarHistorico() {
    const lista = porId("lista-orcamentos");
    const vazio = porId("estado-vazio");

    if (!lista) {
        atualizarDashboard();
        return;
    }

    const busca = textoSeguro(valorCampo("buscar-orcamento")).toLowerCase();
    const status = valorCampo("filtro-status", "todos");

    const filtrados = orcamentos.filter(orcamento => {
        const correspondeBusca = [
            orcamento.numero,
            orcamento.nomeCliente,
            orcamento.titulo,
            orcamento.profissao,
            orcamento.telefoneCliente
        ].some(valor => String(valor || "").toLowerCase().includes(busca));

        const correspondeStatus = status === "todos" || orcamento.status === status;
        return correspondeBusca && correspondeStatus;
    });

    lista.innerHTML = "";

    mostrar(vazio, filtrados.length === 0);

    if (vazio && filtrados.length === 0) {
        const titulo = $("h2", vazio);
        const paragrafo = $("p", vazio);

        if (titulo) titulo.textContent = orcamentos.length
            ? "Nenhum orçamento encontrado"
            : "Você ainda não tem orçamentos";

        if (paragrafo) paragrafo.textContent = orcamentos.length
            ? "Tente mudar a busca ou o filtro de situação."
            : "Crie seu primeiro orçamento para começar a organizar seus serviços.";
    }

    filtrados.forEach(orcamento => {
        const totais = calcularTotais(orcamento);
        const status = orcamento.status || "pendente";

        const cartao = document.createElement("article");
        cartao.className = "cartao-orcamento";

        cartao.innerHTML = `
            <div class="cabecalho-orcamento">
                <div>
                    <h3>${escaparHTML(orcamento.titulo || "Orçamento sem título")}</h3>
                    <p>${escaparHTML(orcamento.numero || "")} · ${escaparHTML(orcamento.profissao || "")}</p>
                    <p>Cliente: ${escaparHTML(orcamento.nomeCliente || "Não informado")}</p>
                </div>
                <span class="etiqueta-status status-${escaparHTML(status)}">
                    ${status === "aprovado" ? "Aprovado" : status === "rejeitado" ? "Recusado" : "Pendente"}
                </span>
            </div>

            <div class="detalhes-orcamento">
                <div class="linha-detalhe-orcamento">
                    <span>Data</span>
                    <strong>${dataLocal(orcamento.criadoEm || orcamento.atualizadoEm || new Date())}</strong>
                </div>
                <div class="linha-detalhe-orcamento">
                    <span>Serviços</span>
                    <strong>${(orcamento.servicos || []).length}</strong>
                </div>
                <div class="linha-detalhe-orcamento">
                    <span>Total cobrado</span>
                    <strong class="valor-orcamento">${dinheiro(totais.totalCliente)}</strong>
                </div>
            </div>

            <div class="acoes-orcamento">
                <button type="button" data-acao="editar">Editar detalhado</button>
                <button type="button" data-acao="imprimir">PDF / Imprimir</button>
                <button type="button" data-acao="whatsapp">WhatsApp</button>
                <button type="button" data-acao="aprovar" class="acao-aprovar">Aprovar</button>
                <button type="button" data-acao="rejeitar" class="acao-rejeitar">Recusar</button>
                <button type="button" data-acao="excluir">Excluir</button>
            </div>
        `;

        $("[data-acao='editar']", cartao).addEventListener("click", () => editarOrcamento(orcamento.id));
        $("[data-acao='imprimir']", cartao).addEventListener("click", () => imprimirOrcamento(orcamento.id));
        $("[data-acao='whatsapp']", cartao).addEventListener("click", () => compartilharWhatsApp(orcamento.id));
        $("[data-acao='aprovar']", cartao).addEventListener("click", () => alterarStatus(orcamento.id, "aprovado"));
        $("[data-acao='rejeitar']", cartao).addEventListener("click", () => alterarStatus(orcamento.id, "rejeitado"));
        $("[data-acao='excluir']", cartao).addEventListener("click", () => excluirOrcamento(orcamento.id));

        lista.appendChild(cartao);
    });

    atualizarDashboard();
}

function alterarStatus(id, status) {
    const orcamento = orcamentos.find(item => item.id === id);
    if (!orcamento) return;

    const rotulo = status === "aprovado" ? "aprovar" : "marcar como recusado";
    if (!confirm(`Deseja ${rotulo} o orçamento ${orcamento.numero || ""}?`)) return;

    orcamento.status = status;
    orcamento.atualizadoEm = new Date().toISOString();

    if (!salvarOrcamentos()) return;

    renderizarHistorico();
    atualizarDashboard();
}

function excluirOrcamento(id) {
    const orcamento = orcamentos.find(item => item.id === id);
    if (!orcamento) return;

    if (!confirm(`Excluir definitivamente o orçamento ${orcamento.numero || ""} de ${orcamento.nomeCliente || "cliente"}? Exporte um backup antes, se quiser guardar uma cópia.`)) {
        return;
    }

    orcamentos = orcamentos.filter(item => item.id !== id);

    if (!salvarOrcamentos()) return;

    if (idEmEdicao === id) {
        idEmEdicao = null;
        modoEdicao = false;
    }

    renderizarHistorico();
    atualizarDashboard();
}


/* =========================================================
   13. BACKUP — EXPORTAR E IMPORTAR
========================================================= */

function exportarBackup() {
    const backup = {
        aplicativo: "OrçaFácil",
        versao: CONFIG.versao,
        exportadoEm: new Date().toISOString(),
        orcamentos
    };

    const arquivo = new Blob(
        [JSON.stringify(backup, null, 2)],
        { type: "application/json;charset=utf-8" }
    );

    const url = URL.createObjectURL(arquivo);
    const link = document.createElement("a");

    link.href = url;
    link.download = `orcafacil-backup-${new Date().toISOString().slice(0, 10)}.json`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);

    const mensagem = porId("mensagem-backup");
    if (mensagem) {
        mensagem.textContent = "Backup exportado. Guarde o arquivo em um local seguro.";
        mensagem.className = "mensagem-formulario sucesso";
    }
}

function importarBackup(evento) {
    const arquivo = evento.target.files?.[0];
    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = () => {
        try {
            const conteudo = JSON.parse(leitor.result);
            const dados = Array.isArray(conteudo) ? conteudo : conteudo.orcamentos;

            if (!Array.isArray(dados)) {
                throw new Error("Formato de backup inválido.");
            }

            const validos = dados.filter(item =>
                item &&
                typeof item === "object" &&
                typeof item.nomeCliente === "string" &&
                Array.isArray(item.servicos) &&
                Array.isArray(item.materiais)
            );

            if (validos.length !== dados.length) {
                throw new Error("O arquivo contém registros inválidos.");
            }

            const substituir = confirm(
                "OK: substituir os orçamentos atuais pelo backup.\n" +
                "Cancelar: mesclar com os orçamentos atuais."
            );

            if (substituir) {
                orcamentos = validos;
            } else {
                const idsExistentes = new Set(orcamentos.map(item => item.id));

                const novos = validos.map(item => {
                    if (!item.id || idsExistentes.has(item.id)) {
                        return { ...item, id: gerarId() };
                    }
                    return item;
                });

                orcamentos = [...novos, ...orcamentos];
            }

            if (!salvarOrcamentos()) return;

            renderizarHistorico();
            atualizarDashboard();

            const mensagem = porId("mensagem-backup");
            if (mensagem) {
                mensagem.textContent = `${validos.length} orçamento(s) importado(s) com sucesso.`;
                mensagem.className = "mensagem-formulario sucesso";
            }
        } catch (erro) {
            console.error(erro);

            const mensagem = porId("mensagem-backup");
            if (mensagem) {
                mensagem.textContent = `Não foi possível importar o backup: ${erro.message}`;
                mensagem.className = "mensagem-formulario erro";
            } else {
                alert(`Não foi possível importar o backup: ${erro.message}`);
            }
        } finally {
            evento.target.value = "";
        }
    };

    leitor.onerror = () => {
        alert("O navegador não conseguiu ler o arquivo selecionado.");
        evento.target.value = "";
    };

    leitor.readAsText(arquivo);
}


/* =========================================================
   14. EVENTOS E INICIALIZAÇÃO
========================================================= */

function conectarEventos() {
    const formulario = porId("formulario-container");

    if (formulario) {
        formulario.addEventListener("submit", salvarOrcamento);
        formulario.addEventListener("input", atualizarResumo);
        formulario.addEventListener("change", atualizarResumo);
    }

    const adicionarServicoBtn = porId("btn-adicionar-servico");
    if (adicionarServicoBtn) {
        adicionarServicoBtn.addEventListener("click", () => adicionarServico());
    }

    const adicionarMaterialBtn = porId("btn-adicionar-material");
    if (adicionarMaterialBtn) {
        adicionarMaterialBtn.addEventListener("click", () => adicionarMaterial());
    }

    const cancelarBtn = porId("btn-cancelar-orcamento");
    if (cancelarBtn) {
        cancelarBtn.addEventListener("click", () => {
            if (confirm("Deseja sair do formulário? As alterações ainda não salvas serão perdidas.")) {
                abrirInicio();
            }
        });
    }

    const busca = porId("buscar-orcamento");
    if (busca) busca.addEventListener("input", renderizarHistorico);

    const filtro = porId("filtro-status");
    if (filtro) filtro.addEventListener("change", renderizarHistorico);

    const exportar = porId("btn-exportar-backup");
    if (exportar) exportar.addEventListener("click", exportarBackup);

    const importar = porId("btn-importar-backup");
    if (importar) {
        importar.addEventListener("click", () => {
            const arquivo = porId("arquivo-backup");
            if (arquivo) arquivo.click();
        });
    }

    const arquivoBackup = porId("arquivo-backup");
    if (arquivoBackup) arquivoBackup.addEventListener("change", importarBackup);

    $$('input[name="responsavel-materiais"]').forEach(radio => {
        radio.addEventListener("change", atualizarResumo);
    });

    const botaoWhatsApp = porId("btn-compartilhar-whatsapp");
    if (botaoWhatsApp) {
        botaoWhatsApp.addEventListener("click", () => compartilharWhatsApp());
    }

    const botaoImprimir = porId("btn-imprimir-orcamento");
    if (botaoImprimir) {
        botaoImprimir.addEventListener("click", () => imprimirOrcamento());
    }

    // Se o HTML tiver botões de navegação com data-secao,
    // eles também serão conectados.
    $$("[data-secao]").forEach(botao => {
        botao.addEventListener("click", () => {
            const destino = botao.dataset.secao;

            if (["inicio", "formulario", "historico", "backup"].includes(destino)) {
                mostrarSecao(destino);
            }
        });
    });
}

function inicializarOrcaFacil() {
    conectarNavegacao();
    conectarEventos();
    atualizarDashboard();
    renderizarHistorico();
    atualizarResumo();

    mostrarSecao("inicio");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarOrcaFacil);
} else {
    inicializarOrcaFacil();
}
