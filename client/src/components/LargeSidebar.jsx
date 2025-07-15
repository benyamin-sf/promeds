import { useContextOf } from '../Context';
import Wrapper from '../assets/wrappers/LargeSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';

export default function LargeSidebar() {
  const { isSidebarOpen } = useContextOf('dashboard');

  return (
    <Wrapper>
      <div
        className={`sidebar-container ${
          isSidebarOpen ? 'show-sidebar' : undefined
        }`}
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isLargeSidebar />
        </div>
      </div>
    </Wrapper>
  );
}
