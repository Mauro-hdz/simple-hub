import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar';
import Nav from './components/navbar';
import Contacts from './pages/contacts';
import Meetings from './pages/meetings';
import Tasks from './pages/tasks';

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
              </Switch>
              </Sidebar>
            </Router>
      </div>
    );
  }
  
}

export default App;
