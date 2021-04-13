const Homework = require('../models/homeworks');

async function getAllTareas(req, res) {
	try {
		//console.log(req.body);
		const hws = await Homework.find({});

		res.status(200).json(hws);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: true, msg: 'ERROR' });
	}
}

async function createHomework(req, res) {
	try {
		//console.log(req.body);
		let hw = await new Homework(req.body);
		hw.save()
			.then(result => {
				res.status(200).json({ error: false, msg: 'Homework created', data: result });
			})
			.catch(error => {
				//console.error(error);
				res.status(500).json({ error: true, msg: 'ERROR SAVE' });
			});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: true, msg: 'ERROR' });
	}
}

async function updateHomework(req, res) {
	try {
		const hw = await Homework.findByIdAndUpdate(req.params.id, req.body).catch(error => {
			console.log(error);
			res.status(500).json({ error: true, msg: 'ERROR UPDATE' });
		});

		res.status(200).json({ error: false, msg: 'Homework updated', data: hw });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: true, msg: 'ERROR' });
	}
}

async function deleteHomework(req, res) {
	try {
		await Homework.findByIdAndDelete(req.params.id).catch(error => {
			console.log(error);
			res.status(500).json({ error: true, msg: 'ERROR DELETE' });
		});

		res.status(200).json({ error: false, msg: 'Homework Deleted' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: true, msg: 'ERROR' });
	}
}

module.exports = {
	createHomework,
	updateHomework,
	getAllTareas,
	deleteHomework
};
