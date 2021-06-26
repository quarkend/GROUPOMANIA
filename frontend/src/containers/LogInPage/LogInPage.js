import Login from '../../components/log/Login';
import React from 'react'


const LogInPage = ({ firstname, setFirstname, setLastname }) => {
	return (

		<Login firstname={firstname} setFirstname={setFirstname} setLastname={setLastname} />

	)
}

export default LogInPage;