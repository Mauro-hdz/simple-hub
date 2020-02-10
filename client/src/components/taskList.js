import React from 'react';
import { List, Card, Grid, Icon, Checkbox } from 'semantic-ui-react';

const TaskList = () => (
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
    <Card fluid color='red' className="task-card">
      <Card.Content>
        <Grid columns='4'>
			<Grid.Row>
				<Grid.Column>
					<Checkbox label="Completed" />
				</Grid.Column>
				<Grid.Column>
					<Card.Header as="h4">Onboard new developer</Card.Header>
				</Grid.Column>
				<Grid.Column>
					<Card.Content>IT</Card.Content>
				</Grid.Column>
				<Grid.Column>
					<Icon name="trash alternate outline" color="red" size="large" />
				</Grid.Column>
			</Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  </List>
)

export default TaskList;