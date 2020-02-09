import React from 'react';
import { Button, Modal, Form, Icon} from 'semantic-ui-react';


const TaskModal = (props) => {
    
    return (
        <Modal trigger={props.trigger} size="tiny">
            <Modal.Header>Add A New Task</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Group>
                        <Form.Input label="Task" type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label="Category" type="text" />
                    </Form.Group>
                </Form>
                <Modal.Actions>
                    <Button color='green'>
                        <Icon name='checkmark' /> Submit
                    </Button>
                </Modal.Actions>
            </Modal.Content>
        </Modal>
    )
}

export default TaskModal;
