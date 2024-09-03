# Exemplo de documentação de API

# API The Games
Esta API é utilizada para gerenciar um catálogo de jogos, permitindo operações de CRUD (criar, ler, atualizar e deletar) sobre jogos.

## Endpoints
### - GET /games
Esse endpoint é responsável por retornar a listagem de todos os jogos cadastrados no banco de dados.

#### Parâmetros
Nenhum

#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os jogos.

Exemplo de resposta:

```
{
    "games": [
        {
            "title": "Call of Duty MW",
            "year": 2019,
            "price": 60,
            "descriptions": [
                {
                    "genre": "Action",
                    "platform": "PC",
                    "rating": "M"
                }
            ]
        },
        {
            "title": "Sea of Thieves",
            "year": 2018,
            "price": 40,
            "descriptions": [
                {
                    "genre": "Adventure",
                    "platform": "Xbox",
                    "rating": "T"
                }
            ]
        }
    ]
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - POST /game
Esse endpoint é responsável por cadastrar um novo jogo no banco de dados.

#### Parâmetros
title: Título do jogo.<br>
year: Ano de lançamento do jogo.<br>
price: Preço do jogo.<br>
descriptions: Descrições adicionais sobre o jogo (opcional).

Exemplo de requisição:

```
{
    "title": "Minecraft",
    "year": 2012,
    "price": 20,
    "descriptions": [
        {
            "genre": "Sandbox",
            "platform": "PC",
            "rating": "E"
        }
    ]
}
```

#### Respostas
##### Criado! 201
Caso essa resposta aconteça, o novo jogo foi criado com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```


### - DELETE /game/
Esse endpoint é responsável por deletar um jogo específico pelo seu ID.

#### Parâmetros
id: ID do jogo a ser deletado.

#### Respostas
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o jogo foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "err": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - PUT /game/
Esse endpoint é responsável por atualizar as informações de um jogo específico pelo seu ID.

#### Parâmetros
id: ID do jogo a ser atualizado.<br>
title: Título do jogo (opcional).<br>
year: Ano de lançamento do jogo (opcional).<br>
price: Preço do jogo (opcional).<br>
descriptions: Descrições adicionais sobre o jogo (opcional).<br>

Exemplo de requisição:

```
{
    "title": "Minecraft Updated",
    "year": 2013,
    "price": 25,
    "descriptions": [
        {
            "genre": "Sandbox",
            "platform": "PC",
            "rating": "E"
        }
    ]
}
```

#### Respostas
##### OK! 200
Caso essa resposta aconteça, as informações do jogo foram atualizadas com sucesso.

Exemplo de resposta:

```
{
    "game": {
        "title": "Minecraft Updated",
        "year": 2013,
        "price": 25,
        "descriptions": [
            {
                "genre": "Sandbox",
                "platform": "PC",
                "rating": "E"
            }
        ]
    }
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "err": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - GET /game/
Esse endpoint é responsável por retornar as informações de um jogo específico pelo seu ID.

#### Parâmetros
id: ID do jogo a ser consultado.

#### Respostas
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações do jogo solicitado.

Exemplo de resposta:

```
{
    "game": {
        "title": "Minecraft",
        "year": 2012,
        "price": 20,
        "descriptions": [
            {
                "genre": "Sandbox",
                "platform": "PC",
                "rating": "E"
            }
        ]
    }
}
```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que o jogo com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
    "err": "Jogo não encontrado!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "err": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```
