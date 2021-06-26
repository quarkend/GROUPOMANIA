import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { postApiObjet } from '../../utils/network'
import { API_AUTH_LOGIN } from '../../constants/api'


const Login = ({ firstname, setFirstname, setLastname }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);

	const handleLogIn = async (e) => {
		e.preventDefault();

		const res = await fetch(API_AUTH_LOGIN, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				email,
				password
			})
		});
		let content;

		content = await res.json();

		console.log('content: ', JSON.stringify(content));
		setRedirect(true);
		setFirstname(content.firstName);
		setLastname(content.lastName)
	};

	if (redirect) {

		return <Redirect to="/" />;
	}

	return (
		<>
			<div className="form-signin">
				<form onSubmit={handleLogIn}>
					<h1 className="h3 mb-3 fw-normal">Connectez-vous</h1>
					<input type="email" className="form-control" placeholder="Adresse mail" required
						onChange={e => setEmail(e.target.value)} />
					<input type="password" className="form-control" placeholder="Mot de passe" required
						onChange={e => setPassword(e.target.value)} />
					<button className="w-100 btn btn-lg btn-primary" type="submit">Se connecter</button>
				</form>
			</div>
		</>
	)
}

Login.propTypes = {
	setErrorApi: PropTypes.func,

}

export default Login;