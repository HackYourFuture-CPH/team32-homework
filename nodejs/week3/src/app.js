import express from 'express'
import { contactRouter } from './contacts/contactRouter.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(contactRouter);



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});