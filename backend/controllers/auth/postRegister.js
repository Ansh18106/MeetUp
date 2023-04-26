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
        const encryptedPassword = await bcrypt.hash(password, 10);

        // create new user and save in DB
        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        });

        // create JWT token
        const token = 'JWT_token';
        token = jwt.sign(
            {
                userId: user._id,
                mail
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'
            }
        );
        console.log(process.env.TOKEN_KEY);
        
        res.status(201).json({
            userDetails: {
                username: user.username,
                mail: user.mail,
                token: token
            }
        })

    } catch (err) {
        return res.status(500).send(err);
    }
};
