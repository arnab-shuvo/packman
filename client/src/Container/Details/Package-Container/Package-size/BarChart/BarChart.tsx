import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { formatGraphData } from '../../../../../util/graphDataFormatter';
import { useDispatch } from 'react-redux';
import { changeVersion } from '../../../../../Store/Actions/PackageActions';

const BarChart: React.FC<Chart> = ({ versions }) => {
	const BarData = formatGraphData(versions);
	const dispatch = useDispatch();

	const option = {
		legend: {
			orient: 'horizontal',
			x: 'right',
			selectedMode: false,
			show: false,
		},
		tooltip: {},
		dataset: {
			dimensions: ['product', 'Zipped', 'Unzipped'],
			source: BarData,
		},
		xAxis: { type: 'category' },
		yAxis: {},
		// Declare several bar series, each will be mapped
		// to a column of dataset.source by default.
		series: [
			{
				type: 'bar',
				itemStyle: {
					label: 'tadad',
					color: '#212121',
				},
			},
			{
				type: 'bar',
				itemStyle: {
					label: 'tadad',
					color: '#cdcdcd',
				},
			},
		],
	};
	const onEvents = (e: any) => {
		dispatch(changeVersion(e.data.product));
	};
	return <ReactEcharts onEvents={{ click: onEvents }} option={option} style={{ height: '400px', width: '100%' }} />;
};

export default React.memo(BarChart);
