import { useEffect } from 'react';
import { Link, Form, useOutletContext, useNavigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormInput, SubmitBtn } from '../components';
import toastify from '../utils/toastify';

export default function Login() {
  const navigate = useNavigate();
  const { user } = useOutletContext();

  useEffect(() => {
    if (user) {
      toastify(
        'error',
        'شما قبلا به حساب کاربری خود وارد شده اید و نیازی به ورود مجدد نیست.'
      );
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <Logo />
        <h4>ورود به سامانه</h4>
        <FormInput
          id='email'
          type='email'
          name='email'
          labelText='ایمیل شخصی'
          isRequired
        />
        <FormInput
          id='password'
          type='password'
          name='password'
          labelText='رمز ورود'
          isRequired
        />
        <SubmitBtn text='ورود' submissionText='در حال بررسی...' />
        <p>
          هنوز ثبت نام نکرده اید؟
          <Link to='/register' className='member-btn'>
            عضویت
          </Link>
        </p>
        <p>
          <Link to='/login/staff' className='member-btn'>
            صفحه ورود کادر درمان
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
