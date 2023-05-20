#### create simple nodejs + express + typescript project + keycloak

> npm init  
> npm install typescript dotenv keycloak-connect express express-session @types/express @types/node ts-node nodemon rimraf
> npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```
target: es2016
module: commonjs
lib: es6
outDir: build
rootDir: src
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true

```
> mkdir src
> touch src/server.ts
```
console.log("Hello, welcome to Nodejs Project")
```

> npx tsc
> touch nodemon.json
```json
{
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "npx ts-node ./src/server.ts"
  }
  ```

  > nano package.json
```
Add
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "npx nodemon",
    "build": "rimraf ./build && tsc",
    "start": "npm run build && node build/server.js"
  },
  ```