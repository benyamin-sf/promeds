import { Form, Link, useSubmit } from 'react-router-dom';

import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormInput, FormSelect } from '.';
import { useContextOf } from '../Context';
import { GENDER, SORT_BY, SPECIALTIES } from '../../../utils/constants';

const debounce = (cb, gap) => {
  let timeoutId = null;
  return (e) => {
    const form = e.currentTarget.form;
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb(form);
    }, gap);
  };
};

export default function SearchContainer() {
  const submit = useSubmit();
  const { searchValues } = useContextOf('appointments');

  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>جستجو در نوبت های مراجعه</h5>
        <div className='form-center'>
          <FormInput
            type='search'
            labelText='جستجو'
            name='search'
            defaultValue={searchValues?.search}
            onChange={debounce(submit, 1500)}
          />
          <FormSelect
            labelText='مورد مراجعه'
            name='field'
            options={{ ALL: 'all', ...SPECIALTIES }}
            defaultValue={searchValues?.field || 'all'}
            required
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            labelText='جنسیت'
            name='gender'
            options={{ ALL: 'all', ...GENDER }}
            defaultValue={searchValues?.gender || 'all'}
            required
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            labelText='وضعیت نوبت'
            name='expired'
            options={{
              ALL: 'all',
              EXPIRED: 'expired',
              NOT_EXPIRED: 'notExpired',
            }}
            defaultValue={searchValues?.expired || 'all'}
            required
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormSelect
            labelText='ترتیب بر اساس'
            name='sortBy'
            options={{ NONE: 'none', ...SORT_BY }}
            defaultValue={searchValues?.sortBy || 'none'}
            required
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to='.' className='btn form-btn'>
            بازنشانی تنظیمات
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
}
