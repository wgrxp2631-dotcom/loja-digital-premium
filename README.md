# Loja Digital Premium

Um site simples e responsivo para venda de contas digitais com integração WhatsApp e pagamento via Pix.

## 🎯 Características

- ✅ Interface limpa e moderna
- ✅ Totalmente responsivo (funciona em celular, tablet e desktop)
- ✅ Lista de produtos com preço e estoque
- ✅ Status "ESGOTADO" quando estoque chegar a 0
- ✅ Integração com WhatsApp para compras
- ✅ Informações de pagamento via Pix
- ✅ QR Code Pix (espaço reservado para você adicionar)
- ✅ Sem login necessário
- ✅ Sem pagamento automático
- ✅ Estoque manual (você controla)

## 📁 Estrutura de Arquivos

```
loja-digital-premium/
├── index.html          # Arquivo HTML principal
├── styles.css          # Estilos e design
├── script.js           # Lógica e interações
├── README.md           # Este arquivo
└── qr-code.png         # (Opcional) Sua imagem do QR Code Pix
```

## 🚀 Como Usar

### 1. Editar Produtos

Abra o arquivo `script.js` e procure pela seção **CONFIGURAÇÃO DO SITE**. Você verá um array chamado `produtos`:

```javascript
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
```

**Para adicionar um novo produto:**

```javascript
{
    id: 3,
    nome: 'Conta Gold',
    preco: 35.00,
    estoque: 8,
    descricao: 'Acesso Gold com benefícios especiais'
}
```

**Para alterar o estoque:**

Simplesmente mude o valor de `estoque`. Quando chegar a 0, o botão fica desabilitado e mostra "ESGOTADO".

### 2. Configurar WhatsApp

No arquivo `script.js`, procure por:

```javascript
const whatsappNumber = '5599999999999';
```

Altere para seu número de WhatsApp no formato: **55 + DDD + número** (sem espaços ou hífens).

### 3. Configurar Chave Pix

No arquivo `script.js`, procure por:

```javascript
const pixKey = 'CHAVE_PIX_AQUI';
```

Altere para sua chave Pix (CPF, CNPJ, email ou chave aleatória).

### 4. Adicionar QR Code Pix

1. Gere seu QR Code Pix no seu banco
2. Salve a imagem como `qr-code.png` na pasta do projeto
3. Abra o arquivo `index.html`
4. Procure pela seção com `<div class="qr-placeholder">`
5. Substitua por:

```html
<img src="qr-code.png" alt="QR Code Pix">
```

### 5. Testar Localmente

Abra o arquivo `index.html` em seu navegador. O site funcionará perfeitamente sem precisar de um servidor.

## 🌐 Publicar no GitHub Pages

### Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador

### Passos

1. **Crie um repositório no GitHub**
   - Acesse https://github.com/new
   - Nome: `loja-digital-premium`
   - Descrição: "Loja Digital Premium - Venda de Contas"
   - Deixe público
   - Clique em "Create repository"

2. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/loja-digital-premium.git
   cd loja-digital-premium
   ```

3. **Copie os arquivos do projeto**
   - Copie os arquivos (`index.html`, `styles.css`, `script.js`, `README.md`) para a pasta do repositório

4. **Faça o commit e push**
   ```bash
   git add .
   git commit -m "Versão inicial da Loja Digital Premium"
   git push origin main
   ```

5. **Ative o GitHub Pages**
   - Vá para as configurações do repositório
   - Role até "Pages"
   - Em "Source", selecione "main" e pasta "/ (root)"
   - Clique em "Save"
   - Seu site estará disponível em: `https://seu-usuario.github.io/loja-digital-premium`

## 💡 Dicas

- **Backup**: Sempre mantenha uma cópia dos seus arquivos
- **Atualizações**: Você pode editar os arquivos diretamente no GitHub
- **Domínio personalizado**: Se quiser um domínio próprio, configure nas configurações do GitHub Pages
- **Segurança**: Nunca coloque informações sensíveis no código (use variáveis de ambiente se necessário)

## 🎨 Personalizações

### Alterar Cores

Abra o arquivo `styles.css` e procure pela seção **:root** no início:

```css
:root {
    --primary-color: #6366f1;      /* Cor principal */
    --primary-dark: #4f46e5;       /* Cor principal escura */
    --success-color: #10b981;      /* Cor de sucesso */
    --danger-color: #ef4444;       /* Cor de erro */
}
```

### Alterar Nome da Loja

Abra o arquivo `index.html` e procure por:

```html
<h1 class="logo">🛍️ Loja Digital Premium</h1>
```

Altere o texto conforme desejar.

## 📱 Responsividade

O site foi desenvolvido com design responsivo e funciona perfeitamente em:
- 📱 Celulares (320px e acima)
- 📱 Tablets (768px e acima)
- 🖥️ Desktops (1200px e acima)

## ⚠️ Importante

- O site **não processa pagamentos automaticamente**
- Você receberá as solicitações de compra via WhatsApp
- O cliente deve enviar o comprovante do Pix após o pagamento
- Você controla manualmente o estoque editando o arquivo `script.js`

## 📞 Suporte

Se tiver dúvidas sobre como editar o site, consulte os comentários dentro dos arquivos `script.js` e `index.html`.

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

---

**Criado com ❤️ para sua loja digital**
