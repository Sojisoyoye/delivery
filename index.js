import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/packageroutes';

// const port = 3000;

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.get('/api/v1', (req, res) => res.status(200).send({ message: 'Welcome to delivery!!!' }));

// if (process.env.NODE_ENV !== 'test') {
// app.listen(port);
// }

app.listen(3000);
// eslint-disable-next-line no-console
console.log('app running on port ', 3000);

export default app;
