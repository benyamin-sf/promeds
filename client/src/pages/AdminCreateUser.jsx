import { Form } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormInput, SubmitBtn, FormSelect } from '../components';
import { GENDER, ROLES } from '../../../utils/constants';

export default function Register() {
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <h4>ایجاد کاربر جدید</h4>
        <FormInput id='name' name='name' labelText='نام' isRequired />
        <FormInput
          id='last-name'
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
          labelText='محل سکونت'
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
        <FormSelect
          options={ROLES}
          name='role'
          labelText='میزان دسترسی'
          defaultValue='user'
          required={false}
        />
        <SubmitBtn text='ایجاد کاربر' submissionText='در حال ثبت اطلاعات...' />
      </Form>
    </Wrapper>
  );
}
