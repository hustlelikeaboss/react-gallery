import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Unsplash from 'unsplash-js';

import { GridGallery } from './lib';
import './App.css';

const unsplash = new Unsplash({
	applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '',
	secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY || ''
});

const App = () => {
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		unsplash.collections
			.getCollectionPhotos(1248080, 1)
			.then(res => res.json())
			.then(json => {
				setPhotos(json);
			});
	}, []);
	return (
		<div>
			<h1>React Gallery</h1>

			<h2>Grid</h2>
			<GridGallery items={photos} />
		</div>
	);
};

render(<App />, document.getElementById('root'));
