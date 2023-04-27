import express from 'express';
import { postLogin } from '../controllers/auth/postLogin.js'; 
import { postRegister } from '../controllers/auth/postRegister.js';
import { verifyToken } from '../middleware/auth.js';
import Joi from 'joi';
import expressValidator from 'express-joi-validation';

const validator = expressValidator.createValidator({});
const router = express.Router();

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required(),
})


router.post("/register", validator.body(registerSchema), postRegister);
router.post("/login", validator.body(loginSchema), postLogin);

// test for middleware
router.get('/test', verifyToken, (req, res) => {
    res.send("request passed");
});


export default router;