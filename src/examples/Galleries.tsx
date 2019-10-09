import React, { useState, useEffect } from 'react';
import Unsplash from 'unsplash-js';

import { Square, Masonry, MasonryAlt } from '../lib';

const unsplash = new Unsplash({
	applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '',
	secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY || ''
});

const Galleries = () => {
	const [photos, setPhotos] = useState([]);
	useEffect(() => {
		unsplash.collections
			.getCollectionPhotos(239835, 1, 15)
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
			<h2>Square</h2>
			<Square items={photos} />

			<h2>Masonry</h2>
			<h3>Top aligned, fixed width</h3>
			<Masonry items={photos} />

			<h2>Masonry Alt</h2>
			<h3>Left aligned, fixed height</h3>
			<MasonryAlt items={photos} />
		</div>
	);
};

export default Galleries;
