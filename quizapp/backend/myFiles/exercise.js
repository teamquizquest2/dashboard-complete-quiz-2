import express from "express";
const myRouter = express.Router();

myRouter.get('/e1', (req, res) => res.send('Exercises 1, 2, 4'));
export default myRouter;
