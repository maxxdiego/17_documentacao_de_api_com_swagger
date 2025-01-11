# Documentação de API com Swagger
![NPM](https://img.shields.io/npm/l/react)

## Introdução:

O Swagger é um conjunto de ferramentas amplamente utilizado para criar, descrever, documentar e consumir APIs RESTful. Ele permite que desenvolvedores gerem documentações interativas e padronizadas de suas APIs, facilitando a comunicação entre equipes e usuários da API. A documentação gerada pelo Swagger inclui detalhes sobre rotas, métodos HTTP, parâmetros de entrada, respostas e exemplos de uso, tudo de maneira visual e acessível através de uma interface chamada Swagger UI.

### Principais vantagens:

- Automação da documentação: Gera automaticamente a documentação da API a partir do código, mantendo-a sempre atualizada.
- Testes interativos: A interface Swagger UI permite que os usuários testem as rotas diretamente no navegador.
- Padrão OpenAPI: Segue o padrão OpenAPI (anteriormente conhecido como Swagger Specification), garantindo compatibilidade e entendimento universal da API.

Swagger simplifica tanto o desenvolvimento quanto o consumo de APIs, tornando a colaboração mais eficiente e transparente.

## 1. Instalar as dependências necessárias:
No seu projeto Node.js, primeiro, instale as dependências para o Swagger, que são necessárias para gerar e exibir a documentação da API.

Execute o seguinte comando no terminal para instalar as bibliotecas necessárias:

```bash
npm install swagger-jsdoc swagger-ui-express
```

### Explicação das dependências:
- swagger-jsdoc: Gera a documentação no formato Swagger a partir de comentários no código.
- swagger-ui-express: Fornece uma interface gráfica para acessar e interagir com a documentação da API gerada pelo Swagger.

## 2. Configurar a API com Swagger
No arquivo principal do seu projeto (geralmente app.js ou index.js), você precisará configurar o Swagger e integrá-lo à sua aplicação Express.

Aqui está um exemplo básico de configuração:

### 1. Importe os módulos necessários:

```bash
// "./index.js":

import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
```

### 2. Defina as opções para o Swagger:
Você precisará configurar as opções para a geração da documentação. Defina detalhes como o título da API, a versão e o caminho para os arquivos onde as rotas serão documentadas.

```bash
// "./config/swagger-config.js":

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Versão do Swagger
    info: {
      title: "The Games API",
      description: "API para catálogo de jogos",
      version: "1.0.0",
      contact: {
        name: "Diego",
      },
      servers: [{ url: "http://localhost:4000" }],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // ou outro formato dependendo do token usado
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js", "./docs/swaggerDocs.yaml"], // Caminho para os arquivos onde você documenta as rotas
};

export default swaggerOptions;
```

### 3. Gere a documentação Swagger a partir das opções:

```bash
// "./index.js":

import swaggerOptions from "./config/swagger-config.js";

const swaggerDocs = swaggerJsDoc(swaggerOptions);
```


### 4. Configure a rota para acessar a documentação via Swagger UI:
```bash
// "./index.js":
// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
```

## Passo 3: Documentar as rotas da API
Agora, é hora de adicionar documentação nas suas rotas usando comentários no formato Swagger. O swagger-jsdoc lê esses comentários e gera a documentação automaticamente.

Aqui está um exemplo de como documentar uma rota:

```bash
// "./docs/swaggerDocs.yaml":

paths:
  /games:
    get:
      summary: Retorna a lista de todos os jogos cadastrados
      tags: [Games]
      security:
        - bearerAuth: [] # Utilizando autenticação JWT
      responses:
        200:
          description: Lista de jogos
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    _id:
                      type: string
                      example: "6782b9b16d6ea34ace5bd199"
                    title:
                      type: string
                      example: "CS-GO"
                    platform:
                      type: string
                      example: "PC (Windows)"
                    year:
                      type: integer
                      example: 2012
                    price:
                      type: integer
                      example: 0
        500:
          description: Erro interno do servidor

```

<hr>

# Autor

Prof. Diego Max da Silva<br>
https://lattes.cnpq.br/4370663836049458