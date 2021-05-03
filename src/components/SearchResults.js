import React from 'react'

function SearchResults(props) {

    const { addNomination,nominations,search } = props

    const movies = props.movies ? (
        props.movies.map(movie => {
            return (
                <div className = 'movie-card'>
                    <div className = 'movie-card-txt'>
                        <h4>{movie.Title}</h4>
                        <div className = 'movie-meta'>
                            <span>
                                <b>Year - </b>
                                {movie.Year}
                            </span>
                        </div>
                    </div>
                    <div className = 'movie-card-btn'>
                        {nominations.find(ele => ele.Title === movie.Title) ? (
                            <button onClick = {() => addNomination(movie.Title)} disabled>
                                Nominate Movie
                            </button>
                        ) : (
                            nominations.length >=5 ? (
                                <button onClick = {() => addNomination(movie.Title)} disabled>
                                    Nominate Movie
                                </button>
                            ) : (
                                <button onClick = {() => addNomination(movie.Title)}>
                                    Nominate Movie
                                </button>
                            )
                        )}
                        
                    </div>
                </div>
            )
        })
    ) : (
        <div className = 'empty-div'>
            <div>
                <img src="https://img.icons8.com/wired/64/000000/starred-ticket.png"  alt = "illustration of a movie ticket" />
                <h4>No movies found</h4>
            </div>
        </div>
    )

    return (
        <div className = 'movie-search-section'>
            <div className = 'movie-section-heading'>
                <h3>
                    Your results for "{search}"
                </h3>
            </div>
            {movies}
        </div>
    )
}

export default SearchResults
