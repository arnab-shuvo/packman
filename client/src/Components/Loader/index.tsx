import React from 'react';
import { LoaderImage } from './styled';

const Loader: React.FC = () => {
	return (
		<LoaderImage>
			<div className='load-wrapp'>
				<div className='load-3'>
					<div className='line'></div>
					<div className='line'></div>
					<div className='line'></div>
				</div>
			</div>
		</LoaderImage>
	);
};
export default Loader;
