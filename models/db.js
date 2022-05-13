const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Admin:jana1729J@barcodebillgenerator.h7ziz.mongodb.net/BillFields?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));
