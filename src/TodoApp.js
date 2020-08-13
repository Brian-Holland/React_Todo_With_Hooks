import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Code', completed: true },
		{ id: 2, task: 'Code More', completed: true },
		{ id: 3, task: 'Code Forver', completed: false }
	];

	const [ todos, setTodos ] = useState(initialTodos);

	const addTodo = (newTodoText) => {
		//setTodos with existing todos and the new todo
		setTodos([ ...todos, { task: newTodoText, completed: false } ]);
	};

	const removeTodo = (todoId) => {
		//filter out the removed todo
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		//call setTodos with new array of todos
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
					<TodoList todos={todos} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default TodoApp;
