// File: myFiles/register-user.js
import express from "express";
const router = express.Router();
import User from "../myschema/UserSchema.js";
import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken"; // ✅ Step 1: Import JWT

// ✅ Step 2: Define secret key (later move this to .env file)
const JWT_SECRET = "mySuperSecretKey_12345";

// ✅ Register User Route
router.post(
  "/",
  [
    body("email").isEmail().withMessage("Must be a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("name").notEmpty().withMessage("Name is required"),
  ],
  async (req, res) => {
    try {
      // Step 3: Validate incoming data
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, name, fname, password, status } = req.body;

      // Step 4: Check for existing email
      const existing = await User.findOne({ email });
      if (existing) {
        return res.status(409).json({ message: "Email already registered" });
      }

      // Step 5: Save new user in DB
      const newUser = new User({
        email,
        name,
        fname,
        password, // consider hashing for production
        status,
         role: "user"   // ⭐ setting default role
      });

      const saved = await newUser.save();

      // ✅ Step 6: Define token payload
      const payload = {
        email,
        name,
        userType: "user",
      };

      // ✅ Step 7: Generate JWT token (valid for 1 hour)
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

      // ✅ Step 8: Send response including token
      return res.status(201).json({
        resStatus: "true",
        message: "User registered successfully",
        user: saved,
        token: token, // frontend will store this in localStorage
      });
    } catch (err) {
      console.error("register-user error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;
