import React, { useState } from 'react';

// import axios from 'axios';
import {
	Form,
	FormInput,
	Button,
	Container,
	GridColumn,
	GridRow,
	Grid,
} from 'semantic-ui-react';

function CreateAccount() {
	const [userEmail, setUserEmail] = useState('');
	const [userPasscode, setUserPasscode] = useState('');

	function onSubmitCreateAccount() {}

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
					<GridColumn width={4}>
						<div>
							<h3 style={{ color: 'blue' }}>
								Create Your Account
							</h3>
							<Form onSubmit={onSubmitCreateAccount}>
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

export default CreateAccount;
