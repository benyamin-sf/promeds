import { Form } from 'react-router-dom';

import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormInput, FormSelect, SubmitBtn } from '../components';
import { GENDER, SPECIALTIES } from '../../../utils/constants';

export default function RegisterStaff() {
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <h4>ایجاد حساب پرسنلی</h4>
        <FormInput id='name' name='name' labelText='نام' isRequired />
        <FormInput
          id='last-name'
          name='lastName'
          labelText='نام خانوادگی'
          isRequired
        />
        <FormInput
          id='personnelId'
          type='text'
          name='personnelId'
          labelText='شماره پرسنلی'
          defaultValue={Math.floor(Math.random() * 9999) + 1}
          isRequired
        />
        <FormInput
          id='personnelEmail'
          type='email'
          name='personnelEmail'
          labelText='ایمیل پرسنلی'
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
          options={GENDER}
          name='gender'
          labelText='جنسیت'
          defaultValue='man'
        />
        <FormInput
          id='phoneNumber'
          name='phoneNumber'
          type='tel'
          labelText='شماره تلفن همراه'
        />
        <FormInput
          id='workingDays'
          name='workingDays'
          type='text'
          labelText='روزهای حضور'
          isRequired
        />
        <FormInput
          id='workingHoursFrom'
          name='workingHoursFrom'
          type='time'
          labelText='حضور از (ساعت)'
          isRequired
        />
        <FormInput
          id='workingHourTo'
          name='workingHoursTo'
          type='time'
          labelText='حضور تا (ساعت)'
          isRequired
        />
        <FormSelect
          id='specialty'
          name='specialty'
          options={{ NULL: 'تخصص مورد نظر را انتخاب کنید', ...SPECIALTIES }}
          labelText='تخصص پزشکی'
          required
        />
        <FormSelect
          options={{ STAFF: 'staff' }}
          name='role'
          labelText='میزان دسترسی'
          defaultValue='staff'
          required
        />
        <SubmitBtn text='ایجاد' submissionText='در حال ثبت اطلاعات...' />
      </Form>
    </Wrapper>
  );
}
