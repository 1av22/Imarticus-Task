import mongoose from 'mongoose';
import Course from './models/Course.js';
import Module from './models/Module.js';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing data
    await Course.deleteMany({});
    await Module.deleteMany({});
    console.log('Cleared old data');

    // Create modules with all the data you provided
    const modules = [
      {
        title: 'Introduction to Machine Learning',
        videos: [
          { title: 'What is Machine Learning?', duration: '12:34', url: 'https://example.com/video1' },
          { title: 'History of Machine Learning', duration: '10:45', url: 'https://example.com/video2' },
        ],
      },
      {
        title: 'Concepts of Machine Learning',
        videos: [
          { title: 'Linear Regression', duration: '15:30', url: 'https://example.com/video3' },
          { title: 'Polynomial Regression', duration: '18:10', url: 'https://example.com/video4' },
          { title: 'Overfitting and Underfitting', duration: '14:20', url: 'https://example.com/video5' },
        ],
      },
      {
        title: 'Applications of Machine Learning',
        videos: [
          { title: 'ML in Real-World Applications', duration: '20:30', url: 'https://example.com/video6' },
          { title: 'Future of Machine Learning', duration: '12:45', url: 'https://example.com/video7' },
        ],
      },
      {
        title: 'Neural Networks and Deep Learning',
        videos: [
          { title: 'Introduction to Neural Networks', duration: '16:40', url: 'https://example.com/video8' },
          { title: 'Backpropagation Algorithm', duration: '22:50', url: 'https://example.com/video9' },
          { title: 'Convolutional Neural Networks (CNNs)', duration: '19:25', url: 'https://example.com/video10' },
        ],
      },
      {
        title: 'Advanced Topics in Machine Learning',
        videos: [
          { title: 'Reinforcement Learning Basics', duration: '25:00', url: 'https://example.com/video11' },
          { title: 'Natural Language Processing (NLP)', duration: '18:30', url: 'https://example.com/video12' },
          { title: 'Generative Adversarial Networks (GANs)', duration: '20:15', url: 'https://example.com/video13' },
        ],
      },
    ];

    // Insert modules into the database and get their ObjectIds
    const createdModules = await Promise.all(
      modules.map(async (mod) => {
        const newModule = new Module(mod);
        await newModule.save();  // Save each module
        return newModule._id;  // Return module ObjectId
      })
    );

    console.log('Modules created');

    // Create the course and link it to the modules
    const course = new Course({
      title: 'Introduction to Machine Learning',
      description: 'A comprehensive introduction to the fundamentals of Machine Learning.',
      modules: createdModules,  // Link the modules using their ObjectIds
    });

    await course.save();
    console.log('Course created:', course);

    // Close the database connection
    await mongoose.disconnect();
    console.log('Database seeded and connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);  // Exit process with failure code
  }
};

// Run the seeding function
seedDatabase();
