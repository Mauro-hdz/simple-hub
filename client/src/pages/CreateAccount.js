import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import {
	Form,
	FormField,
	FormInput,
	Button,
	Container,
	GridColumn,
	GridRow,
	Grid,
	Card,
	CardHeader,
	CardContent,
} from 'semantic-ui-react';

function CreateAccount() {
	const history = useHistory();

	const [userEmail, setUserEmail] = useState('');
	const [userPasscode, setUserPasscode] = useState('');

	async function onSubmitCreateAccount(e) {
		const userInput = {
			userEmail,
			userPasscode,
		};

		const response = await axios.post(
			'/api/user/create-account',
			userInput
		);

		if (response) history.push('/');
	}

	return (
		<Container
			style={{
				paddingTop: '10%',
				backgroundColor: 'lavender',
				width: '100vw',
				height: '100vh',
			}}
		>
			<Grid centered>
				<GridRow>
					<GridColumn width={6}>
						<Card style={{ padding: '5em', width: '100%' }}>
							<CardHeader style={{ color: 'grey' }}>
								Create Your Account
							</CardHeader>
							<CardContent>
								<Form onSubmit={onSubmitCreateAccount}>
									<FormField>
										<FormInput
											label='Email'
											value={userEmail}
											onChange={(e) =>
												setUserEmail(e.target.value)
											}
										/>
									</FormField>
									<FormField>
										<FormInput
											label='Password'
											value={userPasscode}
											onChange={(e) =>
												setUserPasscode(e.target.value)
											}
										/>
									</FormField>

									<Button type='submit' primary>
										Log In
									</Button>
								</Form>
							</CardContent>
						</Card>
					</GridColumn>
				</GridRow>
			</Grid>
		</Container>
	);
}

export default CreateAccount;
