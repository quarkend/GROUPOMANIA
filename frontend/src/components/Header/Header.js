import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { API_AUTH_LOGOUT } from '../../constants/api'


const Header = ({ firstname, setFirstname, setLastname }) => {
	const logout = async () => {
		await fetch(API_AUTH_LOGOUT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});

		setFirstname('');
		setLastname('');
	};

	let menu;
	if (firstname === '') {
		menu = (
			<ul >
				<li><Link to="/login" exact>Se connecter</Link></li>
				<li><Link to="/register" exact>S'inscrire</Link></li>
			</ul>
		)
	} else {
		menu = (
			<ul >
				<li><Link to="/" exact>Forum</Link></li>
				<li><Link to="/users" exact>Team</Link></li>
				<li><Link to="/login" exact onClick={logout}>Se déconnecter</Link></li>
			</ul>
		)
	}

	return (
		<div >
			{menu}
		</div>
	)
}

Header.propTypes = {
	firstname: PropTypes.string,
	lastname: PropTypes.string,
	setFirstname: PropTypes.func,
	setLastname: PropTypes.func
}


export default Header;