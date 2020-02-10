import React from 'react';
import { Table } from 'semantic-ui-react';


const Contact = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.name}</Table.Cell>
            <Table.Cell>{props.title}</Table.Cell>
            <Table.Cell>{props.email}</Table.Cell>
            <Table.Cell>{props.phoneNumber}</Table.Cell>
            <Table.Cell>{props.edit} </Table.Cell>
            <Table.Cell>{props.delete}</Table.Cell>
        </Table.Row>  
    )
}

export default Contact;