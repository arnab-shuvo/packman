import React from 'react';
import SearchBox from '../../../Components/SearchBox';
import { BannerContainer, BannerText } from './styled';
import Grid from '@material-ui/core/Grid';

const Banner: React.FC = () => {
	return (
		<div id='banner-wrapper'>
			<BannerContainer container justify='center'>
				<Grid container item md={6}>
					<Grid item md={12} xs={12}>
						<BannerText>
							<p className='name'>
								P<span>ack</span>M<span>an</span>
							</p>
							<p className='description'>Lets find the cost of Node Package with a finger tips</p>
						</BannerText>
					</Grid>
					<Grid item md={12} xs={12}>
						<SearchBox />
					</Grid>
				</Grid>
			</BannerContainer>
		</div>
	);
};

export default Banner;
