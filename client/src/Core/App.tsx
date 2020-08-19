import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Container/Home';
import Details from '../Container/Details';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/details/:package_name' component={Details} />
				<Route path='*' render={() => <Redirect to='/' />} />
			</Switch>
		</Router>
	);
}

export default App;
