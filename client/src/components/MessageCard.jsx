import { FaTrashCan, FaEnvelopeOpenText } from 'react-icons/fa6';
import { MdMarkEmailRead } from 'react-icons/md';

import convertToShamsiDate from '../utils/convertToShamsi';
import shorten from '../utils/shortenText';

export default function MessageCard({
  id,
  title,
  message,
  isRead,
  generatedAt,
  onDelete,
  onRead,
  onOpen,
}) {
  return (
    <li key={id} className={`message-card ${isRead ? 'read' : undefined}`}>
      <div className='message-content'>
        <div className='heading-container'>
          <span className='read-badge'>&nbsp;</span>
          <h5 className='message-heading' onClick={() => onOpen(id)}>
            {title}
          </h5>
        </div>
        <p className='message-short'>{shorten(message, 0, 14)}...</p>
      </div>

      <span className='message-date'>
        {convertToShamsiDate(generatedAt, 'DD MMM')} ماه
      </span>

      <div className='card-actions'>
        <button
          type='button'
          title='حذف کردن این پیام'
          className='btn delete-btn action-btn action-delete'
          onClick={() => onDelete(id)}
        >
          <FaTrashCan />
        </button>
        <button
          type='button'
          title='نشانه گذاری به عنوان خوانده شده'
          className='btn delete-btn action-btn action-read'
          onClick={() => onRead(id)}
          disabled={isRead}
        >
          <MdMarkEmailRead />
        </button>
        <button
          type='button'
          title='باز کردن پیام'
          className='btn delete-btn action-btn action-open'
          onClick={() => onOpen(id)}
        >
          <FaEnvelopeOpenText />
        </button>
      </div>
    </li>
  );
}
