import express, { response } from "express";
import cors from "cors";
import 'dotenv/config'
import './database.js';
import { Todo } from "./models/index.js";


const app = express();
const port = process.env.PORT || 5000;

// to convert body into json
app.use(express.json());
app.use(
  cors({
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
    const obj = {
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
    };
  console.log('obj=>', obj);
  
    // const result = await Todo.create(obj)
    
    response.send({data:obj, message: "todo add ho gaya ha"});
  
});

app.use((request, response) => {
  response.status(404).send({ massage: "no route found!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
