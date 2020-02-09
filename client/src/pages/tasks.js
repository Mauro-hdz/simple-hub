import React from 'react';
import TaskList from '../components/taskList';
import TaskModal from '../components/taskModal';
import {Header, Grid, Menu, Button} from 'semantic-ui-react';

const Tasks = () => {
    return (
        <div>
            <Grid>
            <Grid.Row>
                <Menu secondary>
                    <Menu.Item>
                    <Header as='h1' size='huge' floated='left'>Tasks</Header>
                    </Menu.Item>
                    <Menu.Item>
                        <TaskModal trigger={
                        <Button color='orange' inverted>+ New Task</Button>
                        } />
                    </Menu.Item>
                </Menu>
            </Grid.Row>
            </Grid>
            <TaskList />
        </div>
    )
}

export default Tasks;