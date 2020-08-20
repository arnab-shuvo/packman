import styled from 'styled-components';

interface PackageWrapper {
	height: number;
}

export const PackageWrapper = styled.div`
	padding: 40px;
	@media screen and (max-width: 767px) {
		.metainfo {
			order: 2;
		}
		.sizeinfo {
			order: 1;
		}
	}
`;
