import styled from 'styled-components';

export const LogoWrapper = styled.div`
	max-width: 100%;
	text-align: ${(props: Logo) => props.align ?? 'left'};
	padding: 20px 0 0 0;
	img {
		height: 60px;
	}
`;
