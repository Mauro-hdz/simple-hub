import React from 'react'
import Table from '../components/contactTable';
import ContactMenu from '../components/contactMenu';
import {Header, Grid} from 'semantic-ui-react';
const Contacts = () => {
    return (
        <div>
            <Grid>
            <Grid.Row>
            <Header as='h1' floated='left' size='huge'>Contacts</Header>
            </Grid.Row>
            </Grid>            
            <ContactMenu />
            <Table />
        </div>
    )
}


export default Contacts;