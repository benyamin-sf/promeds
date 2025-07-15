import { Link, useOutletContext } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import mainImg from '../assets/images/main.svg';
import { LandingNavbar } from '../components';

export default function Landing() {
  const { user, onLogout } = useOutletContext();

  return (
    <Wrapper>
      <LandingNavbar user={user} onLogout={onLogout} />

      <div className='container page'>
        <div className='info'>
          <h1>
            سامانه <span>جامع</span> درمانی
          </h1>
          <p>
            با <span>پرومِدز</span> با چند کلیک ساده، هر زمان که نیاز داشتید به
            پزشکان متخصص وصل بشید، نوبت آنلاین بگیرید یا نسخه الکترونیکی دریافت
            کنید. سریع، مطمئن و بدون دردسر، مراقبت از سلامت شما آسان‌تر از
            همیشه! همین حالا شروع کنید...
          </p>
          <Link
            to={user ? '/dashboard' : '/register'}
            id='landing-btn'
            className='btn register-link'
          >
            {user
              ? 'انتقال به فضای کاربری پرومدز'
              : 'از بهترین متخصصان نوبت بگیرید'}
          </Link>
        </div>

        <img
          src={mainImg}
          alt='promeds - سامانه جامع پزشکی'
          className='img main-img'
        />
      </div>
    </Wrapper>
  );
}
