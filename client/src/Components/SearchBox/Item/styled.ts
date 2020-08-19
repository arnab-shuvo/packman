import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const ItemWrapper = styled(Grid)``;
export const ItemBlock = styled(Grid)`
	margin-bottom: 20px !important;
	text-align: left;
	.name {
		font-size: 15px;
		font-weight: bold;
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}
	.description {
		font-size: 12px;
	}
`;
