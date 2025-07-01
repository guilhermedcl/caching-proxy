# 🧠 caching-proxy

Um servidor proxy de cache construído em Node.js.  
Encaminha requisições para outro servidor, armazena as respostas em cache e retorna do cache se a mesma URL for requisitada novamente.

## 🚀 Como usar

### Instalação

```bash
npm install
npm link
```

> O comando `npm link` torna o CLI disponível globalmente no seu terminal como `caching-proxy`.

### Iniciando o servidor proxy

```bash
caching-proxy --port <porta> --origin <url-do-servidor>
```

#### Exemplo:

```bash
caching-proxy --port 3000 --origin http://dummyjson.com
```

Depois disso, acessar:

```bash
http://localhost:3000/products
```

Vai encaminhar para:

```bash
http://dummyjson.com/products
```

## 💾 Cache

As respostas são armazenadas em cache por URL.

- Se a resposta vier do cache:  
  `X-Cache: HIT`

- Se a resposta for buscada do origin:  
  `X-Cache: MISS`

## 🧹 Limpando o cache

```bash
caching-proxy --clear-cache
```

## 📁 Estrutura do projeto

```
caching-proxy/
├── bin/
│   └── index.js
├── src/
│   ├── args.js
│   ├── cache.js
│   └── server.js
```

## 🛠 Tecnologias usadas

- Node.js
- Express
- Axios
- Commander
