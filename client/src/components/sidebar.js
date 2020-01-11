import React, { Component } from 'react';
import { Header, Icon, Grid, Menu, Segment, Sidebar, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const SidebarMenu = (props) => { 
    
    return (
        <Sidebar.Pushable>
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
            <Menu.Header as='h2' className='ui blue'>SimpleHut</Menu.Header>
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
            <Grid.Column  width={12}>
                <Container>
                    {props.children}
                </Container>
            </Grid.Column>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      )

  
}

export default SidebarMenu;