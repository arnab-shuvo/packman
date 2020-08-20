import React from 'react';
import Grid from '@material-ui/core/Grid';
import BarChart from './BarChart/BarChart';
import { SizeInfo } from './styled';
import { useSelector } from 'react-redux';
import Loader from '../../../../Components/Loader';

const PackageSize: React.FC<PackageSize> = ({ name }) => {
	const { version, selected } = useSelector((state: RootReducer) => state.versionStore);

	if (version.length !== 0) {
		return (
			<Grid container spacing={2} alignItems='center'>
				<Grid container item md={12} xs={12} justify='center'>
					<Grid container item md={10} xs={12}>
						<Grid item md={4} xs={12}>
							<SizeInfo className='text-center'>
								<p className='size-label'>Version</p>
								<p className='size-info'>{selected.name}</p>
							</SizeInfo>
						</Grid>
						<Grid item md={4} xs={12}>
							<SizeInfo className='text-center'>
								<p className='size-label'>Minified</p>
								<p className='size-info'>
									{selected.unpackedSize} <span>KB</span>
								</p>
							</SizeInfo>
						</Grid>
						<Grid item md={4} xs={12}>
							<SizeInfo className='text-center'>
								<p className='size-label'>Zipped</p>
								<p className='size-info'>
									{selected.packedSize} <span>KB</span>
								</p>
							</SizeInfo>
						</Grid>
					</Grid>
				</Grid>

				<Grid item md={12} xs={12}>
					<BarChart versions={version} />
				</Grid>
			</Grid>
		);
	} else {
		return (
			<Grid container spacing={2} alignItems='center'>
				<Grid item md={12}>
					<div className='w-100 text-center'>
						<p>Analyzing Data. Please wait....</p>
						<Loader />
					</div>
				</Grid>
			</Grid>
		);
	}
};

export default React.memo(PackageSize);
