import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const PackageInfoContainer = styled(Grid)`
	margin-bottom: 40px;
	padding-bottom: 20px;
	border-bottom: 1px solid #7b7b7b;
`;
export const PackageInfoText = styled.div`
	.name {
		font-size: 45px;
		text-transform: capitalize;
		font-weight: bold;
		margin-bottom: 10px;
		span {
			font-size: 20px;
			font-weight: normal;
		}
	}
	.description {
		font-size: 30px;
		text-align: justify;
		color: #323232;
		margin-bottom: 10px;
	}
	.keyword {
		font-size: 18px;
		span {
			margin: 0 10px;
			color: #7b7b7b;
		}
	}
	ul {
		margin: 0;
		padding: 0;
		text-align: right;
		li {
			list-style: none;
			display: inline-block;
			margin-left: 10px;
			a {
				img {
					-webkit-filter: grayscale(100%);
					filter: grayscale(100%);
					transition: all 0.5s ease;
					height: 25px;
					&:hover {
						-webkit-filter: none;
						filter: none;
						transform: scale(1.2);
					}
				}
			}
		}
	}
`;
