import LogInPage from '../containers/LogInPage/LogInPage';
import RegisterPage from '../containers/LogInPage/RegisterPage';


const routesConfig = [
	{
		path: "/login",
		exact: true,
		component: LogInPage
	},
	{
		path: "/register",
		exact: true,
		component: RegisterPage
	},



]

export default routesConfig;