// ===========================
// CONFIGURAÇÃO DO SITE
// ===========================

// Dados dos produtos - EDITE AQUI PARA ALTERAR ESTOQUE E PRODUTOS
const produtos = [
    {
        id: 1,
        nome: 'Conta Premium',
        preco: 25.00,
        estoque: 10,
        descricao: 'Acesso completo aos recursos premium'
    },
    {
        id: 2,
        nome: 'Conta VIP',
        preco: 40.00,
        estoque: 5,
        descricao: 'Acesso VIP com benefícios exclusivos'
    }
];

// Configuração de contato
const whatsappNumber = '5599999999999'; // Número do WhatsApp
const pixKey = 'CHAVE_PIX_AQUI'; // Chave Pix

// Variável para armazenar o produto selecionado
let produtoSelecionado = null;

// ===========================
// FUNÇÕES DE NAVEGAÇÃO
// ===========================

/**
 * Mostra a tela de vitrine de produtos
 */
function mostrarTelaLoja() {
    document.getElementById('storeScreen').classList.add('active');
    document.getElementById('paymentScreen').classList.remove('active');
    window.scrollTo(0, 0);
}

/**
 * Mostra a tela de pagamento
 */
function mostrarTelaPagamento(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    
    if (!produto) {
        mostrarNotificacao('Produto não encontrado!', 'error');
        return;
    }

    if (produto.estoque <= 0) {
        mostrarNotificacao('Este produto está esgotado!', 'error');
        return;
    }

    // Armazena o produto selecionado
    produtoSelecionado = produto;

    // Atualiza as informações na tela de pagamento
    document.getElementById('paymentProductName').textContent = produto.nome;
    document.getElementById('paymentProductPrice').textContent = `R$ ${produto.preco.toFixed(2)}`;

    // Muda para a tela de pagamento
    document.getElementById('storeScreen').classList.remove('active');
    document.getElementById('paymentScreen').classList.add('active');
    window.scrollTo(0, 0);
}

/**
 * Volta para a tela da loja
 */
function voltarParaLoja() {
    produtoSelecionado = null;
    mostrarTelaLoja();
}

// ===========================
// FUNÇÕES PRINCIPAIS
// ===========================

/**
 * Renderiza os produtos na página
 */
function renderizarProdutos() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    produtos.forEach(produto => {
        const card = criarCartaoProduto(produto);
        productsGrid.appendChild(card);
    });
}

/**
 * Cria um elemento de cartão de produto
 */
function criarCartaoProduto(produto) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const temEstoque = produto.estoque > 0;
    const statusEstoque = temEstoque ? `${produto.estoque} unidades` : 'ESGOTADO';
    const classEstoque = temEstoque ? '' : 'empty';

    card.innerHTML = `
        <div class="product-header">
            <h3 class="product-name">${produto.nome}</h3>
        </div>
        <div class="product-body">
            <div class="product-price">R$ ${produto.preco.toFixed(2)}</div>
            <div class="product-stock ${classEstoque}">
                <span class="stock-indicator ${classEstoque}"></span>
                <span>${statusEstoque}</span>
            </div>
            <div class="product-actions">
                <button 
                    class="buy-btn" 
                    onclick="mostrarTelaPagamento(${produto.id})"
                    ${temEstoque ? '' : 'disabled'}
                >
                    ${temEstoque ? '🛒 Comprar' : '❌ Esgotado'}
                </button>
            </div>
        </div>
    `;

    return card;
}

/**
 * Abre o WhatsApp após confirmação de pagamento
 */
function abrirWhatsAppAposPagamento() {
    if (!produtoSelecionado) {
        mostrarNotificacao('Erro: Produto não selecionado', 'error');
        return;
    }

    // Mensagem pré-preenchida
    const mensagem = `Olá! Já realizei o pagamento Pix de R$ ${produtoSelecionado.preco.toFixed(2)} pela ${produtoSelecionado.nome}. 😊`;
    const mensagemCodificada = encodeURIComponent(mensagem);

    // URL do WhatsApp
    const urlWhatsApp = `https://wa.me/${whatsappNumber}?text=${mensagemCodificada}`;

    // Abre em nova aba
    window.open(urlWhatsApp, '_blank');

    mostrarNotificacao('Abrindo WhatsApp...', 'success');
}

/**
 * Copia a chave Pix para a área de transferência
 */
function copiarChavePix() {
    const pixKeyElement = document.getElementById('pixKey');
    const chave = pixKeyElement.textContent;

    navigator.clipboard.writeText(chave).then(() => {
        mostrarNotificacao('✅ Chave Pix copiada!', 'success');
    }).catch(() => {
        mostrarNotificacao('❌ Erro ao copiar chave', 'error');
    });
}

/**
 * Mostra uma notificação na tela
 */
function mostrarNotificacao(mensagem, tipo = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${tipo}`;
    notification.textContent = mensagem;

    document.body.appendChild(notification);

    // Remove a notificação após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Atualiza a chave Pix na página
 */
function atualizarChavePix() {
    const pixKeyElement = document.getElementById('pixKey');
    pixKeyElement.textContent = pixKey;
}

/**
 * Inicializa o site
 */
function inicializar() {
    renderizarProdutos();
    atualizarChavePix();
    mostrarTelaLoja();
}

// ===========================
// INICIALIZAÇÃO
// ===========================

// Executa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', inicializar);

// ===========================
// INSTRUÇÕES DE USO
// ===========================

/*
COMO EDITAR O SITE:

1. ADICIONAR/EDITAR PRODUTOS:
   - Edite o array 'produtos' no início deste arquivo
   - Adicione novos objetos com: id, nome, preco, estoque, descricao
   - Exemplo:
     {
         id: 3,
         nome: 'Conta Gold',
         preco: 35.00,
         estoque: 8,
         descricao: 'Acesso Gold com benefícios especiais'
     }

2. ALTERAR ESTOQUE:
   - Mude o valor de 'estoque' no array de produtos
   - Quando estoque chegar a 0, o botão fica desabilitado e mostra "ESGOTADO"

3. ALTERAR NÚMERO DO WHATSAPP:
   - Edite a variável 'whatsappNumber'
   - Formato: 55 + DDD + número (sem espaços ou hífens)

4. ALTERAR CHAVE PIX:
   - Edite a variável 'pixKey'
   - Pode ser CPF, CNPJ, email ou chave aleatória

5. ADICIONAR QR CODE PIX:
   - Abra o arquivo index.html
   - Procure por: <div class="qr-placeholder">
   - Substitua por: <img src="caminho-da-imagem-qr-code.png" alt="QR Code Pix">
   - Coloque a imagem do QR Code na pasta do projeto

FLUXO DO SITE:
1. Usuário vê a vitrine com todos os produtos
2. Clica em "Comprar" em um produto
3. Abre a tela de pagamento apenas daquele produto
4. Mostra QR Code grande e chave Pix
5. Após pagar, clica "Já paguei"
6. Abre WhatsApp com mensagem pronta para enviar comprovante

*/
