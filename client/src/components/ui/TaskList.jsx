import { useState } from 'react'
import { Trash, Pencil, Check, X } from 'lucide-react'

const TaskList = ({ tasks = [], onDeleteTask, onUpdateTask }) => {
	const [editingId, setEditingId] = useState(null)
	const [editTitle, setEditTitle] = useState('')
	const [editDescription, setEditDescription] = useState('')

	if (!tasks.length) {
		return (
			<div className="p-8 bg-white rounded-3xl text-neutral-400">
				No tasks yet
			</div>
		)
	}

	const handleDelete = async (id) => {
		try {
			await fetch(`http://localhost:5000/api/tasks/${id}`, {
				method: 'DELETE'
			})
			onDeleteTask(id)
		} catch (error) {
			console.error('Error deleting task:', error)
		}
	}

	const handleEdit = (task) => {
		setEditingId(task._id)
		setEditTitle(task.title)
		setEditDescription(task.description)
	}

	const handleCancelEdit = () => {
		setEditingId(null)
		setEditTitle('')
		setEditDescription('')
	}

	const handleSaveEdit = async (id) => {
		if (!editTitle.trim() || !editDescription.trim()) return

		try {
			const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					title: editTitle, 
					description: editDescription 
				})
			})
			const updatedTask = await response.json()
			onUpdateTask(updatedTask)
			setEditingId(null)
			setEditTitle('')
			setEditDescription('')
		} catch (error) {
			console.error('Error updating task:', error)
		}
	}

	return (
		<ul className="p-5 bg-white rounded-3xl space-y-5 max-w-full max-h-[600px] overflow-y-auto">
			{tasks.map((task) => (
				<li key={task._id} className="p-5 rounded-xl ring-1 ring-neutral-200 flex items-center gap-3 max-w-full">
					{editingId === task._id ? (
						<>
							<div className="flex-1 space-y-3">
								<input
									type="text"
									value={editTitle}
									onChange={(e) => setEditTitle(e.target.value)}
									maxLength={100}
									className="w-full py-2 px-3 rounded-lg ring-1 ring-neutral-200 focus:ring-2 focus:ring-blue-500 outline-none"
									placeholder="Task title"
								/>
								<input
									type="text"
									value={editDescription}
									onChange={(e) => setEditDescription(e.target.value)}
									maxLength={120}
									className="w-full py-2 px-3 rounded-lg ring-1 ring-neutral-200 focus:ring-2 focus:ring-blue-500 outline-none"
									placeholder="Task description"
								/>
							</div>
							<div className="flex gap-1">
								<button
									onClick={() => handleSaveEdit(task._id)}
									className="p-3 rounded-full text-neutral-400 hover:text-green-600 hover:bg-green-50 transition-all flex-shrink-0"
									aria-label="Save"
								>
									<Check size={20} />
								</button>
								<button
									onClick={handleCancelEdit}
									className="p-3 rounded-full text-neutral-400 hover:text-gray-600 hover:bg-gray-50 transition-all flex-shrink-0"
									aria-label="Cancel"
								>
									<X size={20} />
								</button>
							</div>
						</>
					) : (
						<>
							<div className="flex-1 overflow-hidden space-y-2">
								<h3 className="font-medium break-words">
									{task.title}
								</h3>
								<p className="text-sm text-neutral-500 break-words">
									{task.description}
								</p>
							</div>
							<div className="flex gap-1">
								<button
									onClick={() => handleEdit(task)}
									className="p-3 rounded-full text-neutral-400 hover:text-yellow-500 hover:bg-yellow-50 transition-all flex-shrink-0"
									aria-label="Edit"
								>
									<Pencil size={20} />
								</button>
								<button
									onClick={() => handleDelete(task._id)}
									className="p-3 rounded-full text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-all flex-shrink-0"
									aria-label="Delete"
								>
									<Trash size={20} />
								</button>
							</div>
						</>
					)}
				</li>
			))}
		</ul>
	)
}

export default TaskList