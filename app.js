import express from 'express'
// import dotenv from 'dotenv'
import userroutes from'./routes/userroutes.js'
import cookieParser from 'cookie-parser';
import productroutes from "./routes/productroutes/productroutes.js";

const app = express();

// dotenv.config()

const PORT = process.env.PORT||5000;

app.use(express.json());
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Server is live")
});

app.use("/api/user",userroutes);
app.use("/api/products",productroutes);

app.listen(PORT,()=>{
    console.log(`Server is Live at port ${PORT}`);
})


