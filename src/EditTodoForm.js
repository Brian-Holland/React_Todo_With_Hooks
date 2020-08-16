import React from 'react';
import useInputState from './Hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ editTodo, id, task, toggleEdit }) {
	const [ value, handleChange, reset ] = useInputState(task);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editTodo(id, value);
				reset();
				toggleEdit();
			}}
			style={{
				marginLeft: '1rem',
				width: '50%'
			}}
		>
			<TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
		</form>
	);
}

export default EditTodoForm;
