import React, { Component, useReducer } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Nav from './components/Navbar';
import Contacts from './pages/contacts';
import Meetings from './pages/meetings';
import Tasks from './pages/tasks';
import EditMeeting from './pages/editMeeting';
import EditContact from './pages/editContact';
import LoginPage from "./pages/LoginPage";

class App extends Component {

  state = {
    user: {
      loggedIn: true
    },
    visible: true,
    container: 'no-left-margin'
  };


  onClick = () => {
    if (this.state.visible === true) {this.setState({visible: false, container: 'ui container'})} 
    else {this.setState({visible: true, container: 'no-left-margin'})}
  };

  render() {
    return (
		<div className='App'>
			<Router>
				<Switch>
          {this.state.user.loggedIn?(
            <>
             <Nav onClick={this.onClick} />
             <Sidebar
             sidebarVisible={this.state.visible}
             className={this.state.container}
             >
             <Route path='/contacts' exact component={Contacts} />
             <Route path='/meetings' exact component={Meetings} />
             <Route path='/tasks' exact component={Tasks} />
             <Route
               path='/edit/contact/:id'
               exact
               component={EditContact}
             />
             <Route
               path='/edit/meeting/:id'
               exact
               component={EditMeeting}
             />
           </Sidebar>
           </>
          ): (
          <Route path='/' exact component={LoginPage} />
          )}
				</Switch>
			</Router>
		</div>
	);
  }
  
}

export default App;
