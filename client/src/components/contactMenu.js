import React, { Component } from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'

const ContactMenu = () => {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    // const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item>
        <Button content='Create Contact' color='orange' inverted/>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default ContactMenu;