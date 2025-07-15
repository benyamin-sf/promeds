import { Form, useOutletContext } from 'react-router-dom';

import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormInput, SubmitBtn } from '../components';

export default function ProfileStaff() {
  const { user } = useOutletContext();

  return (
    <Wrapper>
      <Form method='POST' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>صفحه کاربری</h4>
        {/* user avatar input */}
        <div className='form-center'>
          <FormInput
            id='name'
            name='name'
            labelText='نام'
            defaultValue={user?.name}
            isRequired
          />
          <FormInput
            id='lastName'
            name='lastName'
            labelText='نام خانوادگی'
            defaultValue={user?.lastName}
            isRequired
          />
          <FormInput
            id='email'
            type='email'
            name='personnelEmail'
            labelText='ایمیل پرسنلی'
            defaultValue={user?.personnelEmail}
            isRequired
          />
          <FormInput
            id='password'
            type='password'
            name='password'
            labelText='رمز عبور'
            defaultValue={user?.password}
          />
          <FormInput
            id='workingDays'
            name='workingDays'
            labelText='روزهای حضور در پرومدز'
            defaultValue={user?.workingDays}
            isRequired
          />
          <FormInput
            id='workingHours'
            name='workingHours'
            type='text'
            labelText='ساعات حضور در پرومدز'
            defaultValue={user?.workingHours}
            isRequired
          />
          <FormInput
            id='phoneNumber'
            name='phoneNumber'
            type='tel'
            labelText='شماره تلفن همراه'
            defaultValue={user?.phoneNumber}
            isRequired
          />
          <div className='form-row'>
            <label htmlFor='avatar' className='form-label'>
              انتخاب تصویر پروفایل (حداکثر ۵۰۰ کیلوبایت)
            </label>
            <input
              type='file'
              name='avatar'
              id='avatar'
              className='form-input'
              accept='image/*'
            />
          </div>
          <SubmitBtn
            text='ذخیره اطلاعات'
            submissionText='در حال ذخیره سازی...'
            isFormBtn
          />
        </div>
      </Form>
    </Wrapper>
  );
}
