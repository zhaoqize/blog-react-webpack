import { Router, 
         Route, 
         hashHistory,
         IndexRoute } from 'react-router';

import Header from '../components/head/index.jsx';
import MainLists from '../components/main/mainLists.jsx';
import Edit from '../components/main/edit.jsx';

var router = (
	<Router history={hashHistory}>
		<Route path="/" >
			<IndexRoute component={MainLists} />
			<Route path="/edit" component={Edit}/>
		</Route>
	</Router>
)


export default router






