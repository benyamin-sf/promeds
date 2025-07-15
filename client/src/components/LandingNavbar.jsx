import { NavLink } from 'react-router-dom';

import Logo from './Logo';

export default function LandingNavbar({ user, onLogout }) {
  return (
    <nav>
      <Logo style={{ width: '35px' }} />

      {!user && (
        <div className='nav-links'>
          <NavLink className='nav-link' to='/register'>
            ثبت نام
          </NavLink>
          <NavLink className='nav-link' to='/login'>
            ورود به سامانه
          </NavLink>
        </div>
      )}

      {user && (
        <div className='nav-links user-logged'>
          <p className='user-welcome'>
            {user?.name} {user?.lastName} عزیز خوش آمدید
          </p>
          <button type='button' className='nav-link' onClick={onLogout}>
            خروج از حساب کاربری
          </button>
        </div>
      )}
    </nav>
  );
}
