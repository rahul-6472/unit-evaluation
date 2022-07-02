
import './App.css';
import Navbar from "./Components/Navbar"
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Login from "./Components/Login"
import MovieDetails from './Components/MovieDetails';
function App() {
  return (
    <div className="App">
       <Navbar />

       <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/movie/:id" element = {<MovieDetails />}></Route>
          <Route path = "/login" element = {<Login />}></Route>
       </Routes>

    </div>
  );
}

export default App;
