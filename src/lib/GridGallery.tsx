import React from 'react';

type Props = {
	items: Array<any>;
	render?: any;
};

const GridGallery = React.memo(({ items, render }: Props) => {
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
