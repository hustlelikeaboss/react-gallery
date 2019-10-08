import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Unsplash from 'unsplash-js';

import './App.css';

import Square from './lib/Square';
import Masonry from './lib/Masonry';

const unsplash = new Unsplash({
	applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '',
	secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY || ''
});

const App = () => {
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		unsplash.collections
			.getCollectionPhotos(239835, 1, 12)
			.then(res => res.json())
			.then(json => {
				const photos = json.map((photo: any) => ({
					id: photo.id,
					description: photo.description,
					url: photo.urls.regular,
					width: photo.width,
					height: photo.height
				}));
				setPhotos(photos);
			});
	}, []);

	return (
		<div>
			<h1>React Gallery</h1>

			<h2>Masonry</h2>
			<Masonry items={photos} />

			<h2>Square</h2>
			<Square items={photos} />
		</div>
	);
};

render(<App />, document.getElementById('root'));
