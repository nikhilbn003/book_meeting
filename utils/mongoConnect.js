// utils/mongoose.js
import mongoose from 'mongoose';

const connection = {}; // Global variable to hold the connection

async function dbConnect() {
  if (connection.isConnected) {
    // If the connection is already established, use it
    return;
  }

  try {
    // Connect to MongoDB
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('MongoDB Connected!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default dbConnect;
