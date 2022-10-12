export default function SearchMovies() {
	return (
		<form className="form">
			<label className="label" htmlFor="query">
				Movie name
			</label>
			<input type="text" name="query" placeholder="i.e. Jurassic Park" />
			<button className="button">Search</button>
		</form>
	);
}
