import React, { useState, useEffect } from 'react';
import { SearchBoxWrapper, SuggestionBox } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestion } from '../../Store/Actions/SuggestionActions';
import Loader from '../Loader';
import Item from './Item/item';
import { ItemWrapper } from './Item/styled';
import { useParams } from 'react-router-dom';

const SearchBox: React.FC = () => {
	const params: Params = useParams();
	const [search, setSearch] = useState<string>('');
	const { suggestions } = useSelector((state: RootReducer) => state.suggestionStore);
	const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
	const dispatch = useDispatch();
	useEffect(() => {
		if (search.length > 2) {
			dispatch(fetchSuggestion(search));
		}
	}, [search, dispatch]);
	useEffect(() => {
		if (params.package_name) {
			setSearch(params.package_name);
		}
	}, [params.package_name]);
	return (
		<SearchBoxWrapper>
			<input
				type='text'
				onFocus={() => setShowSuggestion(true)}
				onBlur={() => setShowSuggestion(false)}
				placeholder='e.g. React'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<SuggestionBox className={showSuggestion ? 'show' : 'hide'}>
				{Object.keys(suggestions).length === 0 && <Loader></Loader>}

				{Object.keys(suggestions).length !== 0 && (
					<ItemWrapper container spacing={2}>
						{Object.keys(suggestions).map((sugestion: string, index: number) => {
							return (
								<Item
									key={index}
									name={suggestions[sugestion].package.name}
									description={suggestions[sugestion].package.description}
								/>
							);
						})}
					</ItemWrapper>
				)}
			</SuggestionBox>
		</SearchBoxWrapper>
	);
};

export default React.memo(SearchBox);
