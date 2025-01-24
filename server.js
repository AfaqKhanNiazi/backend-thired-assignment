import express, { response } from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import 'dotenv/config'
import './database.js';
import { Todo, User } from "./models/index.js";
import jwt from "jsonwebtoken";

const app = express();
const port = process.env.PORT || 5002;

// to convert body into json
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173","https://todo-list-mongodb.surge.sh",
    ],
  }),
);
 
app.get("/api/v1/todos", async(request, response) => {

 try {
  const todos = await Todo.find(
    {},
    // {ip:0, __v:0, updatedAt: 0 });
    {todoContent:1}
  );
  
    const message = !todos.length ? "todos empty" : "ye lo sub todos";
    response.status(200).send({ data: todos, message: message });
 } catch (error) {
  response.status(500).send("internal server error");
 }
});



app.post("/api/v1/signup", async(request, response) => {
    if(!request.body.name || !request.body.email || !request.body.password){
      response.status(400).send({message: "Parameters missing"});
      return
    }

    const user = await User.findOne({email: request.body.email})
  if (user) {
    response.status(400).send({message: "Email already exist"});
    return
  }

  const encryptedPassword = await bcrypt.hash(request.body.password, 10)

  // console.log('encryptedPassword', encryptedPassword);
  

    const result = await User.create({
      name: request.body.name,
      email: request.body.email,
      password: encryptedPassword,
    });
    
    response.send({data: result, message: "signup successfully"});
  
});

app.post("/api/v1/login", async(request, response) => {

  const result = await User.findOne({email: request.body.email})
  console.log('result', result);
  
  if(!result){
  response.status(404).send({message: "user not found"});
  return;
  } 
  const match = await bcrypt.compare(request.body.password, result.password);

  // if (result.password !== request.body.password){
  if (!match){
    response.status(400).send({message: "password not match"});
    return;
    
  }
     
  const token = jwt.sign(
    {
        _id: result._id,
        email: result.email,
    },
    "SECRET@@##$$fdsf342fdqwf",
    { expiresIn: "7d"}
);
  
  response.cookie("my-token",token,{
    expires:
    new Date(Date.now() + 86400000*7),
    secure: true,httpOnly: true

  }).send({message: "login successfully",});

});


app.use((request, response) => {
  response.status(404).send({ massage: "no route found!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
