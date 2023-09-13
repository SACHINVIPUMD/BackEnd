const mongoose = require('mongoose');
const connections = require('../config/database');
const Grid = require('gridfs-stream');
const fs = require('fs');


const gfs = Grid(connections.db, mongoose.mongo);
gfs.collection('uploads');

const { Schema } = mongoose;

const serviceProvideSchema = new Schema({
    fullname: {
        type: String ,
        required: true ,
        unique: false ,
    } ,
    DoB: {
        type: Date , 
        required: true ,
        unique: false ,
    } ,
    email: {
        type: String ,
        required: true ,
        unique: true ,
    } ,
    state: {
        type: String ,
        required: true , 
        unique: false ,
    } ,
    city: {
        type: String ,
        required: true ,
        unique: false ,
    } ,
    education: {
        type: String ,
        required: true ,
        unique: false ,
    } ,
    certification: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'uploads.files' ,
        required: true ,
        unique: false ,
    } ,
    license : {
        type : String ,
        required : true ,
        unique : true ,
    } ,
    jobTitle : {
        type : String ,
        required : true ,

    },
    yearsOfExperience : {
        type : Number ,
        required : true ,
    },
    password : {
        type : String ,
        required : true ,
    }

});