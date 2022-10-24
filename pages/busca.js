import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useState } from 'react';

//client side 
export default function Home({ list }) {
    const [searchText, setSearchText] = useState('');
    const [movieList, setMovieList] = useState([]);
    
    const handleSearch = async () => { 
        if(searchText !== ''){
            const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`);
            const json = await result.json();
            setMovieList(json.list);
            console.log('response', json.list);
        }
    }

    return (
        <div className={styles.container}>
            <h1>Search:</h1>
            <Link href="/" >Home</Link>
            <hr/>
            <br /> 
            <input type="text" placeholder='Find your movie' value={searchText} onChange={(e) => setSearchText(e.target.value)}/> 
            <button onClick={handleSearch}>Buscar</button> 

            <div className={styles.main}>
            {movieList.map(item => (
                <li key={item.id}>
                <a href={`/movie/${item.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /> <br/>
                    <h4>{item.title}</h4>
                </a>
                </li>
            ))}
             </div>
        </div>
    )
}
