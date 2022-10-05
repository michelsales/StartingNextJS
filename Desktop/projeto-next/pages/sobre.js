import Link from 'next/link';
import styles from '../styles/Home.module.css'


//static side generation 
export default function Home({ author }) {
  return (
    <div className={styles.container}>
      <h1>About System: Credits</h1>

      <Link href="/">Go Home</Link>
      <p>this system, was made together the class in live of bonieky lacerda</p>
      <a href="https://www.youtube.com/watch?v=xjrDEZQ5LnA">Click for the class of bonieky</a>
      <hr/>
      <Link href="/busca">Go search</Link>
      <p>{author}</p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      author: 'michel'
    }
  }
}