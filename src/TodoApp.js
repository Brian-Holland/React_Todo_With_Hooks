import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
	const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || '[]';

	const [ todos, setTodos ] = useState(initialTodos);

	useEffect(
		() => {
			window.localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);

	const addTodo = (newTodoText) => {
		//setTodos with existing todos and the new todo
		setTodos([ ...todos, { id: uuidv4(), task: newTodoText, completed: false } ]);
	};

	const removeTodo = (todoId) => {
		//filter out the removed todo
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		//call setTodos with new array of todos
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoId) => {
		//map over todos to match id. toggle completed to opposite of current if matches
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo));
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		//map over todos, if ids match, set new task to task. otherwise keep the todo
		const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, task: newTask } : todo));
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa'
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">Todo With Hooks</Typography>
				</Toolbar>
			</AppBar>
			<Grid
				container
				justify="center"
				style={{
					marginTop: '1rem'
				}}
			>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
