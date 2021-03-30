import React, { useState } from "react";
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
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");

function onLogInSubmit() {
console.log("user: ", userEmail);
console.log("user pw: ", userPassword);
//Here we send a call to our server
//If the server authenticates the user as a valid user allow the user to view our other pages
//Otherwise return a false, user is not valid, please create an account
}

    return (
			<Container
				style={{
					backgroundColor: 'lightgrey',
					width: '100vw',
					height: '100vh',
				}}
			>
				<Grid centered>
					<GridRow>
						<GridColumn width={4}>
							<div>
								<h3 style={{color: "blue"}}>Please Log In</h3>
								<Form onSubmit={onLogInSubmit}>
									<FormInput value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
									<FormInput value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
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