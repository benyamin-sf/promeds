import { IoCopyOutline } from 'react-icons/io5';
import { IoIosMail, IoIosPerson } from 'react-icons/io';
import { MdPhoneEnabled } from 'react-icons/md';

export default function StaffCard({
  id,
  name,
  lastName,
  email,
  phoneNumber,
  personnelEmail,
  personnelId,
  avatarUrl,
  gender,
  role,
}) {
  const isMan = gender === 'man';
  const isStaff = role === 'staff';

  return (
    <li key={id} className='staff'>
      <header className='header'>
        <img
          src={
            avatarUrl
              ? avatarUrl
              : `https://avatar.iran.liara.run/public/${isMan ? 'boy' : 'girl'}`
          }
          alt={name}
          className='img staff-img'
        />
        <h3 className='title'>
          {isStaff ? 'دکتر' : isMan ? 'آقای' : 'خانم'} {lastName}
        </h3>
      </header>
      <div className='staff-content'>
        {isStaff && (
          <span className='staff-id'>
            {personnelId} <IoCopyOutline style={{ fontSize: '1.2rem' }} />
          </span>
        )}
        <ul className='content-list'>
          <li className='content-item'>
            <IoIosPerson />
            {name} {lastName}
          </li>
          <li className='content-item'>
            <IoIosMail />
            <a
              href={`mailto:${isStaff ? personnelEmail : email}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {isStaff ? personnelEmail : email}
            </a>
          </li>
          <li className='content-item'>
            <MdPhoneEnabled />
            <a
              href={`tel:${phoneNumber || ''}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {phoneNumber?.replace('+989', '09') || 'اعلام نشده'}
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}
