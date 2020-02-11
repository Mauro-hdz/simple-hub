import React from 'react';
import { Table, Icon } from 'semantic-ui-react';


const Contact = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.name}</Table.Cell>
            <Table.Cell>{props.title}</Table.Cell>
            <Table.Cell>{props.email}</Table.Cell>
            <Table.Cell>{props.phoneNumber}</Table.Cell>
            <Table.Cell>Edit</Table.Cell>
            <Table.Cell>Delete</Table.Cell>
            {/* Use icon for delete button and maybe an icon for edit button */}
        </Table.Row>  
    )
}

export default Contact;