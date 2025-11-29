
//File: UserSchema.js in ROOT-FOLDER/myschema/ folder
 
import UserMongoose from "mongoose"
//import { Schema } from 'NoteMongoose'
//above line will generate error because you don't use import and require together. Use only one format
const { Schema } = UserMongoose; // Destructure Schema from mongoose
 
//exporting so that it can be used in another file
//1st parameter is for name-of-collection in database. DONT USE CAPITAL LETTER IN THE NAME
//3rd parameter is same as 1st parameter so that name of collection is same as in 1st parameter.
 
 
 
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    fname: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String
    },


    role: {
        type: String,
        enum: ["user", "admin"],   // only 2 roles allowed
        default: "user"            // normal user by default
    }
})
 

 
const UserModel = UserMongoose.model('Students', UserSchema, 'Students');

 
export default UserModel;
