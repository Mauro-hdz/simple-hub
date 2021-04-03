import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';
import { Form, FormInput, Button, Container, GridColumn, GridRow, Grid } from 'semantic-ui-react';

function LoginPage(props) {
	const history = useHistory();

	const [userEmail, setUserEmail] = useState('');
	const [userPasscode, setUserPasscode] = useState('');

	async function onLogInSubmit() {
		const response = await axios.post('/api/user/login', {
			userEmail,
			userPasscode,
		});

		if (response.data.loginSuccess) {
			props.updateUserStatus({ loggedIn: true });
			history.push('/contacts');
		}
	}

	return (
		<div className='clearfix'>
			<div className='col xs-col-8'>
				<div style={{ height: '100vh', backgroundColor: 'skyblue' }}>
					<h3>KonnectCRM</h3>
				</div>
			</div>
			<div className='col xs-col-4'>
				<div className='xs-p6'>
					<h3 style={{ color: 'darkcyan' }}>Please Log In</h3>
					<Form className='xs-pt6' onSubmit={onLogInSubmit}>
						<FormInput
							placeholder='Email'
							value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
						/>
						<FormInput
							placeholder='Password'
							value={userPasscode}
							onChange={(e) => setUserPasscode(e.target.value)}
						/>
						<Button primary>Log In</Button>
					</Form>
				</div>
				<div style={{ marginTop: '3em' }}>
					<h4>
						Don't have an account yet?
						<span>
							<Link to='/create-account'> Create account.</Link>
						</span>
					</h4>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
