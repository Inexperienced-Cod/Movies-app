import {motion} from 'framer-motion'; 
import '../App.css';
function Movie({movie}){
        return(
            <motion.div Layout animate={{opacity : 1}}
                intial={{opacity: 0}}
                exit={{opacity: 0}}>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt=""   />
                <h2>{movie.title}</h2>
            </motion.div>
        )
}

export default Movie