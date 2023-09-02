# technical_test_coopercarga

## 1. Qual a saída do algoritmo?

- O algoritmo utiliza os conceitos da "Criba de Eratóstenes" para gerar os primeiros 1000 números primos que ele encontrar, então imprimindo-os e formatando a saída em páginas com até 200 números, com 50 linhas e 4 colunas em cada página no formato de strings

## 2. Você julga que este código é limpo? Aponte quais erros o programador cometeu que prejudicaram a qualidade do código. Obs: não existe nenhum bug escondido no código.

- O código utiliza variáveis que não são bem descritivas, repetição desnecessária dessas variáveis, todas as variáveis foram declaradas como "let", mesmo aquelas que não são reatribuídas, podendo ser declaradas como "const". Falta de padronização nas nomenclaturas das variáveis, já que todas foram declaradas como "let" em letras maiúsculas, como se fossem constantes.

- Falta de estruturação do código, já que ele utiliza apenas um método estático para toda a aplicação, que recebe um parâmetro que não é utilizado. O ideal seria dividir a aplicação em métodos com suas próprias responsabilidades.

- Criação de um método construtor e uma instância para poder atribuir valores por parâmetros, como quantidade máxima de números, quantidade de colunas e linhas, assim facilitando a configuração desses valores.

- Falta de comentários no código para melhor compreensão.

## 3. Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira que o código se torne mais limpo, legível e de fácil manutenção.

- O codigo refatorados e encontra no arquivou "main_refactored.js"

## 4. Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código.

- Um middleware é uma função que é executada entre a recepção de uma requisição e a geração de uma resposta de uma rota. São utilizados três parâmetros em um middleware: o request, o response e a próxima função, chamada de next. A função next é chamada para passar o controle para o próximo middleware ou função de lógica na fila de execução. O mesmo middleware pode ser usado em várias rotas, como por exemplo, um middleware de validação de dados pode ser utilizado tanto na rota de criação de usuário quanto na rota de atualização, assim evitando a criação de duas funções para o mesmo serviço.

## 5. Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), quais as vantagens e desvantagens de cada abordagem?

- Vantagens de uma ORM(Object Relational Mapper)

  - melhor produtividade nas criações dos nossos projetos, pois utiliza estruturas mais simples em vez de escrever as queries SQL puras.

  - Codigos mais limpos deixando assim o projeto mais fácil de ser atualizado, mantido e reutilizável.

  - Gerenciar automaticamente relacionamentos complexos entre tabelas, facilitando a criação dessas tabelas e otimizando a produtividade.

  - Almento na segurança ao garantir que as consultas sejam construídas de forma segura.

- Desvantagens de uma ORM(Object Relational Mapper)

  - Problema de desempenho com consultas complexas, pois como as queries são geralmente geradas pelo próprio ORM, nem sempre são as mais otimizadas.

  - Integração e aprendizado, pois antes de sair usando a ferramenta precisamos aprender a integrá-la ao projeto e como ela funciona.

  - Em alguns casos, o ORM pode não mapear perfeitamente objetos em tabelas do banco de dados ou vice-versa, o que pode resultar em inconsistências ou comportamento inesperado.

- Vantagens de um query builder (como o Knex)

  - Maior abstração nas criações das queries, pois utiliza funções em vez dos comandos nativos do SQL.

  - Algumas bibliotecas, como o Knex, tratam possíveis diferenças de sintaxe entre diferentes bancos de dados. Isso facilita a troca de banco de dados da aplicação com mais facilidade.

  - Tem uma performance melhor em comparação com as ORMs quando se trata de consultas complexas.

- Desvantagem um query builder (como o Knex)

  - Como o query builder possui pouca abstração, algumas queries podem se tornar mais complexas de serem criadas em comparação com uma ORM.

  - Algumas bibliotecas não possuem suporte nativo a todos os SGBD, o que pode tornar a construção das queries difíceis, dependendo da complexidade da query.

  - Requer uma compreensão maior de como utilizar o SQL em comparação com uma ORM.

## 6. Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.

- O codigo da query e encontra no arquivou "schema.sql"

## 7. Dado o array no arquivo data.json, crie um interface em React.js, CSS e Bootstrap mostre os itens como se fosse um marketplace de roupas.
