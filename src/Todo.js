import React, { Fragment } from 'react';
import EditTodoForm from './EditTodoForm';
import useToggleState from './Hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondary from '@material-ui/core/ListItemSecondaryAction';

function Todo({ task, completed, removeTodo, id, toggleTodo, editTodo }) {
	const [ isEditing, toggle ] = useToggleState(false);

	return (
		<ListItem style={{
			height:"64px"
		}}>
			{isEditing ? (
				<EditTodoForm editTodo={editTodo} id={id} task={task} toggleEdit={toggle} />
			) : (
				<Fragment>
					<Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
					<ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
					<ListItemSecondary>
						<IconButton aria-label="Edit" onClick={toggle}>
							<EditIcon />
						</IconButton>
						<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
							<DeleteIcon />
						</IconButton>
					</ListItemSecondary>
				</Fragment>
			)}
		</ListItem>
	);
}

export default Todo;
