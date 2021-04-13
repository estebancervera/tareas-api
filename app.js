require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// DB config

const db = process.env.MONGODB_URI;

var origins = {
	origin: ['*'],
	optionsSuccessStatus: 200,
	credentials: false
};

// CONNECT TO MONGO
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(err));

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes

/*
    === API ===
*/

app.use('/homework', require('./routes/homeworks'));

//Listen

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
