const mongoose = require("mongoose")
const connec = async () => {
try{
 await mongoose
 .connect("mongodb+srv://javariyafatima:-Yw85*xTjmR.cXF@cluster0.dk39vyc.mongodb.net/attendence")
 .then(()=> console.log("connect moongodb"));
}catch(error){
    console.log("error")
}
};
connec();
