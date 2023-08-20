import mongoose from "mongoose";

const gouvernoratSchema = mongoose.Schema({
    codeGouvernorat : {
        type : String
    },
    courtiere : {
        type : Boolean
    },
    dateCreation : {
        type : Date
    }
});
const Gouvernorat = mongoose.model('Gouvernorat', gouvernoratSchema);
export default Gouvernorat;