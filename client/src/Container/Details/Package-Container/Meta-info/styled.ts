import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const MetaInfoContainer = styled(Grid)`
	.copy-to-clipboard {
		padding: 10px;
		text-align: center;
		border: 1px solid #7b7b7b;
		border-radius: 5px;
		position: relative;
		&:hover {
			background: #cdcdcd;
			color: #fff;
			cursor: pointer;
			border-color: #fff;
		}

		.link.icon {
			color: #000;
			position: absolute;
			margin-left: 8px;
			margin-top: 10px;
			width: 7px;
			height: 1px;
			background-color: currentColor;
			-webkit-transform: rotate(-45deg);
			transform: rotate(-45deg);
			left: 12px;
		}
		.link.icon:before {
			content: '';
			position: absolute;
			top: -3px;
			left: -7px;
			width: 8px;
			height: 5px;
			border-radius: 2px;
			border: solid 1px currentColor;
		}
		.link.icon:after {
			content: '';
			position: absolute;
			top: -3px;
			right: -7px;
			width: 8px;
			height: 5px;
			border-radius: 2px;
			border: solid 1px currentColor;
		}
	}
	.tooltip {
		position: fixed;
		top: 20px;
		right: -256px;
		padding: 20px 30px;
		transition: all 0.3s ease;
		box-shadow: -5px 5px 11px 3px #cdcdcd;
		background: #212121;
		color: #fff;
		&.show {
			right: 0px;
		}
	}
`;

export const Block = styled(Grid)`
	padding-top: 12px !important;
	padding-bottom: 12px !important;
	border-bottom: 1px dashed #8b8b8b;

	.label {
		font-size: 18px;
		color: #7b7b7b;
		margin-bottom: 5px;
		text-transform: capitalize;
	}
	.link {
		color: #212121;
		font-size: 15px;
		word-break: break-word;
		&:hover {
			color: #29b1b1;
		}
	}
	.dependency {
		span {
			background: #212121;
			margin-right: 10px;
			padding: 10px;
			display: inline-block;
			margin-bottom: 10px;
			color: #fff;
		}
	}
`;
