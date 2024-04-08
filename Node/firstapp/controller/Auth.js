const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the details"
            })
        }

        //check is it registered or not ? 
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not registered"
            })
        }

        //verfiy password and genrerate JWT token
        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        }
        if (await bcrypt.compare(password, user.password)) {
            // password match
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });
            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            res.cookie('token', token, options);
            return res.status(200).json({
                success: true,
                token,
                user,
                message: 'User logged in successfully'
            });
        }
        else {
            //password do not match
            return res.status(400).json({
                success: false,
                message: 'Password do not match'
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'log in failure'
        })
    }
}
const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        //is user existing
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            })
        }
        //secure password
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Error in hashing password'
            })
        }
        //create  entry for user
        const user = await User.create({
            name, email, password: hashedPassword, role
        })
        return res.status(200).json({
            success: true,
            message: 'user created successfully'
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'User cannot be registered, try again later..'
        })
    }
}
module.exports = { login, signup }