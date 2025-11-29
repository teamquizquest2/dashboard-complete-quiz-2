// File: index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import UserModel from "./myschema/UserSchema.js";

const app = express();
const PORT = 5000;

// Secret key for JWT
const JWT_SECRET = "quizapp_secret_key";

// Middlewares
app.use(cors());
app.use(express.json());

// IMPORT Delete User Route
import deleteUserRoute from "./myFiles/delete-user.js";

import updateUserRoute from "./myFiles/update-user.js";

// MOUNT Delete Route
app.use("/user/delete-user", deleteUserRoute);

//route for update-user
app.use("/user/update-user", updateUserRoute);
 

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/quizapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ DB Connection Error:", err));

// -------------------------
//      ADD USER (Signup)
// -------------------------
app.post("/user/add-user", async (req, res) => {
  try {
    const { name, email, fname, password, status } = req.body;

    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.json({ success: false, message: "Email already registered" });
    }

    const newUser = new UserModel({
  name,
  email,
  fname,
  password,
  status,
  role: "user" // ⭐ default user
});

    await newUser.save();

    // Generate token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      success: true,
      message: "User added successfully",
      user: newUser,
      token,
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// -------------------------
//          LOGIN
// -------------------------
app.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // Generate token with ROLE
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role   // ⭐ important
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      success: true,
      message: "Login successful",
      user,
      role: user.role,  // ⭐ return role
      token,
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});


// -------------------------
//      GET ALL USERS
// -------------------------
app.get("/user/all-user", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json({ success: true, getData: users });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
