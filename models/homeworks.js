const mongoose = require('mongoose');

const { Schema } = mongoose;

const homeworkSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	points: {
		type: Number,
		required: true
	},
	dueDate: {
		type: Date,
		required: true
	},
	class: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Homework', homeworkSchema);
