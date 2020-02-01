import React from 'react';
import { Button, Image, List } from 'semantic-ui-react';

const TaskList = () => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <List.Content floated='left'>Lena</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
      <List.Content>Lindsay</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
      <List.Content>Mark</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>Add</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
      <List.Content>Molly</List.Content>
    </List.Item>
  </List>
)

export default TaskList;