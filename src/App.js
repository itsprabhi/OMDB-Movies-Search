import {useState} from 'react'
import axios from 'axios'

//Components
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Nominations from './components/Nominations';
import Footer from './components/Footer';

function App() {

  // setting the default url
  axios.defaults.baseURL = `https://www.omdbapi.com/`

  const [movies, setMovies] = useState({
    search:'',
    searchResults:[],
    nominations:[]
  })

  


  //seaching a movie
  const searchMovies = (name) => {
    const movieName = name
    axios.get(`/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=tt3896198&s=${movieName}&t=movie&r=json`)
    .then(doc => {
      console.log(doc.data)
      setMovies({
        ...movies,
        searchResults: doc.data.Search,
        search:name
      })
    })
    .catch(err => {
      console.log(err.response)
    })
  }

  //adding the nomination
  const addNomination = (Title) => {
    const movieToAdd = movies.searchResults.find(ele => ele.Title === Title)
    const nominationList = movies.nominations
    nominationList.push(movieToAdd)
    setMovies({
      ...movies,
      nominations:nominationList
    })
  }

  //deleting the nomination
  const deleteNomination = (Title) => {
    const nominationList = movies.nominations
    const newList = nominationList.filter(ele => ele.Title !== Title)
    setMovies({
      ...movies,
      nominations:newList
    })
  }

  return (
    
    <div className="App">
      <SearchBar searchMovies = {searchMovies} />
      <div className = 'movies-section'>
        <SearchResults movies = {movies.searchResults} nominations = {movies.nominations} addNomination = {addNomination} search = {movies.search} />
        <Nominations nominations = {movies.nominations} deleteNomination = {deleteNomination} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
