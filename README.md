# Projeto Final de Desenvolvimento Web - Residência TIC Serratec

### Missão Secreta: Plataforma de E-commerce com Autenticação

Projeto final desenvolvido para a Residência em TIC pelo programa Serratec. Este projeto é uma plataforma de e-commerce que inclui funcionalidades de autenticação, gerenciamento de produtos e carrinho de compras, além de informações sobre os desenvolvedores.

### Demonstração
Acesse a aplicação: [Missão Secreta](https://missao-secreta-20242.vercel.app/)

---

![Logo da Loja](../../assets/logo1.png)


## 📑 Tabela de Conteúdos
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuidores](#contribuidores)
- [Licença](#licença)

---

## 📖 Sobre o Projeto
Este projeto foi desenvolvido como parte do programa de Residência em TIC do Serratec, utilizando React para frontend e conectado a uma API desenvolvida durante a disciplina de Desenvolvimento de API RESTful. A aplicação oferece uma experiência completa de e-commerce, incluindo cadastro de usuários, autenticação, exibição de produtos, carrinho de compras com gerenciamento de itens e informações sobre os desenvolvedores.

---

## ✨ Funcionalidades

### Tela de Login
- **Autenticação**: Formulário para login com e-mail e senha.
- **Validações**: Confirmação de e-mail com "@" e senha não vazia.
- **Sessão Segura**: Opção de log-out para encerrar a sessão.

### Tela Inicial (Home)
- **Exibição de Produtos**: Lista de produtos com imagem, nome, descrição e preço.
- **Adição ao Carrinho**: Botão para adicionar itens ao carrinho.

### Tela de Cadastro
- **Formulário de Cadastro**: Campos para nome, e-mail, CPF, telefone, endereço, senha e confirmação de senha.
- **Validações**: CPF com 11 dígitos, e-mail válido e confirmação de senha.

### Carrinho de Compras (Pedido)
- **Gerenciamento de Itens**: Controle global do estado do carrinho com Context API.
- **Resumo do Pedido**: Total de itens e valor da compra.
- **Notificação por E-mail**: Opção para envio de um relatório de compra personalizado.

### Sobre os Desenvolvedores
- **Perfil dos Desenvolvedores**: Exibe foto, qualidades e áreas de especialidade da equipe.

### Navegação
- **Barra de Navegação e Rodapé**: Navbar e footer consistentes em todas as páginas.

---

## ⚙️ Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn para gerenciar dependências

---

## ⚙️ Configuração
Configure as variáveis de ambiente, incluindo a URL da API para conectar o frontend ao backend RESTful desenvolvido na disciplina de “Desenvolvimento de API RESTful”.

---

## 🗂️ Estrutura do Projeto
O projeto está organizado conforme os conceitos aprendidos, com componentes funcionais React, cada tela sendo um componente separado, e pastas dedicadas para cada parte do projeto:

* components: Componentes reutilizáveis (botões, formulários, cards, etc.)
* pages: Páginas principais (Login, Home, Cadastro, Carrinho)
* contexts: Contextos globais para gerenciamento de estado, incluindo o carrinho.
* services: Serviços para comunicação com a API.
* styles: Estilos CSS organizados com CSS Modules e um componente com Styled-Components.

---

## 🚀 Como Usar

1. Login: Acesse a tela de login e autentique-se com seu e-mail e senha.
2. Navegação: Use a barra de navegação para acessar as diferentes páginas.
3. Cadastro: Caso não tenha uma conta, acesse a tela de cadastro e preencha o formulário.
4. Compra de Produtos: Na página inicial, adicione produtos ao carrinho e acesse o resumo de sua compra.
5. Finalização de Pedido: Receba o resumo do pedido por e-mail, com um código de chave personalizado.

---

## 🛠️ Tecnologias Utilizadas

* Frontend: React, CSS Modules, Styled-Components, Context API, React Router
* Backend: API RESTful (conectado a partir de outra aplicação)

---

## 👥 Contribuidores

   [![LinkedIn](https://img.shields.io/badge/AndressaJandre-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andressa-jandre-289b472b9/) 
   [![LinkedIn](https://img.shields.io/badge/JoãoGabriel-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](http://www.linkedin.com/in/joao-gabriel-tavares-siqueira-5b1479332) 
   [![LinkedIn](https://img.shields.io/badge/LuizFernando-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-fernando-francedino-chagas-5592291b5/) 


   [![LinkedIn](https://img.shields.io/badge/MiltonRodrigues-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/miltonrdmf/) 
   [![LinkedIn](https://img.shields.io/badge/TiagoVentura-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tiago-ventura-4a5571234/)
   [![LinkedIn](https://img.shields.io/badge/RomuloLourenço-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/romulo-louren%C3%A7o-201422219/)


