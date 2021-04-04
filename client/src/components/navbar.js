import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const Nav = (props) => {
	const history = useHistory();

	function handleLogoutClick() {
		props.updateUserStatus({ loggedIn: false });
		localStorage.clear();
		history.push('/');
	}

	return (
		<div>
			<Menu color={'blue'} inverted secondary>
				<Menu.Item position={'left'} onClick={() => props.onClick()}>
					<Icon name='bars' />
				</Menu.Item>

				<Menu.Menu position='right'>
					<Menu.Item name='logout' onClick={handleLogoutClick} />
				</Menu.Menu>
			</Menu>
		</div>
	);
};

export default Nav;
