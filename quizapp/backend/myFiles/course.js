import express from "express";
const myRouter = express.Router();

myRouter.get('/', (req, res) => {
  res.send('Web Development');
});

export default myRouter;
