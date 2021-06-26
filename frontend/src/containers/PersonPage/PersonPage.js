import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { getApiResource } from '../../utils/network';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { API_USERS } from '../../constants/api';




const PersonPage = ({ match, setErrorApi }) => {
	const [personInfo, setPersonInfo] = useState(null);

	useEffect(() => {
		(async () => {
			const id = match.params.id;
			const res = await getApiResource(`${API_USERS}/${id}/`);
			setErrorApi(!res);
			if (res) {
				setPersonInfo(res);

			};

		})();

	}, []);
	return (
		<div >
			{personInfo && (
				<>
					<div >
						<h2 >{personInfo.firstname} {personInfo.lastname}</h2>
						<h3 >{personInfo.email}</h3>

					</div>
				</>
			)}
		</div>
	)
}

PersonPage.propTypes = {
	setErrorApi: PropTypes.func,
	match: PropTypes.object
}

export default withErrorApi(PersonPage);