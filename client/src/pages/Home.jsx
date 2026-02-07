import { useState, useEffect } from "react"
import Task from "../components/ui/Task"
import TaskList from "../components/ui/TaskList"
import SearchForm from "../components/ui/SearchForm"

const Home = () => {
	const [tasks, setTasks] = useState([])
	const [filteredTasks, setFilteredTasks] = useState([])

	useEffect(() => {fetchTasks()}, [])

	const fetchTasks = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/tasks')
			const data = await response.json()
			setTasks(data)
			setFilteredTasks(data)
		} catch (error) {
			console.error('Error fetching tasks:', error)
		}
	}

	const getTrigrams = (text) => {
		const normalized = text.toLowerCase()
		const trigrams = []
		for (let i = 0; i < normalized.length - 2; i++) {
			trigrams.push(normalized.slice(i, i + 3))
		}
		return trigrams
	}

	const handleSearch = (query) => {
		if (!query.trim()) {
			setFilteredTasks(tasks)
			return
		}

		const queryTrigrams = getTrigrams(query)
		
		const results = tasks.map(task => {
			const titleTrigrams = getTrigrams(task.title)
			const descTrigrams = getTrigrams(task.description)
			
			let score = 0
			queryTrigrams.forEach(qTrigram => {
				if (titleTrigrams.includes(qTrigram)) score += 2
				if (descTrigrams.includes(qTrigram)) score += 1
			})
			
			return { task, score }
		})

		const filtered = results
			.filter(r => r.score > 0)
			.sort((a, b) => b.score - a.score)
			.map(r => r.task)

		setFilteredTasks(filtered)
	}

	const handleTaskCreated = (newTask) => {
		const updatedTasks = [newTask, ...tasks]
		setTasks(updatedTasks)
		setFilteredTasks(updatedTasks)
	}

	const handleDeleteTask = (id) => {
		const updatedTasks = tasks.filter(task => task._id !== id)
		setTasks(updatedTasks)
		setFilteredTasks(updatedTasks)
	}

	const handleUpdateTask = (updatedTask) => {
		const updatedTasks = tasks.map(task => 
			task._id === updatedTask._id ? updatedTask : task
		)
		setTasks(updatedTasks)
		setFilteredTasks(updatedTasks)
	}

	return (
		<section className="grid xl:grid-cols-[400px_1fr] gap-5 w-full">
			<div className="w-full space-y-5">
				<SearchForm onSearch={handleSearch} />
				<Task onTaskCreated={handleTaskCreated} />
			</div>
			<div className="w-full min-w-0">
				<TaskList 
					tasks={filteredTasks} 
					onDeleteTask={handleDeleteTask}
					onUpdateTask={handleUpdateTask}
				/>
			</div>
		</section>
	)
}

export default Home