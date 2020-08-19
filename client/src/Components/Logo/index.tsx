import React from 'react';
import logo from '../../assets/images/logo.jpg';
import { useHistory } from 'react-router-dom';
import { LogoWrapper } from './styled';

const Logo: React.FC<Logo> = ({ align }) => {
	const history = useHistory();
	const toHome = () => {
		history.push('/');
	};
	return (
		<LogoWrapper align={align} onClick={toHome}>
			<img src={logo} alt={'pack-man'} />
		</LogoWrapper>
	);
};

export default Logo;
