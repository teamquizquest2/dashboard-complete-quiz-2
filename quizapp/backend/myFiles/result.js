import express from "express";
const myRouter = express.Router();

myRouter.get('/', (req, res) => res.send('Result'));
export default myRouter;
