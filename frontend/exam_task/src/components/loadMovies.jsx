function handleErrors(response) {
	if (!response.ok) {
			throw Error(response.statusText);
	}
	return response;
}

const loadMovies = async (URL,setMovie) =>{

console.log('loadMoviesFrom=',URL);

			const response = await fetch(URL)
			.then(handleErrors)
			.then( async function(response) {
			const data = await response.json();
			console.log('returned jsondata=',data);
			setMovie(data);
		}).catch(function(error) {
			console.log(error);
		});
	}

export default loadMovies