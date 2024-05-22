const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); 
});

module.exports = mongoose.connection;