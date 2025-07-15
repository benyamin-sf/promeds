import { useState } from 'react';
import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

import { useContextOf } from '../Context';
import Wrapper from '../assets/wrappers/LogoutContainer';

export default function LogoutContainer() {
  const { user, onLogout } = useContextOf('dashboard');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Wrapper>
      <button
        type='button'
        className='btn logout-btn'
        onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
      >
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={`${user?.name}'s profile image`}
            className='img'
          />
        ) : (
          <FaUserCircle />
        )}
        {user?.name}
        <FaCaretDown />
      </button>

      <div className={`dropdown ${showDropdown ? 'show-dropdown' : undefined}`}>
        <button type='button' className='dropdown-btn' onClick={onLogout}>
          خروج از سامانه
        </button>
      </div>
    </Wrapper>
  );
}
