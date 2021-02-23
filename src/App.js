import './App.css';
import SearchMovies from './components/SearchMovies';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>React Movies</h1>
      <h3 className='sub-title'>Powered by The Movie Database</h3>

      <SearchMovies />
    </div>
  );
}

export default App;
