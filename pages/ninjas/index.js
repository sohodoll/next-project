import Navbar from '@/comps/Navbar';
import style from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return { props: { ninjas: data } };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>Ninjas</h1>

      {ninjas.map((ninja) => {
        return (
          <Link href={'/ninjas/' + ninja.id} className={style.single} key={ninja.id}>
            <h3>{ninja.name}</h3>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Ninjas;
