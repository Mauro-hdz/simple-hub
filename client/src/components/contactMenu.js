import React, { Component } from 'react';
import { Input, Menu, Button, Header} from 'semantic-ui-react';
import ContactModal from './contactModal';


const ContactMenu = () => {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    // const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item>
          <Header as='h1' floated='left' size='huge'>Contacts</Header>
        </Menu.Item>
        <Menu.Item>
          <ContactModal trigger={
          <Button content='+ New Contact' color='orange' floated='left' inverted/>
            } />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item position='right'>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default ContactMenu;