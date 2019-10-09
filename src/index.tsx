import React from 'react';
import { render } from 'react-dom';

import './App.css';

import BlogPosts from './examples/BlogPosts';
import Galleries from './examples/Galleries';
import Footer from './examples/Footer';

const App = () => (
	<div>
		<h1>React Gallery</h1>

		<Galleries />
		<BlogPosts />
		<Footer />
	</div>
);

render(<App />, document.getElementById('root'));
