import Link from 'next/link';
import styles from '../styles/Home.module.css'


//server side rendering
export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <h1>Featured movies</h1>

      <Link href="/busca">Go Search Movie</Link>

      <div className={styles.main}>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <a href={`/movie/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /> <br/>
                  <h4>{item.title}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/sobre">Sobre mim</Link>
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/trending');
  const json = await res.json();
  
  return {
    props: {
      list: json.list
    }
  }
}