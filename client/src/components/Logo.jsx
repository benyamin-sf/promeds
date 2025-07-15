import { Link } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';

export default function Logo({ style }) {
  return (
    <Link to='/'>
      <img src={logoImg} alt='Promeds logo' className='logo' style={style} />
    </Link>
  );
}
