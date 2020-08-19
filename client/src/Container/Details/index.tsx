import React from 'react';
import Grid from '@material-ui/core/Grid';
import Banner from './Banner/banner';
import PackageContainer from './Package-Container';

const Details: React.FC = () => {
	return (
		<Grid container>
			<Grid item md={12} xs={12}>
				<Banner />
			</Grid>
			<Grid item md={12} xs={12}>
				<PackageContainer />
			</Grid>
		</Grid>
	);
};

export default Details;
