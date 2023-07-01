import './App.css';
import {BrowserRouter as Router, Routes, Route } from"react-router-dom"
import Header from "./componet/Header";
import Home from './pages/Home';
import MovieList from './componet/movieList/movieList';
import Movie from './pages/movieDetail/movie';
// import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">  
    <Router>
      <Header />
           <Routes>
            <Route index element={<Home />}></Route>
            {/* <Route index element={<MovieList />}></Route> */}
            <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
            <Route path='/*'element={<h1>Error page</h1>}></Route>
         </Routes>
    </Router>
    </div> 
  );
}

export default App;
