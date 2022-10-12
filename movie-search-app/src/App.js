import { useEffect, useState } from 'react';
import './App.css';
import SearchMovies from './SearchMovies';

function App() {
	return (
		<div className="container">
			<h1 className="title">React Movie Search</h1>
			<SearchMovies />
			<ul></ul>
		</div>
	);
}

export default App;
