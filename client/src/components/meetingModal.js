import React, { Component } from 'react';
import { Button, Modal, Form, Icon, List } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import axios from 'axios';

class MeetingModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			subject: '',
			location: '',
			date: '',
			time: '',
			hour: '',
			AmPm: '',
			person: '',
			people: [],
		};
	}

	onClickAddPerson = (event) => {
		this.setState({
			people: [...this.state.people, this.state.person],
			person: '',
		});
	};

	onChangePerson = (e) => {
		this.setState({ person: e.target.value });
	};

	onClickRemovePerson = (person) => {
		const index = this.state.people.findIndex((element) => element === person);
		this.state.people.splice(index, 1);
		this.setState({
			people: this.state.people,
		});
	};

	onChangeSubject = (e) => {
		this.setState({
			subject: e.target.value,
		});
	};

	onChangeLocation = (e) => {
		this.setState({
			location: e.target.value,
		});
	};

	onChangeDate = (e) => {
		this.setState({
			date: e.target.value,
		});
	};

	onChangeHour = (e) => {
		this.setState({
			hour: e.target.value,
			time: e.target.value + ' ' + this.state.AmPm,
		});
	};

	onChangeAmPm = (e, { value }) => {
		this.setState({
			AmPm: value,
			time: this.state.hour + ' ' + value,
		});
	};

	onClickSubmit = async (e) => {
		const meeting = {
			subject: this.state.subject,
			location: this.state.location,
			date: this.state.date,
			time: this.state.time,
			attending: this.state.people.join(', '),
		};
		const response = await axios.post('/api/meeting/add', meeting);

		if (response) {
			this.setState({
				subject: '',
				location: '',
				date: '',
				time: '',
				hour: '',
				AmPm: '',
				person: '',
				people: [],
			});
		}
	};

	render() {
		const timeOptions = [
			{ text: 'AM', value: 'AM' },
			{ text: 'PM', value: 'PM' },
		];

		return (
			<Modal open={this.props.showModal} size='small' onClose={this.props.onClose}>
				<Modal.Header>Add A New Meeting</Modal.Header>
				<Modal.Content>
					<Form>
						<Form.Group>
							<Form.Input
								value={this.state.subject}
								onChange={this.onChangeSubject}
								label='Subject'
								placeholder='i.e consultation'
							/>
						</Form.Group>
						<Form.Group>
							<Form.Input
								value={this.state.location}
								onChange={this.onChangeLocation}
								label='Location'
								placeholder='i.e Dallas, 123 Sesame St.'
							/>
						</Form.Group>
						<Form.Group>
							<Form.Field>
								<label>Date</label>
								<Form.Input
									value={this.state.date}
									onChange={this.onChangeDate}
									className='ui input'
									as={InputMask}
									mask='99/99/9999'
									placeholder='01/15/2020'
								/>
							</Form.Field>
							<Form.Field>
								<label>Time</label>
								<Form.Field
									value={this.state.hour}
									onChange={this.onChangeHour}
									as={InputMask}
									placeholder='i.e 04:29'
									mask='99:99'
									className='ui input'
								/>
							</Form.Field>
							<Form.Field>
								<label>AM/PM</label>
								<Form.Select
									onChange={this.onChangeAmPm}
									placeholder='i.e PM'
									options={timeOptions}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group inline>
							<Form.Field>
								<label>Add People</label>
								<Form.Input
									id='person-input'
									value={this.state.person}
									onChange={this.onChangePerson}
									placeholder='i.e Elon Musk'
								/>
							</Form.Field>
							<Button
								id='add-person'
								className='margin-top-button'
								onClick={this.onClickAddPerson}
								color='green'
							>
								Add Person
							</Button>
						</Form.Group>
					</Form>
					<List>
						{this.state.people.map((person) => {
							return (
								<List.Item key={person}>
									<List.Icon
										value={person}
										color='red'
										onClick={() => this.onClickRemovePerson(person)}
										link
										name='x'
									/>
									<List.Content>{person}</List.Content>
								</List.Item>
							);
						})}
					</List>
					<Modal.Actions>
						<Button onClick={this.onClickSubmit} color='green'>
							<Icon name='checkmark' /> Submit
						</Button>
					</Modal.Actions>
				</Modal.Content>
			</Modal>
		);
	}
}

export default MeetingModal;
