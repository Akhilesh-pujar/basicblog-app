const express = require("express")
const app = express();
const cors = require("cors")
const apiroutes = require('./routes/api');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');
const dotenv = require("dotenv");
const connectToDatabase = require('./config/db');
const config = require('./config/config');

dotenv.config();

const corsoption = {
    origin:"*",
}

app.use(cors(corsoption));
connectToDatabase();

app.use(express.json());


app.use("/getblog", authMiddleware.verifyToken,apiroutes)
app.use('/auth',authRoutes)

app.listen(8000,()=>{
    console.log(`Server running on 8000`)
});