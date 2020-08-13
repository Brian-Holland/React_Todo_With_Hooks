import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondary from '@material-ui/core/ListItemSecondaryAction';

function Todo({ task, completed }) {
	return (
		<ListItem>
			<Checkbox tabIndex={-1} checked={completed} />
			<ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
			<ListItemSecondary>
				<IconButton aria-label="Delete">
					<EditIcon />
				</IconButton>
				<IconButton aria-label="Edit">
					<DeleteIcon />
				</IconButton>
			</ListItemSecondary>
		</ListItem>
	);
}

export default Todo;