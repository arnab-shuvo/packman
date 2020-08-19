import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomeWrapper, BannerText } from './styled';
import SearchBox from '../../Components/SearchBox';

const Home: React.FC = () => {
	return (
		<HomeWrapper container justify='center' alignItems='center'>
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
		</HomeWrapper>
	);
};

export default Home;
