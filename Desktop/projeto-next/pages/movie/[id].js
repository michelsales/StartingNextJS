import Link from 'next/link';
import styles from '../../styles/Home.module.css';


//server side rendering
export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <h1>Movie: {info.title} </h1>
      <p>Nota: {info.vote_average}</p>
      <Link href="/busca">Go Search Movie</Link>

      <div className={styles.main}>
        <p>{info.overview}</p>
        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();
  
  return {
    props: {
      info: json.info
    }
  }
}