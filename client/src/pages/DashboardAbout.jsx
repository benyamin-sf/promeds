import Wrapper from '../assets/wrappers/AboutDashboard';
import { useContextOf } from '../Context';

export default function AboutDashboard() {
  const { user } = useContextOf('dashboard');

  return (
    <Wrapper>
      <div className='about-header'>
        <h2 className='about-title'>
          سلام{' '}
          <span>
            {user?.name.endsWith('ا') ? `${user?.name}ی` : user?.name} عزیز
          </span>
          ، خوشحالیم که با ما همراه هستی
        </h2>
      </div>

      <div className='about-content'>
        <h5>
          جهت کمک به شما برای استفاده بهتر از سامانه، لازم است نکاتی را بدانید:
        </h5>
        <ul className='about-instructions'>
          <li>
            برای سهولت حرکت در سامانه به پیوند های سمت راست توجه داشته باشید.
          </li>
          <li>
            به منظور استفاده آسانتر، زبان صفحه کلید خود را (جز در هنگام نوشتن
            ایمیل و رمز عبور) به زبان فارسی تغییر دهید.
          </li>
          <li>
            در زمان انتخاب وقت مراجعه، از انتخاب زمان هایی که بهر دلیلی از قطعیت
            حضور خودتان اطمینان کافی ندارید، بپرهیزید. این مسأله علاوه بر اتلاف
            وقت پزشکان و سایر مراجعین، باعث دریافت اخطار میشود. با دریافت اخطار
            سوم حساب کاربری شما مسدود خواهد شد.
          </li>
          <li>
            در صورت عدم حضور در زمان اعلام شده مقرر، مبلغ ویزیت دریافت شده
            بازگشت داده نخواهد شد.
          </li>
          <li>
            در صورتی که در حین کار با سامانه با مشکل یا کندی مواجه شدید، لطفا
            تجربه خودتان را با{' '}
            <a
              className='about-link'
              href='mailto:admin@promeds.com'
              target='_blank'
            >
              admin@promeds.com
            </a>{' '}
            یا شماره تلفن ۰۹۱۲۰۰۰۲۲۳۳ به اشتراک بگذارید تا بتوانیم تجربه بهتری
            را برای شما و سایر مراجعان به ارمغان بیاوریم.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
