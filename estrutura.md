📂 ecommerce-bebes/
┣ 📂 backend/ (Código do Back4App - Cloud Code)
┃ ┣ 📜 cloud/main.js (Funções da API)
┃ ┣ 📜 config.json (Configuração do Parse)
┃ ┗ 📜 .parse.local (Chaves locais)
┣ 📂 frontend/ (Next.js)
┃ ┣ 📂 pages/
┃ ┃ ┣ 📜 index.js (Página inicial)
┃ ┃ ┣ 📜 produto/[id].js (Página de detalhes do produto)
┃ ┃ ┗ 📜 carrinho.js (Página do carrinho)
┃ ┣ 📂 components/
┃ ┃ ┗ 📜 ProductCard.js (Componente de produto)
┃ ┣ 📂 styles/
┃ ┃ ┗ 📜 globals.css (Estilos globais)
┃ ┗ 📜 package.json (Dependências do projeto)

/ecommerce-baby
│── /components              # Componentes reutilizáveis
│   ├── Footer.js            # Rodapé
│   ├── Navbar.js            # Menu de navegação
│   ├── ProductCard.js       # Card de exibição de produto
│
│── /context                 # Contexto global (carrinho, usuário, etc.)
│   ├── CartContext.js       # Contexto para o carrinho de compras
│
│── /pages                   # Páginas principais do site
│   ├── index.js             # Página inicial (Home)
│   ├── produtos.js          # Listagem de produtos
│   ├── carrinho.js          # Página do carrinho de compras
│   ├── login.js             # Tela de login
│   ├── cadastro.js          # Tela de cadastro de usuário
│   ├── contato.js           # Página de contato via WhatsApp
│   ├── checkout.js          # Página de finalização de compra
│   ├── /produto             # Pasta para detalhes de produtos dinâmicos
│   │   ├── [id].js          # Página de detalhe do produto
│   ├── _app.js              # Configuração global do Next.js
│   ├── _document.js         # Configurações globais do HTML (SEO, fontes, etc.)
│
│── /public                  # Arquivos estáticos (imagens, ícones, etc.)
│   ├── logo.png             # Logo do site
│   ├── favicon.ico          # Ícone do site
│
│── /services                # Configuração de API e integração com Back4App
│   ├── api.js               # Funções para comunicação com o banco de dados
│
│── /styles                  # Arquivos de estilização
│   ├── globals.css          # Estilos globais (Tailwind)
│
│── /utils                   # Funções auxiliares
│   ├── formatPrice.js       # Formatação de preços
│
│── .gitignore               # Arquivos e pastas ignorados pelo Git
│── package.json             # Dependências do projeto
│── tailwind.config.js       # Configuração do Tailwind CSS
│── postcss.config.js        # Configuração do PostCSS
│── README.md                # Documentação do projeto
