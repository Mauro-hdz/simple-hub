import React, { useState } from 'react';
import { Button, Modal, Form, Grid, Icon } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import axios from 'axios';

function ContactModal(props) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [name, setName] = useState('');
	const [title, setTitle] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');

	function onChangeFirstName(e) {
		setFirstName(e.target.value);
		setName(e.target.value + ' ' + lastName);
	}

	function onChangeLastName(e) {
		setLastName(e.target.value);
		setName(firstName + ' ' + e.target.value);
	}

	function onChangeTitle(e) {
		setTitle(e.target.value);
	}

	function onChangePhoneNumber(e) {
		setPhoneNumber(e.target.value);
	}

	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	function onClickSubmit() {
		const contact = {
			name,
			title,
			email,
			phoneNumber,
		};
		axios
			.post('/api/contact/add', contact)
			.then((res) => {
				setFirstName('');
				setLastName('');
				setName('');
				setTitle('');
				setPhoneNumber('');
				setEmail('');

				props.rerenderParent();
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
	}

	return (
		<Modal open={props.showContactModal} size='tiny'>
			<Modal.Header>Add A New Contact</Modal.Header>
			<Modal.Content>
				<Form>
					<Form.Group>
						<Form.Input
							value={firstName}
							onChange={onChangeFirstName}
							label='First Name'
							placeholder='First Name'
						/>
						<Form.Input
							value={lastName}
							onChange={onChangeLastName}
							label='Last Name'
							placeholder='Last Name'
						/>
					</Form.Group>
					<Form.Group>
						<Form.Input
							value={title}
							onChange={onChangeTitle}
							label='Job Title'
							placeholder='i.e accountant'
						/>
					</Form.Group>
					<Form.Group>
						<Grid.Row>
							<Grid.Column className='ui field' width={12}>
								<label>Phone Number</label>
								<Form.Input
									value={phoneNumber}
									onChange={onChangePhoneNumber}
									placeholder='(100)-100-1000'
									as={InputMask}
									mask='(999)-999-9999'
								/>
							</Grid.Column>
						</Grid.Row>
					</Form.Group>
					<Form.Group>
						<Form.Input
							value={email}
							onChange={onChangeEmail}
							label='Email'
							placeholder='Parker@StarkIndustries.com'
						/>
					</Form.Group>
				</Form>
				<Modal.Actions>
					{/* <Button color='red'>
                            <Icon name='remove' /> Cancel
                        </Button> */}
					<Button onClick={onClickSubmit} color='green'>
						<Icon name='checkmark' /> Submit
					</Button>
				</Modal.Actions>
			</Modal.Content>
		</Modal>
	);
}

export default ContactModal;
