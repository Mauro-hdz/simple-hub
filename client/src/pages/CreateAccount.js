import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import {
	Form,
	FormField,
	FormInput,
	Button,
	Card,
	CardHeader,
	CardContent,
} from 'semantic-ui-react';

function CreateAccount() {
	const history = useHistory();

	const [userEmail, setUserEmail] = useState('');
	const [userPasscode, setUserPasscode] = useState('');

	const [invalidEmail, setInvalidEmail] = useState(false);
	const [invalidPassword, setInvalidPassword] = useState(false);

	async function onSubmitCreateAccount() {
		setInvalidEmail(false);
		setInvalidPassword(false);
		const validEmail = validateEmail(userEmail);
		const lowerCaseEmail = userEmail.toLowerCase();

		if (validEmail === false) setInvalidEmail(true);

		if (userPasscode.length <= 1) setInvalidPassword(true);

		if (validEmail && userPasscode.length > 1) {
			const userInput = {
				userEmail: lowerCaseEmail,
				userPasscode,
			};

			const response = await axios.post('/api/user/create-account', userInput);

			if (response) history.push('/');
		}
	}

	function validateEmail(email) {
		const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailTest.test(email.toLowerCase());
	}

	return (
		<div bp='grid' style={{ backgroundColor: 'skyblue', height: '100vh' }}>
			<div bp='4 offset-5'>
				<div style={{ marginTop: '7em' }}>
					<Card style={{ padding: '5em', width: '100%' }}>
						<CardHeader style={{ color: 'grey' }}>Create Your Account</CardHeader>
						<CardContent>
							<Form onSubmit={onSubmitCreateAccount}>
								<FormField>
									<FormInput
										label='Email'
										value={userEmail}
										onChange={(e) => setUserEmail(e.target.value)}
									/>
									{invalidEmail && (
										<span className='text-red'>Invalid Email!</span>
									)}
								</FormField>
								<FormField>
									<FormInput
										label='Password'
										type='password'
										value={userPasscode}
										onChange={(e) => setUserPasscode(e.target.value)}
									/>
									{invalidPassword && (
										<span className='text-red'>Invalid Password!</span>
									)}
								</FormField>

								<Button type='submit' primary>
									Create Account
								</Button>
							</Form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default CreateAccount;
