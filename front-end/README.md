## technical_test_coopercarga / Front-end

## Introdução
- O projeto foi construído principalmente utilizando [React.js](https://react.dev/) + [Vite](https://vitejs.dev/guide/) + [TypeScript](https://www.typescriptlang.org/) Consulte as documentações oficiais para obter informações detalhadas e orientações específicas, caso necessário.
  - Ducumentação - [React.js](https://react.dev/) 
  - Ducumentação - [vite](https://vitejs.dev/guide/)
  - Ducumentação - [TypeScript](https://www.typescriptlang.org/)

- O projeto consiste em um MVP (Mínimo Produto Viável) de um marketplace de produtos esportivos , React.js, CSS e Bootstrap, consumindo as informações da api que foi criada para esse projeto, Ao longo desta documentação, detalharei informações importantes sobre o desenvolvimento desta aplicação.

#

## Acessar a aplicação na Vercel
- Para facilitar o teste da aplicação, foi realizado o seu deploy na Vercel, eliminando assim a necessidade de inicializar a aplicação localmente.
  - Basta accesar este link: https://front-end-rsoare.vercel.app/
#

## Inicializando a aplicação localmente

- Para iniciar a aplicação, basta realizar o clone desse repositorio inicie o terminal de comandos e realize sequência de comandos abaixo na raiz do projeto.
 - Instalar as dependências
 - Inicializar a aplicação

### Intalando Dependencias 
```bash
   npm install
```

### Inicializando a aplicação
```bash
   npm run dev
```

#

## Funcionalidades da aplicação
- Barra de pesquisa
   - Ao digitar o nome do produto, todos os produtos que correspondem a esse nome serão renderizados.
        - Por exemplo, ao digitar 'Calção', serão renderizados produtos como 'Calção da Nike' e 'Calção da Puma'.        
   -  Caso o botão de enviar seja pressionado sem nenhum nome inserido, todos os produtos serão renderizados.
 
- NavBar
     - Ao clicar em um nome na barra de navegação, os produtos da marca selecionada serão renderizados.

- Ao clicar na NavBar ou pesquisar um produto e caso nenhum produto seja encontrado, serão renderizados esqueletos dos cards.

- Modal de informações
    - Ao clicar em um dos cards dos produtos um modal será aberto com mais informações do produto clicado 
#

## Informações sobre a integração com a API.

- Foi feito o deploy da API no Render utilizando os seus serviços gratuitos. Portanto, ao iniciar o marketplace pela primeira vez, pode demorar de 2 a 3 minutos para a requisição funcionar. Após os cards renderizarem pela primeira vez, a API funciona normalmente. 


## Tecnologias Utilizadas
- React
- Vite
- JavaScript
- TypeScript
- bootstrap
- Styled-Components
- axios
- React-Router-Dom


