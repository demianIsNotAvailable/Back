```sh
$ git init
```

```sh
$ npm init
```

```sh
$ npm i express
```

```sh
$ npm i --save-dev @types/express
```

```sh
$ npm i typescript -D
```

```sh
$ npx tsc
```

```sh
$ npm i nodemon -D
```

```sh
$ npm i ts-node -D
```

```sh
$ npm i dotenv
```

## conexion a db

```sh
$ npm i typeorm
```

### ejemplo migracion
```sh
npx typeorm migration:create ./src/database/migrations/user
```

### encriptar contraseña
```sh
npm i bcrypt
```
``` sh
npm i --save-dev @types/bcrypt
```

## ejemplo readme

``` sh
npm run db:refresh
```

## cambio de nombre de commit
``` sh
$ git commit --amend
```


## install cors
``` sh
$ npm i cors
$ npm i --save-dev @types/cors
```


``` js
import cors from 'cors'

app.use(cors())
```