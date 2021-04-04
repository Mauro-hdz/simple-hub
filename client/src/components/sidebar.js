import React from 'react';
import { Icon, Grid, Menu, Segment, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SidebarMenu = (props) => {
	return (
		<Sidebar.Pushable>
			<Sidebar
				className='sidebar'
				as={Menu}
				animation='push'
				icon='labeled'
				inverted
				vertical
				visible={props.sidebarVisible}
				width='wide'
			>
				<Menu.Header as='h1' className='ui blue'>
					SimpleCRM
				</Menu.Header>
				<Link to='/contacts'>
					<Menu.Item header={true}>
						<Icon name='user' />
						Contacts
					</Menu.Item>
				</Link>

				<Link to='/meetings'>
					<Menu.Item header={true}>
						<Icon name='calendar' />
						Meetings
					</Menu.Item>
				</Link>

				<Link to='/tasks'>
					<Menu.Item header={true}>
						<Icon name='tasks' />
						Tasks
					</Menu.Item>
				</Link>
			</Sidebar>

			<Sidebar.Pusher>
				<Segment basic>
					<Grid.Row className={props.className}>{props.children}</Grid.Row>
				</Segment>
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

export default SidebarMenu;
