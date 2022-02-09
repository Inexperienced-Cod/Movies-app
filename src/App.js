import './App.css';
import {useEffect, useState} from 'react'
import Movie from './components/Mov';
import Filter from './components/carsy'
import {motion, AnimatePresence} from 'framer-motion'

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre]  = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const  movies = await data.json();
    setPopular(movies.results)
    setFiltered(movies.results)
  }
  return (
    <motion.div Layout className="App">
       <section>

       </section>
       <div className='Pop'>
      <Filter  popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
     <div className='m'>  
     <AnimatePresence>
       {filtered.map(movie =>  {
         return <Movie key={movie.id} movie={movie} />
       })}</AnimatePresence>
     </div></div>
    </motion.div>
  );
}

export default App;
