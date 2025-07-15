import { NavLink } from 'react-router-dom';

import links from '../data/links';
import { useContextOf } from '../Context';

export default function NavLinks({ isLargeSidebar }) {
  const { user, onToggleSidebar } = useContextOf('dashboard');

  return (
    <div className='nav-links'>
      {links.map((ln) => {
        for (const userType of ln.access.split(',')) {
          if (user?.role === userType) {
            return (
              <NavLink
                className='nav-link'
                key={ln.id}
                to={ln.path}
                onClick={isLargeSidebar ? null : onToggleSidebar}
                end
              >
                <span className='icon'>{ln.icon}</span>
                {ln.text}
              </NavLink>
            );
          }
        }
      })}
    </div>
  );
}
