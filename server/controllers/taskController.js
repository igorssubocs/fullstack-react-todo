const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
	try {
		const tasks = await Task.find().sort({ 
			createdAt: -1 
		})
		res.json(tasks)
	} catch (error) {
		res.status(500).json({ 
			message: error.message 
		})
	}
}

exports.createTask = async (req, res) => {
	try {
		const { 
			title, 
			description
		} = req.body
		const task = new Task({ 
			title, 
			description 
		})
		const savedTask = await task.save()
		res.status(201).json(savedTask)
	} catch (error) {
		res.status(400).json({ 
			message: error.message 
		})
	}
}

exports.deleteTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id)

		if (!task) {
			return res.status(404).json({ 
				message: 'Task not found' 
			})
		}
		res.json({ 
			message: 'Task deleted successfully' 
		})
	} catch (error) {
		res.status(500).json({ 
			message: error.message 
		})
	}
}

exports.updateTask = async (req, res) => {
	try {
		const { 
			title, 
			description 
		} = req.body
		const task = await Task.findByIdAndUpdate(
			req.params.id,
			{ title, description },
			{ new: true, runValidators: true }
		)
		if (!task) {
			return res.status(404).json({ 
				message: 'Task not found' 
			})
		}
		res.json(task)
	} catch (error) {
		res.status(400).json({ 
			message: error.message 
		})
	}
}