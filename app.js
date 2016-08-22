import Header from './components/head/index';
import MainLists from './components/main/mainLists';

import  './static/css/default.css';
import  './static/css/header.css';
import  './static/css/main.css';

window.rootURL = 'http://localhost:80';

ReactDOM.render(
	<Header />,
	document.getElementById('header')
)

ReactDOM.render(
	<MainLists />,
	document.getElementById('main')
)

