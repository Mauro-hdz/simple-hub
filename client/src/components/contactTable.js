import React from 'react'
import { Table } from 'semantic-ui-react'

const ContactsTable = (props) => (
  <Table basic='very' size='large' className='margin-top bg-white'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Title</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Accountant</Table.Cell>
        <Table.Cell>JohnDoe@yahoo.com</Table.Cell>
        <Table.Cell>744 265 5635</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Engineer</Table.Cell>
        <Table.Cell>Jamie.Y@enterprise.com</Table.Cell>
        <Table.Cell>852 963 7412</Table.Cell>
      </Table.Row>      
    </Table.Body>
  </Table>
)

export default ContactsTable;