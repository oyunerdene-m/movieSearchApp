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
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<div className="card" key={movie.id}>
							<img
								className="card--image"
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + ' poster'}
							/>
							<div className="card--content">
								<h3 className="card--title">{movie.title}</h3>
								<p>
									<small>RELEASE DATE: {movie.release_date}</small>
								</p>
								<p>
									<small>RATING: {movie.vote_average}</small>
								</p>
								<p className="card--desc">{movie.overview}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default App;
