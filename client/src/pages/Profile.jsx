import { Form, useOutletContext } from 'react-router-dom';

import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormInput, FormSelect, SubmitBtn } from '../components';
import { GENDER } from '../../../utils/constants';

export default function Profile() {
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
            name='email'
            labelText='ایمیل شخصی'
            defaultValue={user?.email}
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
            id='location'
            name='location'
            labelText='شهر محل سکونت'
            defaultValue={user?.location}
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
          <FormSelect
            id='gender'
            name='gender'
            options={GENDER}
            labelText='جنسیت'
            defaultValue={user?.gender}
            required
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
