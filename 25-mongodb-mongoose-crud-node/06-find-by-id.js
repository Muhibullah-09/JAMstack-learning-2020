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
      
      const result = await Student.findById({_id: "5fb034f1ed075f2a4280d7ef"});
      console.log(`Name: ${result.name} , Age: ${result.age}`);
      
    }
    catch(error) {
      console.log(error);
    }
})();