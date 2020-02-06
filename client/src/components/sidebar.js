import React, { Component } from 'react';
import {Icon, Grid, Menu, Segment, Sidebar, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const SidebarMenu = (props) => { 
    
    return (
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            vertical
            visible={props.sidebarVisible}
            width='wide'
          >
            <Menu.Header as='h1' className='ui blue'>SimpleSpot</Menu.Header>
            <Link to='/'>
            <Menu.Item header={true} as='a'>
              <Icon name='user' />
              Contacts
            </Menu.Item>
            </Link>

            <Link to='/meetings'>
            <Menu.Item header={true} as='a'>
              <Icon name='calendar' />
              Meetings
            </Menu.Item>
            </Link>

            <Link to='/tasks'>
            <Menu.Item header={true} as='a'>
              <Icon name='tasks' />
              Tasks
            </Menu.Item>
            </Link>
          </Sidebar>
    
          <Sidebar.Pusher>
            <Segment basic>
            <Grid.Row className={props.className}>
                {/* <Grid.Column  width={4}> */}
                    {props.children}
            {/* </Grid.Column> */}
            </Grid.Row>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      )

  
}

export default SidebarMenu;