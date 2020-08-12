import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// rotas = http://localhost:3333/users
// resources = /users

// principais métodos:
// GET: buscar ou listar uma informação
// POST: criar alguma nova informação
// PUT: atualizar uma informação existente
// DELETE: excluir uma informação

// Corpo (request body): dados para criação ou atualização de um registro
// Route Parans: identificar qual recurso eu quero atualizar ou excluir
// Query Parans: 

// http://localhost:3333
app.listen(3333);