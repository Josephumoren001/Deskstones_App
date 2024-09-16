import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import MentorRoutes from './routes/mentor.route.js';
import cookieParser from 'cookie-parser';
import commentRoutes from './routes/comment.route.js'
import path from 'path';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((err) => {
    console.log(err);
  });

  const __dirname = path.resolve();
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Registering routes
app.use('/api/user', userRoutes); // Correct route setup
app.use('/api/auth', authRoutes); // Corrected the route path here
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/mentor', MentorRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


// Start the server
app.listen(8080, () => {
  console.log('Server is running on port 8080!!!');
});
 
app.use((err, req, res, next) => {
  const stateCode = err.stateCode || 500;
  const message = err.message || 'Internal Serval Error';
  res.status(stateCode).json({
    succuss: false,
    stateCode,
    message
  })
});