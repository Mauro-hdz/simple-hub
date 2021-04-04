import React, { Component } from 'react';
import { Header, Grid, Menu } from 'semantic-ui-react';
import MeetingCard from '../components/MeetingCard';
import MeetingModal from '../components/MeetingModal';
import axios from 'axios';

class Meetings extends Component {
	state = {
		meetings: [],
		showMeetingModal: false,
	};

	componentDidMount() {
		axios
			.get('/api/meeting/all')
			.then((res) => {
				this.setState({
					meetings: res.data.data,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.showMeetingModal !== prevState.showMeetingModal) {
			axios
				.get('/api/meeting/all')
				.then((res) => {
					this.setState({
						meetings: res.data.data,
					});
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}

	render() {
		return (
			<div>
				<MeetingModal
					showModal={this.state.showMeetingModal}
					onClose={() => this.setState({ showMeetingModal: false })}
				/>
				<Grid>
					<Grid.Row>
						<Menu secondary>
							<Menu.Item>
								<Header as='h1' size='huge' floated='left'>
									Meetings
								</Header>
							</Menu.Item>
							<Menu.Item>
								<button
									bp='padding--sm'
									className='modal-button'
									onClick={() => this.setState({ showMeetingModal: true })}
								>
									+ New Meeting
								</button>
							</Menu.Item>
						</Menu>
					</Grid.Row>
				</Grid>
				<Grid>
					<Grid.Row>
						{/* Render all meeting cards here */}
						{this.state.meetings.map((meeting) => (
							<MeetingCard
								subject={meeting.subject}
								location={meeting.location}
								date={meeting.date}
								time={meeting.time}
								attending={meeting.attending}
								id={meeting.id}
								key={meeting.id}
							/>
						))}
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default Meetings;
