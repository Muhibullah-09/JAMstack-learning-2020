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
      
      const result = await Student.updateMany({name: "Inam"}, {age:20} );
      console.log("Result: ",result);
      
    }
    catch(error) {
      console.log(error);
    }
})();