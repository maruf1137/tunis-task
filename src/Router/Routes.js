import React from 'react';
import Portfolio from '../components/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Portfolio} />
				</Switch>
			</Router>
		</>
	);
};

export default Routes;
