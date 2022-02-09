import {useEffect} from 'react'


function  Filter({activeGenre, setActiveGenre, setFiltered, popular}){

    useEffect(() => {
        if (activeGenre === 0){
      setFiltered(popular);
      return;
        }

        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre));

        setFiltered(filtered);
    }, [activeGenre]);

    return(
        <div className='container'>
      <button onClick={()  => setActiveGenre(0)}>all</button>
       <button onClick={() => setActiveGenre(35)}>comedy</button>
       <button onClick={() =>setActiveGenre(28)}>Adventure</button>
        </div>
    )
}


export default Filter