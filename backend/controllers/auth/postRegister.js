import User from "../../models/User.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

export const postRegister = async(req, res) => {
    try {
        const { username, mail, password } = req.body;
        // check if user exists
        const userExists = await User.exists({ mail: mail.toLowerCase() });
        if (userExists) {
            return res.status(409).send("Email already in use");
        }

        // encrypt the password
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) throw(err);
            // create new user and save in DB
            const user = await User.create({
                username,
                mail: mail.toLowerCase(),
                password: hash
            });
            // create JWT token
            const token = jwt.sign({
                    userId: user._id,
                    mail
                },process.env.TOKEN_KEY,{
                    expiresIn: '24h'
                }
                );
                res.status(201).json({
                    userDetails: {
                        username: user.username,
                        mail: user.mail,
                        token: token
                    }
                })
            });              
    } catch (err) {
        return res.status(500).send(err);
    }
};
