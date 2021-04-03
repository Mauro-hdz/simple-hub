import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';

import Sidebar from './components/Sidebar';
import Nav from './components/Navbar';

import Contacts from './pages/Contacts';
import Meetings from './pages/Meetings';
import Tasks from './pages/Tasks';
import EditMeeting from './pages/EditMeeting';
import EditContact from './pages/EditContact';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';

class App extends Component {
	state = {
		user: {
			loggedIn: true,
		},
		visible: true,
		container: 'no-left-margin',
	};

	onClickNav = () => {
		if (this.state.visible === true) {
			this.setState({ visible: false, container: 'ui container' });
		} else {
			this.setState({ visible: true, container: 'no-left-margin' });
		}
	};

	updateUserStatus = (userStatus) => {
		this.setState({ user: userStatus });
	};

	render() {
		return (
			<div className='App'>
				<Router>
					<Switch>
						{this.state.user.loggedIn ? (
							<>
								<Nav
									onClick={this.onClickNav}
									updateUserStatus={this.updateUserStatus}
								/>
								<Sidebar
									sidebarVisible={this.state.visible}
									className={this.state.container}
								>
									<Route path='/contacts' exact component={Contacts} />
									<Route path='/meetings' exact component={Meetings} />
									<Route path='/tasks' exact component={Tasks} />
									<Route path='/edit/contact/:id' exact component={EditContact} />
									<Route path='/edit/meeting/:id' exact component={EditMeeting} />
								</Sidebar>
							</>
						) : (
							<>
								<Route
									path='/'
									exact
									component={() => (
										<LoginPage updateUserStatus={this.updateUserStatus} />
									)}
								/>
								<Route path='/create-account' exact component={CreateAccount} />
							</>
						)}
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
