import styled from 'styled-components';

export const LoaderImage = styled.div`
	.load-wrapp:last-child {
		margin-right: 0;
	}
	.line {
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 15px;
		background-color: #c7c7c7;
	}

	.load-3 .line:nth-last-child(1) {
		animation: loadingC 0.6s 0.1s linear infinite;
	}
	.load-3 .line:nth-last-child(2) {
		animation: loadingC 0.6s 0.2s linear infinite;
	}
	.load-3 .line:nth-last-child(3) {
		animation: loadingC 0.6s 0.3s linear infinite;
	}

	@keyframes loadingC {
		0 {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(0, 15px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
`;
