import React, { Component } from 'react';
import { Button, Modal, Form, Icon} from 'semantic-ui-react';
import axios from 'axios';


class TaskModal extends Component {
    constructor(props) {
        super(props);

        this.onChangeTask = this.onChangeTask.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);

        this.state = {
            task: '',
            category: ''
        }
    }

    onChangeTask(e) {
        this.setState({
            task: e.target.value
        })
    };

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    };

    onClickSubmit(e) {
        const taskObj = {
            task: this.state.task,
            category: this.state.category,
            completed: false
        };
        axios.post('/api/task/add', taskObj)
        .then(res => {
            this.setState({
                task: '',
                category: ''
            });
            console.log(res)
            this.props.rerenderParent();
        })
        .catch(err => {
            console.log('Error: ', err)
        })
    }

    render() {
        return (
            <Modal trigger={this.props.trigger} size="tiny">
                <Modal.Header>Add A New Task</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Input value={this.state.task} onChange={this.onChangeTask} label="Task" type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input value={this.state.category} onChange={this.onChangeCategory} label="Category" type="text" />
                        </Form.Group>
                    </Form>
                    <Modal.Actions>
                        <Button color='green' onClick={this.onClickSubmit}>
                            <Icon name='checkmark' /> Submit
                        </Button>
                    </Modal.Actions>
                </Modal.Content>
            </Modal>
        )
    }
}

export default TaskModal;
