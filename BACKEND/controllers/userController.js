const { User } = require("../models/userModel");
const { status } = require("http-status");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    let { name, phone, email, password } = req.body;

    if (!name || !phone || !email || !password) {
      return res.status(status.BAD_REQUEST).json({
        message: "All fields are required!",
      });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(status.BAD_REQUEST).json({
        message: "User already exist!,Try different email",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const fullName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const newUser = new User({
      name: fullName,
      phone,
      email,
      password: hashPassword,
    });
    await newUser.save();

    return res.status(status.CREATED).json({
      success: true,
      mesage: "User registered successfully!",
    });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error!",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(status.BAD_REQUEST).json({
        message: "All fields are required!",
      });
    }

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(status.BAD_REQUEST).json({
        message: "User not found!",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(status.BAD_REQUEST).json({
        message: "Invalid email or password!",
      });
    }

    //   Token Genarate

    const JWT_SECRET = process.env.JWT_SECRET;

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      JWT_SECRET,
      {
        expiresIn: "3d",
      },
    );

    return res.status(status.OK).json({
      success: true,
      message: "User logged In successfully!",
      token,
    });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: `Internal server error! ${err}`,
    });
  }
};



