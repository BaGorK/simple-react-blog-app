import { Link } from 'react-router-dom';

const links = [{ name: 'Create Blog', to: '/create' }];

function Header() {
  return (
    <header className='bg-white border-t px-20 py-6 max-w-6xl w-full mx-auto  text-xs text-gray-500'>
      <div className='flex justify-between items-center w-full'>
        <h1 className='font-bold text-xl tracking-tight'>
          <Link to='/'>React Blog</Link>
        </h1>
        <nav>
          <ul className='flex space-x-6'>
            {links.map((link, i) => (
              <li key={i}>
                <Link to={link.to} className='hover:text-black transition'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
