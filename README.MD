# qa.automationexercise-web.webdriverio

Projeto de automação de testes E2E para o site [automationexercise.com](https://automationexercise.com) utilizando WebdriverIO.

---

## 🛠️ Tecnologias

- [WebdriverIO v9](https://webdriver.io/)
- [Mocha](https://mochajs.org/)
- [Faker.js](https://fakerjs.dev/)
- [Allure Reports](https://docs.qameta.io/allure/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## 📋 Pré-requisitos

Antes de instalar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) v18 ou superior
- [Google Chrome](https://www.google.com/chrome/) (versão mais recente)
- [Git](https://git-scm.com/)

---

## 📁 Estrutura do Projeto
```
qa.automationexercise-web.webdriverio/
│
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline do GitHub Actions
│
├── test/
│   ├── pageobjects/            # Page Objects de cada página do site
│   │   ├── page.js             # BasePage com métodos compartilhados
│   │   ├── home.page.js        # Página inicial
│   │   ├── cadastroPage.js     # Páginas de cadastro
│   │   └── account.page.js    # Páginas pós cadastro e deleção
│   │
│   ├── specs/                  # Arquivos de teste
│   │   └── registro.spec.js    # Testes de registro de usuário
│   │
│   └── helpers/                # Funções auxiliares
│       └── userData.js         # Geração de dados e utilitários
│
├── .gitignore
├── package.json
├── README.md
└── wdio.conf.js                # Configuração do WebdriverIO
```

---

## ⚙️ Instalação

Clone o repositório e instale as dependências:
```bash
git clone https://github.com/camilalmoraes/qa.automationexercise-web.webdriverio.git
cd qa.automationexercise-web.webdriverio
npm install
```

---

## ▶️ Execução dos Testes

### Todos os testes com interface
```bash
npm run wdio
```

### Todos os testes em modo headless
```bash
npm run wdio:headless
```

### Suíte de registro com interface
```bash
npm run wdio:registro
```

### Suíte de registro em modo headless
```bash
npm run wdio:registro:headless
```

---

## 📊 Relatório Allure

Após rodar os testes, gere e abra o relatório:
```bash
npm run allure:report
```

Ou separadamente:
```bash
npm run allure:generate   # Gera o relatório
npm run allure:open       # Abre no navegador
```

---

## 🚀 Pipeline CI/CD

O projeto possui uma pipeline configurada no GitHub Actions que executa automaticamente os testes em modo headless a cada `push` ou `pull request` na branch `main`.

O relatório Allure é gerado e disponibilizado como artefato para download na aba **Actions** do repositório.

---

## 🧪 Casos de Teste

| Suite | Caso de Teste | Status |
|---|---|---|
| Registro de Usuário | Deve registrar e deletar um usuário com sucesso | ✅ |