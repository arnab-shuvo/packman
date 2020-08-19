import React from 'react';
import { ItemBlock } from './styled';
import { useHistory } from 'react-router-dom';

const Item: React.FC<SuggestionItem> = ({ name, description }) => {
	const history = useHistory();
	const selectPackage = (name: string) => {
		history.push(`/details/${name}`);
	};
	return (
		<ItemBlock item md={4} xs={12}>
			<p className='name' onClick={() => selectPackage(name)}>
				{name}
			</p>
			<p className='description'>{description}</p>
		</ItemBlock>
	);
};

export default Item;
