import { Form, useOutletContext, useNavigate } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormInput, SubmitBtn } from '../components';
import { useEffect } from 'react';
import toastify from '../utils/toastify';

export default function LoginStaff() {
  const navigate = useNavigate();
  const { user } = useOutletContext();

  useEffect(() => {
    if (user) {
      toastify(
        'error',
        'اگر قصد ورود به عنوان کادر درمان را دارید، لطفا ابتدا از حساب کاربری فعلی خودتان خارج شده و مجددا تلاش فرمایید.'
      );
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <h4>ورود به پنل کاربری</h4>
        <div className='form-row'>
          <FormInput
            id='personnelEmail'
            type='email'
            name='personnelEmail'
            labelText='ایمیل پرسنلی'
            isRequired
          />
          <label htmlFor='personnelId' className='form-label'>
            شماره پرسنلی
          </label>
          <input
            id='personnelId'
            className='form-input'
            type='text'
            name='personnelId'
          />
          <div className='input-overlay'>
            <p className='overlay-text'>PM</p>
          </div>
        </div>
        <FormInput
          id='password'
          type='password'
          name='password'
          labelText='رمز ورود'
          isRequired
        />
        <SubmitBtn text='ورود' submissionText='در حال بررسی...' />
      </Form>
    </Wrapper>
  );
}
