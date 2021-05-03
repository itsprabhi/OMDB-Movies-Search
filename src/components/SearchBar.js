import React from 'react'
import '../styles/style.css'

function SearchBar(props) {

    const { searchMovies } = props

    return (
        <div className = 'search-bar'>
            <div className = 'headings'>
                <h1>
                    The Shoppies
                </h1>
                <h4>The movie awards for Entrepreneurs</h4>
            </div>
            <input type = 'text' name = 'search' id = 'search' onChange = {(e) => searchMovies(e.target.value)} placeholder = 'Enter your movie search here'></input>
        </div>
    )
}

export default SearchBar
