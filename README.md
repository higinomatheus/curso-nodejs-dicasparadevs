# API Node.js com Express e MongoDB

## Introdução

Este projeto é uma API desenvolvida durante o curso de Node.js ministrado por Felipe Rocha no YouTube. O objetivo principal foi criar uma aplicação utilizando o framework Express, integrando-a ao banco de dados MongoDB para realizar operações CRUD em uma entidade de usuários.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework web para Node.js, simplificando a construção de APIs.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, facilitando a interação com o banco de dados.

## Funcionalidades Implementadas

### Criação de Servidor
- Utilização do módulo HTTP para criar um servidor básico.
- Integração do Express para construir uma API mais robusta.

### Conexão com MongoDB
- Configuração e conexão com o banco de dados MongoDB.
- Utilização do Mongoose para criar e manipular modelos de usuários.

### CRUD de Usuários
- Implementação de endpoints para criar, listar, obter detalhes, editar e deletar usuários.

### Variáveis de Ambiente
- Utilização de variáveis de ambiente para armazenar configurações sensíveis, como dados de conexão ao banco de dados.

## Dependências

- **nodemon**: Monitora alterações no código e reinicia automaticamente o servidor durante o desenvolvimento.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **express**: Framework para construção de aplicações web.
- **mongoose**: ODM para MongoDB, facilitando a interação com o banco de dados.

## Como Iniciar o Projeto

1. Clone o repositório.
2. Execute `npm install` para instalar as dependências.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie o servidor com `npm start` (ou `npm run dev` com nodemon para ambiente de desenvolvimento).

Este README serve como uma apresentação concisa do projeto, destacando suas principais características e tecnologias utilizadas. Consulte o código-fonte para detalhes específicos de implementação.
