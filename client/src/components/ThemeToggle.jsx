import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import { useContextOf } from '../Context';
import Wrapper from '../assets/wrappers/ThemeToggle';

export default function ThemeToggle() {
  const { isDarkTheme, onToggleDarkTheme } = useContextOf('dashboard');

  return (
    <Wrapper onClick={onToggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className='toggle-icon' />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
}
