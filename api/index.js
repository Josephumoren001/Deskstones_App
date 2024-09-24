import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import MentorRoutes from './routes/mentor.route.js';
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

dotenv.config();

// Create a class for the App
class Server {
  constructor() {
    this.app = express();
    this.configMiddleware();
    this.setupDatabase();
    this.registerRoutes();
    this.startServer();
  }

  // Setup middleware
  configMiddleware() {
    this.app.use(helmet());
    this.app.use(cors({
      origin: 'http://www.deskstones.com', // Replace with actual domain
      credentials: true,
    }));
    
    this.app.use(express.json());
    this.app.use(cookieParser());

    const limiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per windowMs
    });
    this.app.use(limiter);
  }

  // Setup database connection
  setupDatabase() {
    mongoose.connect(process.env.MONGO)
      .then(() => {
        console.log('MongoDB is connected');
      })
      .catch((err) => {
        console.error('MongoDB connection error:', err.message);
      });
  }

  // Register API routes
  registerRoutes() {
    this.app.use('/api/user', userRoutes);
    this.app.use('/api/auth', authRoutes);
    this.app.use('/api/post', postRoutes);
    this.app.use('/api/comment', commentRoutes);
    this.app.use('/api/mentor', MentorRoutes);
    
    // Error handling middleware
    this.app.use((err, req, res, next) => {
      const statusCode = err.statusCode || 500;
      const message = err.message || 'Internal Server Error';
      console.error(err); // Log the error
      res.status(statusCode).json({
        success: false,
        statusCode,
        message,
      });
    });
  }

  // Start the server
  startServer() {
    const PORT = process.env.PORT || 8080;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

// Create a new instance of the Server class
new Server();
