# api-products

Microsserviço de Produtos utilizando [Atlas](https://cloud.mongodb.com) e hospedagem no [Heroku](https://www.heroku.com/).

## Tecnologias:

- NodeJS v12.16.1, Typescript v3.8.3, MongoDB, e Jest 25.3.0

## Como buildar:

- Execute o comando ```npm install```. Execute também ```npm install typescript -g``` caso não tenha o typescript no PATH do computador. Após, execute ```tsc```.

# Como executar:

- Para executar localmente é necessário criar o arquivo .env com os seguintes valores:

```SECRET=fa93126886e3a380073b2edbc19e2544c4a```

```MONGO_URL=xxx```

- MONGO_URL é a string de conexão do MongoDB
- SECRET é a chave necessária para usar no jwt
- Execute o comando ```npm run dev``` para executar o projeto localmente

## Acesso:

| Route | Verb | Description |
| --- | --- | --- |
| `https://node-ts-api-products.herokuapp.com/products` | GET | Lista todos os produtos* |
| `https://node-ts-api-products.herokuapp.com/products` | POST | Cria um produto |
| `https://node-ts-api-products.herokuapp.com/products/:productId` | GET | Busca por um produto pelo Id |
| `https://node-ts-api-products.herokuapp.com/products/:productId` | PUT | Edita um produto |
| `https://node-ts-api-products.herokuapp.com/products/:productId` | DELETE | Remove um produto |

\*Utilizando por padrão os valores offset=0 e limit=10

## Como testar 

- ```npm run test```

## Exemplo de requisição

#### REQUEST

POST: [http://localhost:3000/products](http://localhost:3000/products)

Headers:

Campo **authentication** no header com o token do usuário. O token do usuário deve ser obtido no endpoint ```https://node-ts-api-authentication.herokuapp.com/auth``` informando ```user``` e ```password``` conforme explicado [aqui](https://github.com/moniadamz/api-authentication/blob/master/README.md).

Body:

| Campo         | Descrição     | Obrigatorio |
| ------------- |-------------| :---------: |
| sku | Registro do produto | X |
| brand | Marca do produto | X |
| name | Nome do produto | X |
| description  | Descrição do produto |  |
| producedAt | Data de produção do produto|  |
| registeredAt | Data de registro do produto |  |


#### RESPONSE

Objeto com os dados dos produtos registrados.
