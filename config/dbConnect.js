import mongoose from 'mongoose';
const USER = 'usergunesh';
const PASSWORD = 'usergun';
const DB = 'zee5';

const connectDB = () => {
  try {
    const conn =  mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@cluster0.znykm.mongodb.net/${DB}?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected: `,conn);
  } catch (error) {
    console.log(`MognoDB Error: , `,error);
    process.exit(1);
  }
};

export default connectDB;
