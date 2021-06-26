import Login from '../../components/log/Login';



const LogInPage = ({ firstname, setFirstname, setLastname }) => {
	return (
		<>
			<Login firstname={firstname} setFirstname={setFirstname} setLastname={setLastname} />
		</>
	)
}

export default LogInPage;