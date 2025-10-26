# Banco Web Tests

Este repositório contém testes end-to-end para a aplicação web do banco, implementados com Cypress.

## Visão geral

Testes automatizados para fluxos chave da aplicação (login, transferência, etc.). Projetado para ser simples de rodar localmente e integrável em CI.

## Requisitos

-   Node.js (recomendado >= 14)
-   npm (ou yarn)
-   Dependências do projeto (instaladas via `npm install`)

O projeto já inclui o Cypress como dependência (`cypress` na `package.json`).

## Instalação

No diretório do projeto:

```bash
npm install
```

## Scripts úteis

O `package.json` expõe os seguintes scripts:

-   `npm run test` — executa os testes em modo headless (equivalente a `cypress run`).
-   `npm run cy:headed` — executa os testes em modo headed (janela do navegador visível).
-   `npm run cy:open` — abre o Cypress Test Runner (modo interativo).

Exemplos:

```bash
# rodar todos os testes em modo headless
npm run test

# abrir o runner interativo
npm run cy:open

# executar um spec específico (exemplo)
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Estrutura do repositório

Principais pastas e arquivos:

-   `cypress/` — pasta principal do Cypress
    -   `e2e/` — specs (ex.: `login.cy.js`, `transferencia.cy.js`)
    -   `fixtures/` — dados de teste (`credenciais.json`, ...)
    -   `support/` — comandos customizados e configurações
    -   `reports/` — relatórios gerados (se configurado)
-   `cypress.config.js` — configuração do Cypress
-   `package.json` — scripts e dependências

Exemplo de arquivos presentes:

-   `cypress/e2e/login.cy.js`
-   `cypress/e2e/transferencia.cy.js`
-   `cypress/support/commands.js`

## Repositórios necessários

Para executar os testes localmente esta suíte depende da aplicação web e da API rodando. Você precisa ter os seguintes repositórios/clones disponíveis e em execução:

-   Aplicação frontend (web): https://github.com/juliodelimas/banco-web
-   API backend: https://github.com/juliodelimas/banco-api

Geralmente o fluxo é:

1. Clonar e executar a API (`banco-api`) seguindo as instruções do respectivo repositório.
2. Clonar e executar a aplicação web (`banco-web`) também seguindo as instruções do repositório.
3. Com a API e a web rodando (endpoints e UI acessíveis), execute os testes deste repositório.

## Relatórios

O projeto possui `cypress-mochawesome-reporter` como `devDependency`. Se quiser gerar relatórios personalizados, verifique a configuração do reporter e adicione a flag/option necessária ao executar `cypress run`.

Alguns relatórios podem aparecer em `cypress/reports/` ou `cypress/downloads/` dependendo da configuração.

## Custom Commands usados

Os testes utilizam comandos customizados (Cypress.Commands) definidos em `cypress/support/commands`. Segue a lista dos comandos personalizados e uma descrição curta do que fazem:

-   `fazerLoginComCredenciaisValidas()` — preenche o formulário de login com credenciais válidas (do fixture `credenciais.json`) e submete o formulário.
-   `fazerLoginComCredenciaisInvalidas()` — preenche o formulário de login com credenciais inválidas e submete.
-   `realizarTransferencia(contaOrigem, contaDestino, valor)` — seleciona contas de origem/destino (usando um combobox customizado), insere o valor e aciona a transferência.
-   `verificarMensagemToast(mensagem)` — verifica se um toast/apresentação de mensagem com o texto esperado está visível.
-   `selecionarElementoCombobox(labelDoCampo, opcao)` — helper que abre um combobox associado a um label e seleciona a opção desejada.

Esses comandos estão implementados em:

-   `cypress/support/commands/login.js`
-   `cypress/support/commands/transferencia.js`
-   `cypress/support/commands/common.js`

Use esses comandos diretamente nos specs para tornar os testes mais legíveis e reutilizáveis.

## Contribuição

1. Fork o repositório
2. Crie uma branch com a sua feature: `git checkout -b feat/minha-feature`
3. Faça commits pequenos e descritivos
4. Abra um Pull Request para a branch `main`

Por favor, adicione testes para mudanças de comportamento e atualize o README se necessário.

## Reportar problemas

Abra uma issue em: https://github.com/Portella10/banco-web-tests/issues

## Licença

Licenciado sob ISC — ver `package.json`.

---
