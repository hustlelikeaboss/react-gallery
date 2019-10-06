import React from 'react';
import { render } from 'react-dom';

import { GridGallery } from './lib';
import './App.css';

const App = () => (
	<div>
		<h1>React Gallery</h1>

		<h2>Grid</h2>
		<GridGallery />
	</div>
);

render(<App />, document.getElementById('root'));
