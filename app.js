import HeaderRoute from './components/head/index.jsx';
import route from './route/routes.jsx';

import  './static/css/default.css';
import  './static/css/header.css';
import  './static/css/main.css';
import  './static/css/rtc.css';

window.rootURL = 'http://localhost:80';

ReactDOM.render(
	HeaderRoute,
	document.getElementById('header')
)

ReactDOM.render(
	route,
	document.getElementById('main')
)

