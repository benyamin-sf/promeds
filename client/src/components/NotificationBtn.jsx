import { IoMdNotifications } from 'react-icons/io';

export default function NotificationBtn({ unreadCount, onClick }) {
  return (
    <button
      type='button'
      className={`notification-container toggle-btn ${
        unreadCount > 0 ? 'dirty' : undefined
      }`}
      onClick={onClick}
    >
      {unreadCount > 0 && (
        <span className='notification-badge'>
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
      <IoMdNotifications />
    </button>
  );
}
