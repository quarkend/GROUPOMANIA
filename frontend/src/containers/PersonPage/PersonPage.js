import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import avatar from '../../assets/avatar.png';
import { getApiResource } from '../../utils/network';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { API_USERS } from '../../constants/api';


import styles from './PersonPage.module.css';

const PersonPage = ({ match, setErrorApi}) => {
	const [personInfo, setPersonInfo] = useState(null);
	const [personPhoto, setPersonPhoto] = useState(null);
	useEffect( () => {
		(async () => {
			const id = match.params.id;
			const res = await getApiResource(`${API_USERS}/${id}/`);
			setErrorApi(!res);
			if (res) {
				setPersonInfo(res);
				if (res.photourl) {
					setPersonPhoto(res.photourl)
				} else {
					setPersonPhoto(avatar);
				};
			};
		
		})();

	}, []);
	return (
		<div className = {styles.container}>
			{personInfo && (
				<>
					<div className = {styles.person}>
						<h2 className = {styles.person__name}>{personInfo.firstname} {personInfo.lastname}</h2>
						<h3 className = {styles.person__email}>{personInfo.email}</h3>
						{personPhoto && <div className = {styles.person__photo}><img src = {personPhoto} alt = {personInfo.firstname} /></div>}
					</div>
				</>
			)}
		</div>
	)
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
  match : PropTypes.object
}

export default withErrorApi(PersonPage);