import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import usersRouter  from './controller/test-controller';
import { initKeycloak } from './config/keycloak-config';

dotenv.config();

console.log('Hello world!')
const app: Express = express();
const port = process.env.PORT;

const keycloak = initKeycloak();


app.use(keycloak.middleware( { logout: '/logout'} ));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
