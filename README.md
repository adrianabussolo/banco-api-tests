# Banco API - Testes Automatizados

Este repositório contém a automação de testes da [Banco API](https://github.com/juliodelimas/banco-api), implementados em **JavaScript** utilizando frameworks e bibliotecas modernas para garantir qualidade, confiabilidade e facilidade de manutenção.

---

## 🎯 Objetivo
Validar os endpoints da API **Banco API** de forma automatizada, cobrindo cenários positivos e negativos, contribuindo que a aplicação funcione conforme o esperado em diferentes fluxos de negócio.

---

## 🛠️ Stack Utilizada
- [Node.js](https://nodejs.org/)  
- [Mocha](https://mochajs.org/) (framework de testes)  
- [Chai](https://www.chaijs.com/) (assertions)  
- [Supertest](https://github.com/visionmedia/supertest) (requisições HTTP)  
- [Dotenv](https://github.com/motdotla/dotenv) (variáveis de ambiente)  
- [Mochawesome](https://github.com/adamgruber/mochawesome) (relatórios em HTML)

---

## 📂 Estrutura de Diretórios
```bash
banco-api-tests/
│── fixtures/              # Massa de dados para os testes
│── helpers/               # Funções auxiliares (ex: autenticação)
│── tests/                 # Testes organizados por funcionalidade
│── .env                   # Variáveis de ambiente (não versionado)
│── package.json           # Dependências e scripts NPM
│── README.md              # Documentação do projeto
```

---

## ⚙️ Arquivo `.env`
É necessário criar um arquivo `.env` na raiz do projeto contendo a variável:

```env
BASE_URL=http://localhost:3000
```

- `BASE_URL`: URL base da API a ser testada.  
(Substitua pela URL real quando em produção.)

---

## 🚀 Executando os Testes

### 1. Clonar o repositório
```bash
git clone https://github.com/juliodelimas/banco-api-tests.git
cd banco-api-tests
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Executar os testes
```bash
npm test
```

### 4. Gerar relatório em HTML
```bash
npx mocha tests --reporter mochawesome
```

O relatório será gerado no diretório `mochawesome-report/`.

---

## 📊 Relatórios
Após a execução com o **Mochawesome**, abra o arquivo HTML para visualizar o relatório completo dos testes:

```bash
./mochawesome-report/mochawesome.html
```

---

## 📚 Documentação das Dependências
- [Mocha](https://mochajs.org/)  
- [Chai](https://www.chaijs.com/)  
- [Supertest](https://github.com/visionmedia/supertest)  
- [Dotenv](https://github.com/motdotla/dotenv)  
- [Mochawesome](https://github.com/adamgruber/mochawesome)

---

## ✨ Autor
Projeto mantido por [Julio de Limas](https://github.com/juliodelimas).
