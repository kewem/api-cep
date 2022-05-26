
# CEP API Rest Full


### Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/kewem/api-cep.git
```

Entre no diretório do projeto

```bash
  cd /api-cep
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

### Build e Rodando em produção

Clone o projeto

```bash
  git clone https://github.com/kewem/api-cep.git
```

Entre no diretório do projeto

```bash
  cd /api-cep
```

Instale as dependências

```bash
  npm install
```

Dê o comando de duild

```bash
  npm run build
```

Inicie o servidor

```bash
  npm run start
```


## Documentação da API

#### Registro do usuário e devolução da chave token registrada

```http
  POST /v1/users
```
O corpo da requisição deve ser do tipo: `application/json`

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome do usuário     |
| `email` | `string` | **Obrigatório**. Email do usuário     |

#### Exemplos:
#### Corpo da requisição:
```json
{
    "name": "Alan Kewem",
    "email": "kewemcg@gmail.com"
}
```

#### Corpo da resposta:
```json
{
	"name": "Alan Kewem",
	"email": "kewemcg@gmail.com",
	"id": "bef85de9-8761-4a64-9bc5-bfa9b86f44cc",
	"jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiZWY4NWRlOS04NzYxLTRhNjQtOWJjNS1iZmE5Yjg2ZjQ0Y2MiLCJpYXQiOjE2NTM1Mzc3Mjl9.VpsHF63M4LVDkoi3jSx5H-W18orcGHjOnxd-qqqzlII"
}
```

#### Retorna um objeto contendo todos os dados sobre um CEP

```http
  POST /v1/cep/
```
O corpo da requisição deve ser do tipo: `application/json`

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `cep`      | `string` | **Obrigatório**. CEP a ser consultado |
| `token`      | `string` | **Obrigatório**. Incluso no Header `Authorization: Bearer <token>` |

#### Exemplos:
#### Corpo da requisição:
```json
{
    "cep": "69800-000"
}
```
#### Corpo da resposta:
```json
{
	"cep": "55641-726",
	"logradouro": "Travessa São Cristóvão",
	"complemento": "",
	"bairro": "Nossa Senhora das Graças",
	"localidade": "Gravatá",
	"uf": "PE",
	"ibge": "2606408",
	"gia": "",
	"ddd": "81",
	"siafi": "2427",
	"fromCache": false
}
```
