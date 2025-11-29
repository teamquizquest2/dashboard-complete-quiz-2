// File: myFiles/all-user.js
import myexpress from "express";
const myRouter = myexpress.Router()
import UserModel from "../myschema/UserSchema.js";

// GET: /user/all-user?name=Ahmed Malik
myRouter.get("/all-user/", async (req, res) => {
  let mySuccess = false;
  try {
   const user = await UserModel.find();
    mySuccess = true;
    res.json({ getData: user, success: mySuccess });
  } catch (e) {
    console.error(e);
    res.status(500).send({ success: mySuccess, message: "Internal Server Error" });
  }
});

export default myRouter;
