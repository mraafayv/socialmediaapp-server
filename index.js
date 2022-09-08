import dotenv from 'dotenv';

import express from 'express';
import mongoose from 'mongoose';


import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";


const app = express();
const cors = require('cors');

app.use(cors());
dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))



app.use('/posts', postRoutes);
app.use("/user", userRouter);

app.get('/', (req, res) => {
  res.send("APP IS RUNNING");
});

const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);