# App

GymPass style app.

## RFs (Requisitos funcionais)

- [] Deve ser possível se cadastrar;
- [] Deve ser possível se autenticar;
- [] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível obter o numero de check-ins realizado pelo usuário logado;
- [] Deve ser possível o usuário obter seu histórico de check-ins;
- [] Deve ser possível o usuário buscar academias próximas;
- [] Deve ser possível o usuário buscar academias pelo nome;
- [] Deve ser possível o usuário realizar o check-in em uma academia;
- [] Deve ser possível validar o check-in de um usuário;
- [] Deve ser possível cadastrar uma academia;'

## RNs(Regras de negócios)

- [] O usuário nao pode se cadastrar com um e-mail duplicado;
- [] O usuário nao pode fazer o check-ins no mesmo dia;
- [] O usuário nao pode fazer o check-ins se nao estiver proximo (100m) a academia;
- [] O check-in so pode ser validado ate 20 minutos apos criado;
- [] O check-in so pode ser validado por administradores;
- [] A academia so pode ser cadastrada por administradores;

## RNFs (Requisitos nao-funcionais)

- [] A senha do usuário precisa estar criptografia;
- [] Os dados da aplicação precisam estar persistidos em um banco PostgreSql;
- [] Todas listas de dados precisa estar paginadas com 20 itens por pagina;
- [] O usuário deve ser identificado por um JWT (JSON Web Token)
