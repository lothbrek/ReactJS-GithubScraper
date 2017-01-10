import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './pages/Detail';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

ReactDOM.render(
	<Detail message="this is coming fr!"/>,
	document.getElementById('app')
);
