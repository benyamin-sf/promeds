import { useNavigate } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';

import { useContextOf } from '../Context';
import Wrapper from '../assets/wrappers/Navbar';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LogoutContainer from './LogoutContainer';
import NotificationBtn from './NotificationBtn';

export default function Navbar() {
  const navigate = useNavigate();
  const context = useContextOf('dashboard');

  const onNotificationClick = async () => {
    navigate('/dashboard/messages');
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          type='button'
          className='toggle-btn'
          onClick={context?.onToggleSidebar}
        >
          <CiMenuFries />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>صفحه کاربری</h4>
        </div>
        <div className='btn-container'>
          <ThemeToggle />
          <NotificationBtn
            unreadCount={context?.unreadLogsCount}
            onClick={onNotificationClick}
          />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
}
