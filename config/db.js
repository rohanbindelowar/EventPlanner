const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://ecommerceproject04:FijjC5ewskK1U8EXs@eventplanner.yteoqng.mongodb.net/?retryWrites=true&w=majority&appName=EventPlanner', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = {
  mongoURI: 'mongodb+srv://ecommerceproject04:PHMKeHqa5fs7Je4k@eventplanner.yteoqng.mongodb.net/?retryWrites=true&w=majority&appName=EventPlanner',
};

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
