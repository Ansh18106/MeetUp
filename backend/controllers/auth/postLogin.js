import User from "../../models/User.js"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config({ silent: process.env.NODE_ENV === 'production' });


export const postLogin = async(req, res) => {
    try {
        const { mail, password } = req.body;
        const user = await User.findOne({ mail: mail.toLowerCase() });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw(err);
                if (result) {
                    // create JWT token
                    const token = jwt.sign(
                        {
                            userId: user.id,
                            mail
                        },
                        process.env.TOKEN_KEY,
                        {
                            expiresIn: '24h'
                        }
                    );
                    return res.status(200).json({
                        userDetails: {
                            mail: user.mail,
                            token: token,
                            username: user.username
                        }
                    });
                }
                return res.status(400).send('Invalid credentials!!! Please try again')
            });
        }
    } catch (err) {
        return res.status(500).send('Something went wrong.Please try again');
    }
};
