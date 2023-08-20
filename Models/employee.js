import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    matricule : {
        type : String,
        required : true
    },
    nom : {
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required : true
    },
    motDePasses : {
        type : String,
        required : true
    },
    dateCreation : {
        type : Date,
        default : Date.now
    },
    dateModification : {
        type : Date
    }
});
const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;