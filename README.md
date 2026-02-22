# Banco API Tests

## 📌 Visão Geral do Projeto

**Banco API Tests** é um projeto de automação de testes para APIs REST,
criado para validar os endpoints da aplicação `banco-api` https://github.com/welitaluisa/banco-api.

O projeto tem como foco validar fluxos de autenticação, regras de negócio e cenários de integração utilizando testes automatizados com JavaScript e bibliotecas modernas de testes.

Este repositório demonstra boas práticas em:

-   Automação de APIs REST
-   Organização e estruturação de testes
-   Geração de relatórios em HTML
-   Gerenciamento de variáveis de ambiente
-   Arquitetura de testes escalável e manutenível

------------------------------------------------------------------------

## 🎯 Objetivo

O principal objetivo deste projeto é:

-   Automatizar cenários de validação da API REST
-   Garantir a confiabilidade do backend `banco-api`
-   Validar autenticação, transferências, login e regras de negócio
-   Gerar relatórios estruturados em HTML
-   Servir como portfólio e referência em automação de testes de API

------------------------------------------------------------------------

## 🧰 Stack Utilizada

-   **Node.js**
-   **JavaScript**
-   **Mocha** -- Framework de testes
-   **Supertest** -- Biblioteca para requisições HTTP e testes de API
-   **Chai** -- Biblioteca de asserções
-   **Mochawesome** -- Gerador de relatórios em HTML
-   **dotenv** -- Gerenciamento de variáveis de ambiente

------------------------------------------------------------------------

## 📂 Estrutura de Diretórios

    banco-api-tests/
    │
    ├── test/                     # Testes organizados por funcionalidades
    │   ├── login.test.js
    │   ├── transferencias.test.js
    │   
    │
    ├── mochawesome-report/ # Diretório gerado automaticamente com o relatório HTML dos testes
    │
    ├── .env                       # Arquivo para configuração da variável BASE_URL
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Configuração de Ambiente

Este projeto requer a criação manual de um arquivo `.env` na raiz do
projeto.

### 🔹 Exemplo do arquivo `.env`

    BASE_URL=http://localhost:3000

-   `BASE_URL` → URL base onde a aplicação `banco-api` está em execução.

⚠️ O arquivo `.env` não é versionado no repositório e deve ser criado
pelo usuário antes da execução dos testes.

------------------------------------------------------------------------

## 🚀 Instalação

Clone o repositório:

    git clone https://github.com/welitaluisa/banco-api-tests.git
    cd banco-api-tests

Instale as dependências:

    npm install

------------------------------------------------------------------------

## ▶️ Execução dos Testes

Para executar os testes:

    npm test

Este comando executa:

    mocha ./test/**/*.test.js --timeout 20000 --reporter mochawesome

------------------------------------------------------------------------

## 📊 Relatórios de Teste

Após a execução:

-   Será gerado o diretório `mochawesome/`
-   Dentro dele haverá um arquivo `.html` com o relatório da execução

Exemplo:

    mochawesome/mochawesome.html

O relatório contém:

-   Resumo da execução
-   Testes aprovados e reprovados
-   Tempo de execução
-   Detalhamento dos erros

------------------------------------------------------------------------

## 📚 Documentação das Dependências

-   Mocha: https://mochajs.org/
-   Supertest: https://github.com/ladjs/supertest
-   Chai: https://www.chaijs.com/
-   Mochawesome: https://github.com/adamgruber/mochawesome
-   dotenv: https://github.com/motdotla/dotenv
-   Node.js: https://nodejs.org/

------------------------------------------------------------------------

## 🧪 Boas Práticas Aplicadas

-   Organização clara dos testes
-   Cenários isolados
-   Uso de variáveis de ambiente
-   Geração de relatórios automatizados
-   Execução reprodutível

------------------------------------------------------------------------

## 👩‍💻 Autora

Welita Luisa\
QA Engineer \| Especialista em Automação de Testes de API
