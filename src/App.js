import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from "react"
import axios from "axios"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import About from "./components/About/About";
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   let [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)

   const EMAIL = "jesusito777@yahoo.cam"
   const PASSWORD = "fakes1234"

   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home")
      }
   }

   function logout() {
      setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               console.log(data)
            }
         });
   }

   function random() {
      let randomId = Math.ceil(Math.random() * 826);
      onSearch(randomId);
   }

   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id != id)
      setCharacters(filteredCharacters);
   }

   const location = useLocation();

   return (
      <div className="App">
         {location.pathname !== "/" && (
            <Nav onSearch={onSearch} logout={logout} random={random} />
         )}
         <Routes>
            <Route path='/favorites' element={<Favorites />}></Route>
            <Route path="/" element={<Form login={login} />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
         </Routes>
      </div>

   );
}

export default App;
