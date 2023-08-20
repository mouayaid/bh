import mongoose from "mongoose";
const relationAdministratifSchema = mongoose.Schema({
    codeChef : {
        type : String,
        required : true
    },
    codeEmployee : {
        type : String,
        required : true
    },
    dateCreation : {
        type : Date,
    },
    codeUser : {
        type : String,
    }
});
const RelationAdministratif = mongoose.model('RelationAdministratif', relationAdministratifSchema);
export default RelationAdministratif;