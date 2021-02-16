import React from "react";
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
    return (
		<div>
			<Container
				style={{
					backgroundColor: 'grey',
					minWidth: '100vw',
					minHeight: '100vh',
				}}
			>
				<Grid width={12}>
					<GridRow>
						<GridColumn width={8}></GridColumn>
						<GridColumn width={4}>
							<Form style={{ width: '50%' }}>
								<FormInput />
								<FormInput />
								<Button primary>Log In</Button>
							</Form>
						</GridColumn>
					</GridRow>
				</Grid>
			</Container>
		</div>
	);
}

export default LoginPage;