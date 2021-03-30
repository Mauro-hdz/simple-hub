import React, { useState } from 'react';
import axios from 'axios';
import {
	Form,
	FormInput,
	Button,
	Container,
	GridColumn,
	GridRow,
	Grid,
} from 'semantic-ui-react';

function LoginPage() {
	const [userEmail, setUserEmail] = useState('');
	const [userPasscode, setUserPasscode] = useState('');

	function onLogInSubmit() {
		console.log('user: ', userEmail);
		console.log('user pw: ', userPasscode);
		//Here we send a call to our server
		//If the server authenticates the user as a valid user allow the user to view our other pages
		//Otherwise return a false, user is not valid, please create an account
		axios
			.post('/api/user/login', { userEmail, userPasscode })
			.then((res) => {
				console.log('response', res);
			})
			.catch((err) => console.log(err));
	}

	return (
		<Container
			style={{
				paddingTop: '10%',
				backgroundColor: 'lightgrey',
				width: '100vw',
				height: '100vh',
			}}
		>
			<Grid centered>
				<GridRow>
					<GridColumn width={4}>
						<div>
							<h3 style={{ color: 'blue' }}>Please Log In</h3>
							<Form onSubmit={onLogInSubmit}>
								<FormInput
									value={userEmail}
									onChange={(e) =>
										setUserEmail(e.target.value)
									}
								/>
								<FormInput
									value={userPasscode}
									onChange={(e) =>
										setUserPasscode(e.target.value)
									}
								/>
								<Button primary>Log In</Button>
							</Form>
						</div>
					</GridColumn>
				</GridRow>
			</Grid>
		</Container>
	);
}

export default LoginPage;
