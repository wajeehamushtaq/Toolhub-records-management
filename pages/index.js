import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import BlockQuote from '../components/BlockQuote'

export default function Home() {
  return (
    <>
      <Head>
        <title>Toolhub record management</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Toolhub Records Management</h1>
        <p className={`text-center ${styles.text}`}>The Wikipedia snippet below is not backed by a reliable source. Can you find one?</p>
        <p className={`text-center ${styles.text}`}>Click <b>I got this!</b> to go to Wikipedia and fix the snippet, or <b>Next!</b> to see another one. Good luck!</p>
        <div className='m-6'>
          <SearchBar />
        </div>
        <BlockQuote/>
        {/* <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p> */}
        <div className="flex flex-row justify-center">
          <div className="basis-1/4">
            <Link href="#">
              <a className={`bg-green text-white ${styles.btn}`}>I got this!</a>
            </Link>
          </div>
          <div className="basis-1/4">
            <Link href="#">
              <a className={`bg-primary text-white ${styles.btn}`}>Next!</a>
            </Link>
          </div>
      </div>
        
      </div>
    </>
  )
}
