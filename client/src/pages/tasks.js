import React, { Component } from 'react';
import TaskModal from '../components/TaskModal';
import TaskCard from '../components/TaskCard';
import {Header, Grid, Menu, Button, List, Card } from 'semantic-ui-react';
import axios from 'axios';

class Tasks extends Component {
    state = {
        tasks: []
    };

    componentDidMount() {
        axios.get('/api/task/all')
        .then(res => {
            this.setState({
                tasks: res.data.data
            });
        })
        .catch(err => console.log('GET Request Error: ', err))
    };

    rerender = () => {
        axios.get('/api/task/all')
        .then(res => {
            this.setState({
                tasks: res.data.data
            });
        })
        .catch(err => console.log('GET Request Error: ', err))
    }

    render() {
        return (
            <div>
            <Grid>
                <Grid.Row>
                    <Menu secondary>
                        <Menu.Item>
                            <Header as='h1' size='huge' floated='left'>Tasks</Header>
                        </Menu.Item>
                        <Menu.Item>
                            <TaskModal rerenderParent={this.rerender} trigger={
                                <Button color='orange' inverted>+ New Task</Button>
                            } />
                        </Menu.Item>
                    </Menu>
                </Grid.Row>
            </Grid>
            <List verticalAlign='middle' className="margin-top">
                <Card fluid color='blue' className="task-card">
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
            {this.state.tasks.map(task => {
                return (
                    <TaskCard
                    task={task.task}
                    category={task.category}
                    key={task.id}
                    />
                )
            })}
            </List>
        </div>
        )
    }
};

export default Tasks;