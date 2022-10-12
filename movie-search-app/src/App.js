import { useEffect, useState } from 'react';
import './App.css';
import SearchMovies from './SearchMovies';

function App() {
	const [movies, setMovies] = useState([]);

	async function searchMovies(query) {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=66c8f4c6a035bc993b79a8a3de946da3&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="container">
			<h1 className="title">React Movie Search</h1>
			<SearchMovies searchMovies={searchMovies} />
			<ul></ul>
		</div>
	);
}

export default App;
