import express from "express";
import UserModel from "../myschema/UserSchema.js";

const router = express.Router();

router.put("/:reqID4Update", async (req, res) => {
  let mySuccess = false;
  let idUpdating = req.params.reqID4Update;

  const getUser = await UserModel.findById(idUpdating);

  if (!getUser) {
    return res.status(404).json({
      success: mySuccess,
      message: "No data exist having the ID",
    });
  }

  let newName = req.body.newName;
  let newfName = req.body.newfName;

  let newData = {};
  if (newName) newData.name = newName;
  if (newfName) newData.fname = newfName;

  try {
    const updatedData = await UserModel.findByIdAndUpdate(
      idUpdating,
      { $set: newData },
      { new: true }
    );

    mySuccess = true;

    res.json({ updatedData, success: mySuccess });
  } catch (e) {
    res.status(400).json({ success: mySuccess, message: "Internal Server Error" });
  }
});

export default router;
