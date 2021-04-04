import React, { useState } from 'react';
import { Button, Modal, Form, Icon } from 'semantic-ui-react';
import axios from 'axios';

function TaskModal(props) {
	const [task, setTask] = useState('');
	const [category, setCategory] = useState('');

	function onChangeTask(e) {
		setTask(e.target.value);
	}

	function onChangeCategory(e) {
		setCategory(e.target.value);
	}

	async function onClickSubmit(e) {
		const taskObj = {
			task,
			category,
			completed: false,
		};

		const response = await axios.post('/api/task/add', taskObj);

		if (response) {
			setTask('');
			setCategory('');
		}
	}

	return (
		<Modal open={props.showTaskModal} size='tiny' closeOnDimmerClick onClose={props.onClose}>
			<Modal.Header>Add A New Task</Modal.Header>
			<Modal.Content>
				<Form>
					<Form.Group>
						<Form.Input value={task} onChange={onChangeTask} label='Task' type='text' />
					</Form.Group>
					<Form.Group>
						<Form.Input
							value={category}
							onChange={onChangeCategory}
							label='Category'
							type='text'
						/>
					</Form.Group>
				</Form>
				<Modal.Actions>
					<Button color='green' onClick={onClickSubmit}>
						<Icon name='checkmark' /> Submit
					</Button>
				</Modal.Actions>
			</Modal.Content>
		</Modal>
	);
}

export default TaskModal;
