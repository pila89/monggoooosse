const express=require('express');
const mongoose=require('mongoose');

const app=express(); //Instansiation Express

mongoose.connect(
    "mongodb+srv://salimamara:22814611@cluster0.ihnet.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    (error) => {
      try {
        console.log('connected to database..;');
      } catch (error) {
        console.log(error);
      }
    }
  );
  app.use(express.json());
app.use("/person", require("./src/routes/person"));





  const Port =8000
app.listen(Port,(err)=>{
err?console.log(err):console.log(  `the server is running on the ${Port} `);
})
