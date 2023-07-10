import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ea nulla recusandae eaque adipisci distinctio provident
          labore. Est quibusdam temporibus explicabo, sint odio totam iure quos nesciunt magni laborum hic.{' '}
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ea nulla recusandae eaque adipisci distinctio provident
          labore. Est quibusdam temporibus explicabo, sint odio totam iure quos nesciunt magni laborum hic.{' '}
        </p>
        <Link className={styles.btn} href='/ninjas'>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
