const express = require('express');
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {

        // sabse phle check kro koi bhi empty fiedl database me store ni honi chea 
        const user = req.body;
        if(user.fullname== "" || user.email == "" || user.mobile == "" || user.password == ""){
            return res.status(401).json({
                status:false,
                message : "All Fields Are Required"
            })
        }
        const isUserPresent = await User.findOne({
            email: req.body.email
        });

        if (isUserPresent) {
            return res.status(401).json({
                status: false,
                message: "User With this Email Already Exist"
            });
        }

        const hashPassword = await bcrypt.hash(
            req.body.password,
            7
        );

        const isUserCreated = await User.create({
            fullname: req.body.fullname,
            email: req.body.email,
            mobile: req.body.mobile,
            password: hashPassword
        });

        return res.status(201).json({
            status: true,
            message: "Account Created"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        });
    }
};
const login =  async (req, res) => {
    try {
        const user = req.body;
        console.log(user);
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
        if(!token){
            console.log("Error in token")
        }
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