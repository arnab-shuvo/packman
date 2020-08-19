import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import SuggestionReducer from './Reducers/SuggestionReduces';
import PackageReducer from './Reducers/PackageReducer';
import VersionReducer from './Reducers/VersionReducer';

const rootReducer = combineReducers({
	suggestionStore: SuggestionReducer,
	packageStore: PackageReducer,
	versionStore: VersionReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
