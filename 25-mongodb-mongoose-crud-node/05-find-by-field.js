const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async ()=>{
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology:true });
      console.log('Kamali is practice mongoose');
    

      //Define a schema
      const studentSchema = new mongoose.Schema({
        name: String,
        age: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
      
      const result = await Student.find({name: "Taha"});
      //console.log("Result = ", result);
      result.forEach((item)=>{
        console.log(`Name: ${item.name} , Age: ${item.age}`);
      })
    }
    catch(error) {
      console.log(error);
    }
})();