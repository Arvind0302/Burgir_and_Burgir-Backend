import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const connectDB = async()=>{
    const {connection} = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,});
    console.log(`Database is connected with ${connection.host}`)
}

export default connectDB;