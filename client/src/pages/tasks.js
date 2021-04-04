import React, { Component } from 'react';
import TaskModal from '../components/TaskModal';
import TaskCard from '../components/TaskCard';
import { Header, Grid, Menu, List, Card } from 'semantic-ui-react';
import axios from 'axios';

class Tasks extends Component {
	state = {
		tasks: [],
		showTaskModal: false,
	};

	componentDidMount() {
		axios
			.get('/api/task/all')
			.then((res) => {
				this.setState({
					tasks: res.data.data,
				});
			})
			.catch((err) => console.log('GET Request Error: ', err));
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.showTaskModal !== this.state.showTaskModal) {
			axios
				.get('/api/task/all')
				.then((res) => {
					this.setState({
						tasks: res.data.data,
					});
				})
				.catch((err) => console.log('GET Request Error: ', err));
		}
	}

	deleteTask = async (id) => {
		const response = await axios.delete(`/api/task/delete/${id}`);
		if (response) {
			const newTasks = this.state.tasks.filter((task) => task.id !== id);
			this.setState({ tasks: newTasks });
		}
	};

	render() {
		return (
			<div>
				<TaskModal
					showTaskModal={this.state.showTaskModal}
					onClose={() => this.setState({ showTaskModal: false })}
				/>
				<div bp='grid'>
					<div bp='12'>
						<Menu secondary>
							<Menu.Item>
								<Header as='h1' size='huge' floated='left'>
									Tasks
								</Header>
							</Menu.Item>
							<Menu.Item>
								<button
									bp='padding--sm'
									className='modal-button'
									onClick={() => {
										this.setState({ showTaskModal: !this.state.showTaskModal });
									}}
								>
									+ New Task
								</button>
							</Menu.Item>
						</Menu>
					</div>
				</div>
				<List verticalAlign='middle' className='margin-top'>
					<Card fluid color='blue' className='task-card'>
						<Card.Content>
							<Grid columns='4'>
								<Grid.Row>
									<Grid.Column>
										<h4>Completed</h4>
									</Grid.Column>
									<Grid.Column>
										<h4>Task</h4>
									</Grid.Column>
									<Grid.Column>
										<h4>Category</h4>
									</Grid.Column>
									<Grid.Column>
										<h4>Delete</h4>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Card.Content>
					</Card>
					{/* Begin rendering task cards here */}
					{this.state.tasks.map((task) => {
						return (
							<TaskCard
								task={task.task}
								checked={task.completed}
								category={task.category}
								id={task.id}
								clickDelete={this.deleteTask}
								key={task.id}
							/>
						);
					})}
				</List>
			</div>
		);
	}
}

export default Tasks;
