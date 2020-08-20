import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import bg from '../../assets/images/bg.jpg';

export const HomeWrapper = styled(Grid)`
	min-height: 100vh;
	background: url(${bg});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const BannerText = styled.div`
	text-align: center;

	.name {
		font-size: 45px;
		font-weight: bold;
		margin: 15px 0;
		letter-spacing: 34px;
		span {
			text-transform: uppercase;
			font-size: 25px;
		}
		@media screen and (max-width: 767px) {
			font-size: 20px;
			text-align: center;
			span {
				font-size: 20px;
			}
			letter-spacing: 8px;
		}
	}
	.description {
		margin-bottom: 15px;
	}
`;
