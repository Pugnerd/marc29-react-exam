import React, { useState, useEffect } from "react"
import './App.css';
import loadMovies from "./components/loadMovies.jsx"
import LoadingMask from "./components/LoadingMask"
import Checkbox from "./components/Checkbox"


function App() {
  const [ movies, setMovies ] = useState([])
  const [ searchTerm, setSearchTerm ] = useState("")
  const [ checked, setChecked ] = useState(false)


  const handleClick = () => setChecked(!checked)
  const backendURL = "http://localhost:2900/movies";

  useEffect(() => {
		console.log('URL=',backendURL);
		loadMovies(backendURL, setMovies); 
						}, [])  				
			// console.log("moviesData =", movies)
			// console.log("movies=",movies.length);
    if (movies.length === 0) {
      return ( <LoadingMask /> )
    } else {}

  return (
    <div className="App">
      <div className="maintitle">
        <h1>The actual top 15 movies on IMDb</h1>
        <input type="text" placeholder="Keresés filmcím szerint" onChange={ event => { setSearchTerm(event.target.value) } }/>
        <div className="container">
          <label className="show">Show Only the Oscar Awarded movies...</label>
          <input className="checkbox" onClick={ handleClick } checked={ checked } type="checkbox" />
          { 
              checked && <Checkbox movieTitles={ movies }/> 
          }
        </div>
      </div>
      
      { checked 
        ? null
        :
				movies.filter((val) => {
          if (searchTerm === "") {
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        })
        .map((m, i) => {
					return (  <div className="data" key={ i }> 
                      <p>{ m.IMDbrank }.</p>
                      <p className="movietitle">{ m.title }</p>
                      <p>{ m.genre }</p>
                      <p>Release Year: { m.releaseyear }</p>
                      <p> Rating on IMDb: { m.IMDbrating }*</p>
                      <p>Oscar titles: { m.OscarAwardsNumber }</p> 
                    </div> 
                  )
				})
			}

    </div>
  );
}

export default App;
