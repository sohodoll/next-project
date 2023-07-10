import Navbar from '@/comps/Navbar';
import style from '../../styles/Ninjas.module.css';

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
          <div className={style.single} key={ninja.id}>
            <a className=''></a>
            <h3>{ninja.name}</h3>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Ninjas;
