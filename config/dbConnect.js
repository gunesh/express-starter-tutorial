import mongoose from 'mongoose';
const USER = 'usergunesh';
const PASSWORD = 'usergun';
const DB = 'zee5';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.znykm.mongodb.net/${DB}?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`1MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MognoDB Error: , ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
