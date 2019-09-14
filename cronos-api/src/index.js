import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan'
import cors from 'cors'

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome');
});

//Body parser
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//Mongoose
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

app.listen(process.env.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    // console.log(`Server listen on port ${process.env.PORT}`);
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  }
});

const db = mongoose.connection;

db.on('error', err => console.log(err));

db.once('open', () => {
  console.log(`Mongoose conectado y el server arriba ${process.env.PORT}`);
});