# Segundo Desafio - Escribo

Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up), autenticação (sign in) e recuperação de informações do usuário.

para rodar o arquivo basta fazer o <strong>clone do repositório ou download da pasta</strong> e executar o código no terminal com: 
```
npm install
``` 
instalando as dependências e 
```
npm run dev
``` 
para rodar a aplicação.

No arquivo ```server.js```, contém a porta onde o servidor está rodando, caso seja necessário é possível alterá-la, por padrão está rodando na porta https://localhost:3000;

---
Verificação de rotas:

- Foram criadas duas rotas principais de segurança, que podemos checar no arquivo ```app.js```:
```
/auth 
/admin
``` 
A partir dessas rodas é possível realizar o cadastro de novos usuários em: ```/auth/register```, fazer login com os dados em ```/auth/authenticate``` e por fim, checar a validade em ```/admin/users:id``` (colocando o id do usuário);

---

## Techs utilizadas

- Nodejs;
- Express;
- Postman;
- MongoDB;
- bcrypt;
- jsonwebtoken;
- dotenv;
- eslint;

---

