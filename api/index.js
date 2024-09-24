import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import MentorRoutes from './routes/mentor.route.js';
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js';
import path from 'path';
import { fileURLToPath } from 'url'; // Needed for __dirname in ES modules
import helmet from 'helmet';  // Security middleware
import rateLimit from 'express-rate-limit'; // Rate limiting
import cors from 'cors'; // CORS handling

dotenv.config();

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware: Security, CORS, JSON Parsing, Cookie Parsing
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Rate Limiting: Prevent API abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// MongoDB Connection
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// Register API Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/mentor', MentorRoutes);

// Serve static files from the Vite frontend
// app.use(express.static(path.join(__dirname, 'client/dist')));

// Route to serve the frontend
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(err); // Log the error

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
