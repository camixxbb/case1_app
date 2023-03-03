# case1_app
# Case 1 - Meu App
Contexto:  Precisamos montar um MVP para a empresa testar o seu novo app (MVP é a sigla em inglês para Minimum Viable Product – ou Produto Mínimo Viável). Para isso vamos construir um app simples (front e back-end) que vai implementar as funcionalidades básicas do CRUD.

# Comandos necessários para executar o BackEnd
Iniciar o projeto
```sh
npm init -y
```

Instalar dependências do projeto
```sh
npm install bcrypt cors express sqlite sqlite3
```

Criar o banco de dados
```sh
npm run migrate
npm run seed
npm start
```

# Comandos necessários para executar o FrontEnd
```sh
npm install
npm run dev
```
Caso não reconheça o vite
```sh
npm i vite@latest
```
