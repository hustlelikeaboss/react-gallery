function itemsToCols(items: Array<any>, itemsPerRow = 4): Array<any> {
	const numOfCols = Math.ceil(items.length / itemsPerRow);
	console.log('numOfCols: ', numOfCols);

	let cols = [];
	for (let col = 0; col < numOfCols - 1; col++) {
		cols.push(
			items.slice(col * itemsPerRow, col * itemsPerRow + itemsPerRow)
		);
	}
	cols.push(items.slice((numOfCols - 1) * itemsPerRow, items.length));
	console.log('cols: ', cols);
	return cols;
}

export { itemsToCols };
