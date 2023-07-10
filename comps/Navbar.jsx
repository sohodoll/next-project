import Image from 'next/image';
import Link from 'next/link';
// import logo from '/logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image width={128} height={27} src='/vercel.svg' alt='logo' />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
