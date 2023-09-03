# technical_test_coopercarga / Back-End

## Introdução
- O projeto foi construído principalmente utilizando [Nest.js](https://docs.nestjs.com/) e [Prisma](https://www.prisma.io/docs/getting-started), e caso você tenha dúvidas sobre essas tecnologias, pode consultar suas documentações oficiais para obter informações detalhadas e orientações específicas
  - Ducumentação - [Nest.js](https://docs.nestjs.com/)
  - Ducumentação - [Prisma](https://www.prisma.io/docs/getting-started)

## Deploy da Api 
- Para facilitar o teste da aplicação, foi realizado o seu deploy no Render, eliminando assim a necessidade de inicializar a aplicação localmente.
- Teste da Api com a Ducumentação Swagger - https://technical-test-coopercarga.onrender.com/api/docs#/
- BaseUrl: https://technical-test-coopercarga.onrender.com
- O banco de dados ja foi populado com os 5 produtos quer estavam no arquivo data.json.
- Foi feito o deploy da API no Render utilizando os seus serviços gratuitos. Portanto, ao realizar uma requisição pela primeira vez, pode demorar de 2 a 3 minutos para a requisição funcionar. Após a requisição funcinar pela primeira vez, a API funciona normalmente.

## Iniciando Localmente
- A aplicação está configurada com o [PostgreSql](https://www.postgresql.org/) e contém alguns scripts do Prisma e migrações iniciais para a criação das primeiras tabelas
  
- Para iniciar a aplicação, basta seguir a sequência de comandos abaixo na raiz do projeto.
  - Instalar as dependências
  - Inicializar as migrações ( para realizar a criação das tabelas no banco de dados ) 
  - Inicializar a aplicação
    
## Intalando Dependencias 
```bash
$ npm install
```

## Inicializando as migrações
```bash
$ npx prisma migrate dev
```

## Inicializando a aplicação
```bash
$ npm run dev
```

## Rotas e Endpoints
- Com a aplicação inicializada, você terá acesso à documentação Swagger da aplicação, onde encontrará informações mais detalhadas sobre o funcionamento dos Endpoints da aplicação.
  - - O Swagger funcinara localmente utilizando a porta 3000 ( http://localhost:3000/api/docs#/ )
  - Ducumentação da aplicação  - [Swagger](http://localhost:3000/api/docs#/)
  
## Aviso 
  - Abaixo, apresentarei uma documentação simplificada das rotas e endpoints disponíveis na aplicação. No entanto, como mencionado anteriormente, é altamente recomendado que você leia a documentação completa no Swagger para obter informações       mais detalhadas e interativas sobre cada endpoint.
    
## **Rotas - /products**

## Endpoints

| Método | Endpoint                         | Responsabilidade                         |
| ------ | -------------------------------- | ---------------------------------------- |
| POST   | /products                        | Cadastrar um novo produto                |
| GET    | /products                        | Listar todos os produtos                 |
| GET    | /products/:id                    | Listar um produto pelo id                |
| PATCH  | /products/:id                    | Atualizar um produto pelo id             |
| Delete | /products/:id                    | Excluir produto pelo id                  |


### Exemplo de envio de JSON para cadastro de produto.
  ```
    {
    	"name": "Camiseta do Brasil",
    	"image_url": "https://imgnike-a.akamaihd.net/1300x1300/0228340L.jpg",
    	"type": "Camiseta",
    	"price": 349.99,
    	"seller": "Nike",
    	"sport": "Futebol",
    	"details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .",
    	"sizes": ["P","M","G","GG"]
    }
  ```

# 

## Configurar um novo banco de dados

- A configuração do [SQLite](https://www.sqlite.org/index.html) foi feita seguindo as recomendações da documentação do [Nest.js](https://docs.nestjs.com/) e [Prisma](https://www.prisma.io/docs/getting-started).
  - para obter informações detalhadas e orientações específicas recomento cunsultar essa seção da documentação [Defina a conexão do banco de dados Nest.js](https://docs.nestjs.com/recipes/prisma)
  - para verificar compatibilidade com bancos de dados recomendo acessar o link acima.

### Defina a conexão do banco de dados
  - Sua conexão com o banco de dados está configurada no datasource do seu schema.prisma, Arquivo que foi definido como [PostgreSql](https://www.postgresql.org/)
    ```
    datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }
      
      generator client {
        provider = "prisma-client-js"
      }
    ```
    
- Basta alterar as informações para o banco de dados desejado, neste exemplo usarei o  [SQLite](https://www.sqlite.org/index.html)
  ```
      datasource db {
        provider = "sqlite"
        url      = file:./dev.db
      }
      
      generator client {
        provider = "prisma-client-js"
      }
  ```
- Agora, abra o arquivo .env e ajuste a DATABASE_URL variável de ambiente com as imformações do seu banco de dados, segue o exemplo abaixo:
  ```
      DATABASE_URL="postgres://Micro:123456@localhost:5432/lista_produtos" //( DATABASE_URL="postgres://<Usuario>:<Senha>@localhost:<Porta>/<Nome do db>") 
  ```

## Tecnologias utilizadas 
- Nest.js
- Prisma
- JavaScript
- TypeScript
- Node.js
- class-transformer
- class-validator
- swagger

## Contatos

- Author - [Rihan Soares](https://portfolio-blue-three-14.vercel.app/#home)
- Email - rihan145@gmail.com
- Linkedin - [Rihan Soares](https://www.linkedin.com/in/rihansoares/)
