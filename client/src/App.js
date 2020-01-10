import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Sidebar from './components/sidebar';
import MenuIcon from './components/menuIcon';
import Nav from './components/navbar';

class App extends Component {

  state = {
    visible: true
  };

  componentDidMount() {
    console.log('this is app, houston we are connected')
  }

  onClick = () => {
    this.state.visible === true? this.setState({visible: false}) : this.setState({visible: true});
  };

  render() {
    return (
      <div className="App">
       
            <Router>
            <Nav onClick={this.onClick} />
            <Sidebar
              sidebarVisible={this.state.visible}
              >
              <Switch>
                <Route path='/contacts' exact><h1>Hello goofball</h1></Route>
                <Route path='/meetings' exact><h1>Hello doofus</h1></Route>
                <Route path='/tasks' exact><h1>Hello smart one</h1></Route>
              </Switch>


              </Sidebar>
            </Router>
      </div>
    );
  }
  
}

export default App;
