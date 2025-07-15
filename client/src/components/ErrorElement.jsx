import { Link, useRouteError } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

import Wrapper from '../assets/wrappers/ErrorElement';

export default function ErrorElement() {
  const err = useRouteError();
  const errArr = err?.response?.data?.message.split(',');
  console.error(err);

  return (
    <Wrapper>
      <header className='error-header'>
        <FaBookmark />
        <h4>مشکلات زیر در عملکرد سیستم رخ داده است:</h4>
      </header>
      <div className='error-content'>
        {!errArr || errArr?.length === 0 ? (
          <p className='error-msg'>
            1. مشکل در سیستم داخلی و به دلایل نامعلومی اتفاق افتاده است!
          </p>
        ) : (
          <ol>
            {errArr?.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ol>
        )}
        <p>
          لطفا در صورت وجود اطلاعات ورودی (از قبیل فرم ها و یا فیلترهای جستجو
          و...)، آنها را چک کنید و دوباره امتحان کنید و یا صفحه مرورگرتان را
          بازنشانی کنید. اگر مشکل برطرف نشد، لطفا آن را به تیم فنی پرومدز انتقال
          دهید.
        </p>
        <Link to='/' className='btn btn-form'>
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </Wrapper>
  );
}
