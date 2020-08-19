import styled from 'styled-components';

export const SuggestionBox = styled.div`
	height: 200px;
	padding: 20px;
	background: #fff;
	opacity: 0;
	width: 80%;
	border: 1px solid #d8d8d8;
	border-top: 0;
	margin: auto;
	overflow-y: scroll;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	bottom: -200px;
	&.show {
		opacity: 1;
	}
`;
export const SearchBoxWrapper = styled.div`
	text-align: center;
	position: relative;
	input {
		box-sizing: border-box;
		font-size: 25px;
		padding: 10px;
		width: 80%;
		border: 1px solid #d8d8d8;
		&::-webkit-input-placeholder {
			/* Chrome/Opera/Safari */
			font-size: 25px;
		}
		&::-moz-placeholder {
			/* Firefox 19+ */
			font-size: 25px;
		}
		& :-ms-input-placeholder {
			/* IE 10+ */
			font-size: 25px;
		}
		& :-moz-placeholder {
			/* Firefox 18- */
			font-size: 25px;
		}
		&:focus {
			outline: 0;
		}
	}
`;
