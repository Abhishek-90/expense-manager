const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/user');
const jwttoken = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const secret = process.env.Secret_Key;

//ROUTE 1: API Endpoint for new User Registration. No Login Required.
router.post('/signup',
    [
        body('email').isEmail().withMessage("Enter Valid Email Address."),
        body('password').isLength({min: 8}).withMessage("Minimum 8 characters Password")
    ]
,async (req,res)=>{
    
    const errors = validationResult(req);

    try{
        if(!errors.isEmpty()){
            return res.status(400).send({errors});
        }

        const exists = await User.findOne({
            email: req.body.email
        });

        if(exists !== null){
            return res.status(400).json({"Message":"User Id Already Taken."});
        }

        const response = await User.create({
            name:req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const authToken = jwttoken.sign({email:req.body.email},secret);
        return res.status(200).json({authToken});
    }
    catch(e){
        return res.status(400).json({error:e});
    }
})

//ROUTE 2: API Endpoint for existing users to login. No Login Required.
router.post('/login',
    [
        body('email').isEmail().withMessage("Enter Valid Email Address.")
    ]
,async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).send({errors});
    }

    const response = await User.findOne({
        email: req.body.email,
    });

    if(response === null)
        return res.status(400).json({"Message":"Invalid Credentials"});

    if(response.password === req.body.password){
        const authToken = jwttoken.sign({email:req.body.email},secret);
        return res.send({authToken,success:'success'});

    }else{
        return res.status(404).json({Message: "Invalid Credentials",success:'failed'});
    }
})

module.exports = router;
