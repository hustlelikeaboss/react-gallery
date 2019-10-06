import React from 'react';

const GridGallery = React.memo(({ items, render }) => {
	return (
		<div>
			{items.map(
				render ||
					(item => (
						<img
							key={item.id}
							src={item.urls.regular}
							alt={item.description}
						/>
					))
			)}
		</div>
	);
});

export default GridGallery;
