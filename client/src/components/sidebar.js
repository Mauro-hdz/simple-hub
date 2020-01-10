import React, { Component } from 'react';
import { Header, Icon, Grid, Menu, Segment, Sidebar } from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const SidebarMenu = (props) => { 
    
    return (
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={props.some}
            vertical
            visible={props.sidebarVisible}
            width='wide'
          >
            <Header as='h2' color={'blue'}>SimpleHut</Header>
            <Link to='/contacts'>
            <Menu.Item as='a'>
              <Icon name='user' />
              Contacts
            </Menu.Item>
            </Link>

            <Link to='/meetings'>
            <Menu.Item as='a'>
              <Icon name='calendar' />
              Meetings
            </Menu.Item>
            </Link>

            <Link to='/tasks'>
            <Menu.Item as='a'>
              <Icon name='tasks' />
              Tasks
            </Menu.Item>
            </Link>
          </Sidebar>
    
          <Sidebar.Pusher>
            <Segment basic>
            <Grid.Column stretched width={12}>
                <Segment>
                    {props.children}
                </Segment>
            </Grid.Column>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      )

  
}

export default SidebarMenu;