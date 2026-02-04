import express from "express"
import userRouter from"./routes/users.routes.js";

const app = express();

//BODY PARSER
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("User Management Api is running");
})


app.use("/api/users", userRouter);

export default app;