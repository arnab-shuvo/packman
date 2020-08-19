import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { PackageWrapper } from './styled';
import PackageDescription from './Package-Description';
import PackageSize from './Package-size';
import MetaInfo from './Meta-info';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPackage } from '../../../Store/Actions/PackageActions';
import nopackage from '../../../assets/images/no-package.png';
import Loader from '../../../Components/Loader';
const PackageContainer: React.FC = () => {
	const packageInfo = useSelector((state: RootReducer) => state.packageStore.package);

	const params: any = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPackage(params.package_name));
	}, [dispatch, params]);
	if (Object.keys(packageInfo).length !== 0) {
		return (
			<PackageWrapper>
				<Grid container justify='center'>
					<Grid container item md={8} spacing={3}>
						{packageInfo?.status !== 200 && (
							<div className='text-center w-100'>
								<img src={nopackage} alt={'no-package'} />
								<p>No Package Fund</p>
							</div>
						)}
						{packageInfo?.status === 200 && (
							<>
								<Grid item md={12} xs={12}>
									<PackageDescription packageInfo={packageInfo} />
								</Grid>

								<Grid item md={3} xs={12}>
									<MetaInfo packageInfo={packageInfo} />
								</Grid>
								<Grid item md={9} xs={12}>
									<PackageSize name={packageInfo.name} />
								</Grid>
							</>
						)}
					</Grid>
				</Grid>
			</PackageWrapper>
		);
	} else {
		return (
			<PackageWrapper>
				<Grid container justify='center'>
					<Grid container item md={8}>
						<div className='text-center w-100'>
							<Loader />
						</div>
					</Grid>
				</Grid>
			</PackageWrapper>
		);
	}
};

export default PackageContainer;
