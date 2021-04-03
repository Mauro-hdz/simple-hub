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
		const validEmail = validateEmail(userEmail);

		if (validEmail) {
			const response = await axios.post('/api/user/login', {
				userEmail,
				userPasscode,
			});

			if (response.data.loginSuccess) {
				props.updateUserStatus({ loggedIn: true });
				history.push('/contacts');
			}
		}
	}

	function validateEmail(email) {
		const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailTest.test(email.toLowerCase());
	}

	return (
		<div className='clearfix'>
			<div className='col xs-col-8'>
				<div style={{ height: '100vh', backgroundColor: 'skyblue' }} className=''>
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
			<div className='col xs-col-4'>
				<div className='xs-p6'>
					<h2 style={{ color: 'grey' }}>Log In</h2>
					<Form className='xs-pt6' onSubmit={onLogInSubmit}>
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
						<Button>Log In</Button>
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
