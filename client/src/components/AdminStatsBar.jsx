import { Link, useLocation } from 'react-router-dom';

export default function AdminStatsBar({ count, menCount, womenCount }) {
  const location = useLocation();

  const currResource = location.pathname.split('/').at(-1);

  return (
    <div className='stats'>
      <ul className='stat-items'>
        <li>تعداد کل نفرات: {count}</li>
        <li>تعداد آقایان: {menCount}</li>
        <li>تعداد بانوان: {womenCount}</li>
      </ul>
      <Link to='./create' className='btn btn-form'>
        ایجاد {currResource === 'users' ? 'کاربر' : 'پرسنل'} جدید
      </Link>
    </div>
  );
}
