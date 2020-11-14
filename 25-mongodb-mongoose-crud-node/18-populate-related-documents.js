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
        age: Number,
        course: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
      });
      const courseSchema = new mongoose.Schema({
        courseName: String,
        noOfTopics: Number
      });

      //Creating a model
      const Student = mongoose.model('Student', studentSchema);
      const Course = mongoose.model('Course', courseSchema);
      
      // This find will return student object will only id of course, if we want to 
      // load related documents then we need to call populate
      //const student = await Student.find({_id: "5f8087bcc936e131c8173ef3" });
      //5fb04c079edac23b558739bb
      const student = await Student.find({_id: "5fb04c079edac23b558739bb" }).populate("course");
      console.log("Result: ",student);
    }
    catch(error) {
      console.log(error);
    }
})();