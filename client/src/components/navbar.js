import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const Nav =  (props) => {
let activeItem = '';
    return (
      <div>
        <Menu color={'blue'} inverted secondary>
          <Menu.Item
            position={'left'}
            onClick={() => props.onClick()}
          >
            <Icon name='bars' /> 
          </Menu.Item>
         
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
            //   onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
}

export default Nav;