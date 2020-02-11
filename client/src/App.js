import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Nav from './components/Navbar';
import Contacts from './pages/contacts';
import Meetings from './pages/meetings';
import Tasks from './pages/tasks';
import EditMeeting from './pages/editMeeting';
import EditContact from './pages/editContact';

class App extends Component {

  state = {
    visible: true,
    container: 'no-left-margin'
  };


  onClick = () => {
    if (this.state.visible === true) {this.setState({visible: false, container: 'ui container'})} 
    else {this.setState({visible: true, container: 'no-left-margin'})}
  };

  render() {
    return (
      <div className="App">
       
            <Router>
            	<Nav onClick={this.onClick} />
              	<Sidebar
                sidebarVisible={this.state.visible}
                className={this.state.container}
                >
                	<Switch>
                  		<Route path='/contacts' exact>
                    		<Contacts />
                  		</Route>

                  		<Route path='/meetings' exact>
                    		<Meetings />
                  		</Route>
                
                  		<Route path='/tasks' exact>
                    		<Tasks />
                  		</Route>

						<Route path='/edit/contact' exact>
							<EditContact />
						</Route>

						<Route path='/edit/meeting'>
							<EditMeeting />
						</Route>
                	</Switch>
              	</Sidebar>
            </Router>
      </div>
    );
  }
  
}

export default App;
