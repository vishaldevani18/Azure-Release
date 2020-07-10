var express = require('express');
var mongoose = require('mongoose');
var usersSchema = require('./mongo_table_import')
var router = express.Router();

router.get('/', async function (req, res) {
    var data = req.userId;  
        usersSchema.find({})
        .then(result => {

            if(result.length===0){

                res.send({err:"No record found",
                success:false
             })
                
            }

            else {
                res.status(200).json({
                    error: false,
                    success: true,
                    msg: "Sucess",
                    verifyId: data,
                    data: result
                })    
            }
            
        }).catch(err => {
            res.status(500).json({
                error: true,
                success: false,
                msg: "Some Errors.!!!",
                err: "Err"
            })
        })
})

router.post('/', function (req, res) {


    firstname = req.body.data.firstname, lastname = req.body.data.lastname, email = req.body.data.email,city = req.body.data.city,state = req.body.data.state,country=req.body.data.country,department=req.body.data.department,gender=req.body.data.gender
    // if (firstname && lastname && email && phonenumber && company && username && password) {
        usersSchema.findOne({Email:email }).then(result => {


            if(result){
                res.send({err:"user Already Exist with given email id",
                success:false
             })
                 
             }
             else{
                usersSchema.create({
                    FirstName: firstname,
                    LastName: lastname,
                    Email: email,
                    City: city,
                    State: state,
                    Country:country,
                    Department:department,
                    Gender:gender
                }).then(result => {
                    res.status(200).json({
                        error: false,
                        success: true,
                        msg: "Sucessfully Register",
                        data: result
                    })
                })
                    .catch(err => {
                        
                        // res.status(500).json({
                        //     error: true,
                        //     success: false,
                        //     msg: "fsdfsff",
                        //     err: err
                        // })
                        console.log(err.name)
                    });

             }
        });
    
        
})

router.get('/:id', async function (req, res) {
    usersSchema.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                error: false,
                success: true,
                msg: "Sucess",
                data: result
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                success: false,
                msg: "Invalid Id",
                err: err
            })
        })
})
router.patch('/:id', async function (req, res) {
var update = req.body.data

        usersSchema.findOneAndUpdate({ _id: req.params.id },
            {$set: {FirstName:update.firstname,
            LastName:update.lastname,
            Email:update.email,
            City:update.city,
            State:update.state,
            Country:update.country,
            Department:update.department,
            Gender:update.gender

            }},{
            new: true,
            upsert: true,
            rawResult: true
        })
            .then(result => {
                res.status(200).json({
                    error: false,
                    success: true,
                    msg: "Sucessfully Updated",
                    Table_data: result
                })
            })
            .catch(err => {

                res.status(500).json({
                    error: true,
                    success: false,
                    msg: "Invalid Id",
                    err: "gdffgg"
                })
            });
})
router.delete('/:id', async function (req, res) {
    if (req.params.id) {
        usersSchema.findByIdAndDelete(req.params.id).then(result => {
            res.status(200).json({
                error: false,
                success: true,
                msg: "Sucessfully Deleted",
                Table_data: result
            })
        })
            .catch(err => {

                res.status(500).json({
                    error: true,
                    success: false,
                    msg: "Invalid Id",
                    err: err
                })
            });
    }
    else {
        res.status(500).json({
            error: true,
            success: false,
            msg: "Id Must Require.",
        })
    }
})
module.exports = router;