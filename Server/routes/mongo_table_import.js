var mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
var key = "jlEyuXwnNDTtDBoWojRxkwuLlpA5dop0";
var Schema = mongoose.Schema;

var usersSchema = new Schema(
    {
        FirstName: {
            type: String,
            match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please enter your first name"],
            trim: true,
            uppercase: true
        },
        LastName: {
            type: String,
            match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please enter your first name"],
            trim: true,
            uppercase: true
        },
        Email: {
            type: String,
            // unique: true,
            // match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please enter your Email Address"], 
            trim: true,
            uppercase: true,
            // unique:[true," Email already Exist."]
        },
        City: {
            type: String,
            // match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please enter your City"], 
            trim: true,
            uppercase: true,
            
        },
        State: {
            type: String,
            // match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please enter your State"], 
            trim: true,
            uppercase: true,
            
        },
        Country: {
            type: String,
            // match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please enter your Country"], 
            trim: true,
            uppercase: true,  
        },
        Department: {
            type: String,
            // match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please select Your Department"],
            trim: true,
            uppercase: true
        },
        Gender: {
            type: String,
            // match: [/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/, "Please enter alphabets Only"],
            required: [true, "Please select your gender"], 
            trim: true,
            uppercase: true,
        },
        is_deleted: {
            type: Boolean,
            default:false
        },
        created_by: {
            type: Boolean,
            default:0
        },
        updated_by: {
        default:0
        },
        created_at: {
            default:Date,
            type: Date,
        },
        updated_at: {
            type: Date,
            default:Date
        }
        
    },{timestamps:true})



module.exports = mongoose.model("Users", usersSchema);