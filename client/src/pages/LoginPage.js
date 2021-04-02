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
									onChange={(e) => setUserEmail(e.target.value)}
								/>
								<FormInput
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
					</GridColumn>
				</GridRow>
			</Grid>
		</Container>
	);
}

export default LoginPage;
