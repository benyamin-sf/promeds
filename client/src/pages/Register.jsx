import { Link, Form } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormInput, SubmitBtn, FormSelect } from '../components';
import { GENDER } from '../../../utils/constants';

export default function Register() {
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <Logo />
        <h4>ثبت نام</h4>
        <FormInput id='name' name='name' labelText='نام' isRequired />
        <FormInput
          id='lastName'
          name='lastName'
          labelText='نام خانوادگی'
          isRequired
        />
        <FormSelect
          options={GENDER}
          name='gender'
          labelText='جنسیت'
          defaultValue='man'
          required
        />
        <FormInput
          id='location'
          name='location'
          labelText='شهر محل سکونت'
          isRequired
        />
        <FormInput
          id='phone'
          type='tel'
          name='phoneNumber'
          labelText='شماره تلفن'
          isRequired={false}
        />
        <FormInput
          id='email'
          type='email'
          name='email'
          labelText='ایمیل شخصی'
          isRequired
        />
        <FormInput
          id='password'
          name='password'
          type='password'
          labelText='رمز ورود'
          isRequired
        />
        <SubmitBtn text='ثبت نام' submissionText='در حال ارسال...' />
        <p>
          قبلا ثبت نام کرده اید؟
          <Link to='/login' className='member-btn'>
            ورود به سامانه
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
