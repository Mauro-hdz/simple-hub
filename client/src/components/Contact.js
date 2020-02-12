import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom'


const Contact = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.name}</Table.Cell>
            <Table.Cell>{props.title}</Table.Cell>
            <Table.Cell>{props.email}</Table.Cell>
            <Table.Cell>{props.phoneNumber}</Table.Cell>
            <Table.Cell>
                <Link to={'/edit/contact/' + props.id}>
                    <Icon link name="edit outline" color="blue" size="large" className="text-center" />
                </Link>
            </Table.Cell>
            <Table.Cell>
                <Icon onClick={() => props.clickDelete(props.id)} link name="trash alternate outline" color="red" size="large" className="text-center" />
            </Table.Cell>
            {/* Use icon for delete button and maybe an icon for edit button */}
        </Table.Row>  
    )
}

export default Contact;