const express = require('express');
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register =  async (req, res) => {
    // check email with this user already exist
    const isUserPresent = await User.findOne({ email: req.body.email })
    if (isUserPresent) {
        return res.status(401).json({
            status: false,
            message: "User With this Email Already Exist"
        })
    }
    const hashPassword = await bcrypt.hash(req.body.password, 7);

    const isUserCreated = await User.create({
        fullname: req.body.fullname,
        email: req.body.email,
        mobile: req.body.mobile,
        password: hashPassword
    })
    if (isUserCreated) {
        return res.status(201).json({
            status: true,
            message: "Account Created"
        })
    }
}
const login =  async (req, res) => {
    try {
        const user = req.body;
        // check user is exist or not 
        const isUserPresent = await User.findOne({ email: user.email });
        if (!isUserPresent) {
            return res.status(401).json({
                status: false,
                message: "User With This Email Does'nt Exist"
            })
        }
        // now match the passsowrd
        const isPasswordMatch = await bcrypt.compare(
            user.password,
            isUserPresent.password
        );
        if (!isPasswordMatch) {
            return res.status(401).json({
                status: "false",
                message: "Wrong Email or Password"
            })
        }

        const token = jwt.sign({
            userId: isUserPresent._id,
            email: isUserPresent.email
        }, process.env.SECRET_KEY,
            {
                expiresIn: "1d"
            }
        )
        return res.status(200).json({
            status: true,
            message: "Login Successfull",
            token
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error
        })
    }
}

module.exports = {
    register,login
}