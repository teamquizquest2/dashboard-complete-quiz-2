import express from "express";
import UserModel from "../myschema/UserSchema.js";  // ES module import

const router = express.Router();

// :reqID4Delete is for getting ID from URL
router.delete("/:reqID4Delete", async (req, res) => {
  let success = false;
  const delID = req.params.reqID4Delete;

  try {
    // Check if user exists
    const getUser = await UserModel.findById(delID);

    if (!getUser) {
      return res.status(404).json({
        success,
        message: "No User Found for this ID",
      });
    }

    // Delete the user
    const deletedUser = await UserModel.findByIdAndDelete(delID);

    success = true;

    res.json({
      success,
      deletedData: deletedUser,
    });
  } catch (e) {
    res.status(400).json({
      success,
      message: "Internal Server Error",
    });
  }
});

// Export in ES module style
export default router;
