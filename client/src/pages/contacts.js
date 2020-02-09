import React from 'react'
import Table from '../components/contactTable';
import ContactMenu from '../components/contactMenu';
import {Header, Grid, Menu} from 'semantic-ui-react';

const Contacts = () => {
    return (
        <div>
            <ContactMenu />     
            <Table />
        </div>
    )
}


export default Contacts;