import { IoCloseOutline } from 'react-icons/io5';

import { useContextOf } from '../Context';
import Wrapper from '../assets/wrappers/MobileSidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function MobileSidebar() {
  const { isSidebarOpen, onToggleSidebar } = useContextOf('dashboard');

  return (
    <Wrapper>
      <div
        className={`sidebar-container ${
          isSidebarOpen ? 'show-sidebar' : undefined
        }`}
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={onToggleSidebar}>
            <IoCloseOutline />
          </button>

          <header>
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}
