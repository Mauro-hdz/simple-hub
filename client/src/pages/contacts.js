import React, { useEffect, useState } from 'react';
import { Menu, Header, Input, Table } from 'semantic-ui-react';
import ContactModal from '../components/ContactModal';
import Contact from '../components/Contact';
import axios from 'axios';

function Contacts() {
	const [data, setData] = useState([]);
	const [showContactModal, setShowContactModal] = useState(false);

	function fetchContactDataEffect() {
		axios
			.get('/api/contact/all')
			.then((res) => setData(res.data.data))
			.catch((err) => {
				console.error(err);
			});
	}
	useEffect(fetchContactDataEffect, []);

	function rerender(e) {
		axios
			.get('/api/contact/all')
			.then((res) => setData(res.data.data))
			.catch((err) => {
				console.log(err);
			});
	}

	function deleteContact(id) {
		axios
			.delete(`/api/contact/delete/${id}`)
			.then((res) => {
				this.rerender();
			})
			.catch((err) => console.log('Contact Delete Error: ' + err));
	}

	return (
		<>
			<ContactModal
				showContactModal={showContactModal}
				rerenderParent={rerender}
				onClose={() => setShowContactModal(false)}
			/>
			<div>
				<Menu secondary>
					<Menu.Item>
						<Header as='h1' floated='left' size='huge'>
							Contacts
						</Header>
					</Menu.Item>
					<Menu.Item>
						<button
							bp='padding--sm'
							className='modal-button'
							onClick={() => setShowContactModal(true)}
						>
							+ New Contact
						</button>
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
						{data.map((contact) => {
							return (
								<Contact
									name={contact.name}
									title={contact.title}
									email={contact.email}
									phoneNumber={contact.phoneNumber}
									clickDelete={deleteContact}
									id={contact.id}
									key={contact.id}
								/>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</>
	);
}

export default Contacts;
