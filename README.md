# 👟 Projeto Front-end Digital Store

Este é um projeto de uma **loja virtual** (E-commerce) desenvolvido como parte do curso de **Full Stack**. O objetivo principal é aplicar conceitos avançados de React, componentização e design responsivo.

🔗 **Repositório:** `Projeto-Front-end-digital-store`

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca base para a construção da SPA (Single Page Application).
- **PrimeReact**: Componentes de UI de alta performance (Galleria, Sidebar, Dropdown).
- **PrimeFlex**: Framework CSS utilitário para layouts flexíveis e responsivos.
- **React Router Dom**: Gestão de rotas para navegação entre páginas.
- **PrimeIcons**: Conjunto de ícones vetoriais.

---

## 📂 Estrutura do Projeto

Baseado na arquitetura do sistema, o projeto está organizado da seguinte forma:

- **`src/Componentes/`**: Componentes reutilizáveis como `ProductCard`, `FilterCheckbox`, `Header`, `Footer` e a `Gallery` do banner.
- **`src/Pages/`**: Páginas principais da aplicação:
  - `HomePage`: Vitrine com banners e coleções em destaque.
  - `ProductListingPage`: Listagem de produtos com filtros avançados.
  - `ProductViewPage`: Detalhes específicos de um produto selecionado.
- **`src/data/`**: Arquivos de dados (como `produtos.js`) que simulam uma API para alimentar a loja.
- **`public/`**: Ativos estáticos como SVGs e imagens de produtos.

---

## ✨ Funcionalidades Implementadas

### 🛒 Loja Virtual Completa

- **Navegação entre Páginas**: Sistema de rotas para transição suave entre home, listagem e visualização de produtos.
- **Galeria Infinita**: Banner principal com transição automática e contínua, mesmo após interação do usuário.
- **Filtros Inteligentes**: Filtragem por marca, categoria, gênero e estado do produto.
- **Ordenação Dinâmica**: Ordenação por preço (maior/menor) e relevância.

### 📱 Experiência Mobile (Mobile First)

- **Sidebar de Filtros**: Menu lateral retrátil (off-canvas) que respeita a altura do Header para melhor usabilidade em dispositivos móveis.
- **Layout Responsivo**: Grid que se adapta automaticamente de 4 colunas no desktop para 2 colunas no celular.

---

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/Projeto-Front-end-digital-store.git](https://github.com/TalysonRoberto/Projeto-Front-end-digital-store.git)
   ```
2. instale as dependências:
   ```
   npm install
   ```
3. Certifique-se de ter as bibliotecas do Prime instaladas:
   ```
   npm install primereact primeicons primeflex
   ```
4. Inicie o servidor de desenvolvimento::
   ```
   npm run dev
   ```
