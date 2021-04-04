import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';
import { Form, FormInput, Button } from 'semantic-ui-react';

function LoginPage(props) {
	const history = useHistory();

	const [userEmail, setUserEmail] = useState('');
	const [userPasscode, setUserPasscode] = useState('');
	const [invalidEmail, setInvalidEmail] = useState(false);
	const [invalidPassword, setInvalidPassword] = useState(false);

	async function onLogInSubmit() {
		setInvalidEmail(false);
		setInvalidPassword(false);

		const response = await axios.post('/api/user/login', {
			userEmail,
			userPasscode,
		});

		if (response.data.loginSuccess) {
			props.updateUserStatus({ loggedIn: true });
			const jsonData = JSON.stringify(response.data);
			localStorage.setItem('data', jsonData);
			history.push('/contacts');
		} else {
			if (response.data.message === 'account not found') {
				setInvalidEmail(true);
			} else if (response.data.message === 'wrong password') {
				setInvalidPassword(true);
			}
		}
	}

	return (
		<div bp='grid'>
			<div bp='8'>
				<div style={{ height: '100vh', backgroundColor: 'skyblue' }}>
					<h1
						style={{
							paddingTop: '25%',
							fontSize: ' 5em',
							color: 'black',
						}}
						className='fredoka-one-font'
					>
						SimpleCRM
					</h1>
				</div>
			</div>
			<div bp='4'>
				<div bp='padding--lg' style={{ marginTop: '10em' }}>
					<h2 style={{ color: 'grey' }}>Log In</h2>
					<Form bp='padding-top--lg' onSubmit={onLogInSubmit}>
						{invalidEmail && <span className='text-red'>Invalid Email!</span>}
						<FormInput
							placeholder='Email'
							value={userEmail}
							onChange={(e) => setUserEmail(e.target.value)}
						/>
						{invalidPassword && <span className='text-red'>Invalid Password!</span>}
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
							<Link to='/create-account'> Create an account.</Link>
						</span>
					</h4>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
