import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Block, MetaInfoContainer } from './styled';

const MetaInfo: React.FC<PackageInfo> = ({ packageInfo }) => {
	const [showToolTip, setShowToolTip] = useState<boolean>(false);
	const copy = (e: any) => {
		setShowToolTip(true);
		navigator.clipboard.writeText(e.target.innerHTML);
		setTimeout(() => {
			setShowToolTip(false);
		}, 1000);
	};

	return (
		<MetaInfoContainer container spacing={2}>
			<Grid item md={12} xs={12}>
				<p onClick={copy} className='copy-to-clipboard'>
					npm i {packageInfo.name}
					<i className='link icon'></i>
				</p>
				<div className={showToolTip ? 'show tooltip' : ' tooltip'}>
					<p>Coppied to Clipboard</p>
				</div>
			</Grid>
			<Block item md={6} xs={12}>
				<p className='label'>Last Publish</p>
				<p className='value'>{packageInfo.date?.split('T')[0]}</p>
			</Block>
			<Block item md={6} xs={12}>
				<p className='label'>License</p>
				<p className='value'>{packageInfo.license}</p>
			</Block>
			<Block item md={6} xs={12}>
				<p className='label'>Version</p>
				<p className='value'>{packageInfo.version}</p>
			</Block>
			<Block item md={6} xs={12}>
				<p className='label'>Total Release</p>
				<p className='value'>{packageInfo.releases ? packageInfo.releases.length : 0}</p>
			</Block>
			<Block item md={12} xs={12}>
				<p className='label'>Github</p>
				<a className='link' href={packageInfo.links?.repository} target='_blank' rel='noopener noreferrer'>
					{packageInfo.links?.repository}
				</a>
			</Block>
			<Block item md={12} xs={12}>
				<p className='label'>NPM</p>
				<a className='link' href={packageInfo.links?.npm} target='_blank' rel='noopener noreferrer'>
					{packageInfo.links?.npm}
				</a>
			</Block>
			{packageInfo.dependencies && (
				<Block item md={12} xs={12}>
					<p className='label'>Dependencies</p>
					<p className='dependency'>
						{Object.keys(packageInfo.dependencies).map((dep: any, index: number) => {
							return <span key={index}>{dep}</span>;
						})}
					</p>
				</Block>
			)}
		</MetaInfoContainer>
	);
};

export default MetaInfo;
