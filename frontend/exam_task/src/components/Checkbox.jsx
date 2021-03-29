import React from 'react'


function Checkbox({ movieTitles }) {
	

	return (
		<div className="Oscar">
          {   
						movieTitles.filter(oscars => 
						oscars.OscarAwardsNumber > 0 ).map((m, i) => {
							return (  <div className="data" key={ i }> 
													<p>{ m.IMDbrank }.</p>
													<p className="movietitle">{ m.title }</p>
													<p>{ m.genre }</p>
													<p>Release Year: { m.releaseyear }</p>
													<p> Rating on IMDb: { m.IMDbrating }*</p>
													<p>Oscar titles: { m.OscarAwardsNumber }</p> 
												</div> )
							})
          }
		</div>
	)
}

export default Checkbox
