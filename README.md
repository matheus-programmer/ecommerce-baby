# 🍼 E-commerce de Produtos para Bebês - Frontend

Este repositório contém o código-fonte do frontend do e-commerce de produtos para bebês. O projeto foi desenvolvido com **Next.js** e está hospedado no **Vercel**.

## 🚀 Tecnologias Utilizadas
- **Next.js** - Framework React para aplicações web.
- **Axios** - Para consumo da API do backend (Back4App).
- **Bootstrap** - Para estilização moderna e responsiva.
- **React Hooks** - Gerenciamento de estado e efeitos.

## 📂 Estrutura do Projeto
```
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

```

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ecommerce-bebes-frontend.git
   cd ecommerce-bebes-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` e adicione:
   ```env
   NEXT_PUBLIC_API_URL=https://parseapi.back4app.com/functions
   NEXT_PUBLIC_PARSE_APP_ID=SUA_APPLICATION_ID
   NEXT_PUBLIC_PARSE_API_KEY=SUA_REST_API_KEY
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   O site estará disponível em **http://localhost:3000**.

## 🚀 Deploy no Vercel
1. Instale o CLI do Vercel (se ainda não tiver):
   ```bash
   npm install -g vercel
   ```
2. Faça login no Vercel:
   ```bash
   vercel login
   ```
3. Execute o comando de deploy:
   ```bash
   vercel
   ```
4. O Vercel fornecerá uma URL para acessar o site publicado.

## 📌 Funcionalidades
- [x] Listagem de produtos
- [x] Página de detalhes do produto
- [x] Adicionar ao carrinho
- [ ] Finalizar compra (em desenvolvimento)

## ✨ Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Minha nova feature'`).
4. Envie um push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e melhorá-lo!

---
**Desenvolvido com ❤️ para facilitar a vida dos papais e mamães!**

