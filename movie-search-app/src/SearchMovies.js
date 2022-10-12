import { useState } from 'react';

export default function SearchMovies(props) {
	const [queryString, setQueryString] = useState('');

	function changeHandler(event) {
		setQueryString(event.target.value);
	}

	function submitHandler(event) {
		event.preventDefault();
		props.searchMovies(queryString);
		setQueryString('');
	}
	return (
		<form className="form" onSubmit={submitHandler}>
			<label className="label" htmlFor="query">
				Movie Name
			</label>
			<input
				className="input"
				type="text"
				name="query"
				placeholder="i.e. Jurassic Park"
				onChange={changeHandler}
				value={queryString}
			/>
			<button className="button" type="submit">
				Search
			</button>
		</form>
	);
}
