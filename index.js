import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/packageroutes';

const app = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.get('/api/v1', (req, res) => res.status(200).send({ message: 'Welcome to delivery!!!' }));

app.listen(3000);
console.log('app running on port ', 3000);
