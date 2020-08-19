import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PackageInfoContainer, PackageInfoText } from './styled';

const PackageDescription: React.FC<PackageInfo> = (props) => {
	const { name, description, keywords, version } = { ...props.packageInfo };
	return (
		<PackageInfoContainer container>
			<Grid container item md={8} xs={12}>
				<Grid item md={12} xs={12}>
					<PackageInfoText>
						<p className='name'>
							{name}
							<span>@{version}</span>
						</p>
					</PackageInfoText>
				</Grid>
			</Grid>
			<Grid item md={12} xs={12}>
				<PackageInfoText>
					<p className='description'>{description}</p>
				</PackageInfoText>
			</Grid>
			<Grid item md={12} xs={12}>
				<PackageInfoText>
					<p className='keyword'>
						Keywords:
						{keywords?.map((keyword: any, index: number) => {
							return <span key={index}>{keyword}</span>;
						})}
					</p>
				</PackageInfoText>
			</Grid>
		</PackageInfoContainer>
	);
};

export default React.memo(PackageDescription);
