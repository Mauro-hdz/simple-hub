import React, { Component } from 'react';
import { Menu, Button, Header, Input, Table } from 'semantic-ui-react';
import ContactModal from '../components/ContactModal';
import Contact from '../components/Contact';

class Contacts extends Component {

    state = {
        data: []
    }

    render() {
        return (
            <div>
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
                <Table basic='very' size='large' className='margin-top bg-white'>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Edit</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {/* Render all contacts here */}   
                    </Table.Body>
                </Table>
            </div>
        )
    }
};


export default Contacts;