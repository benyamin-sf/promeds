import { redirect } from 'react-router-dom';

import axios from './customAxios';
import toastify from './toastify';

const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post('/auth/register', { ...data, role: 'user' });
    toastify('success', 'ثبت نام با موفقیت انجام شد');
    return redirect('/login');
  } catch (e) {
    toastify('error', e?.response?.data?.message);
    return e;
  }
};

const loginAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const user = await axios.post('/auth/login', data);
      queryClient.invalidateQueries();
      toastify('success', user?.data?.message);
      return redirect('/');
    } catch (e) {
      toastify('error', e?.response?.data?.message);
      return e;
    }
  };

// ADMIN ONLY
const userCreateAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const newUser = await axios.post('/users', data);
      queryClient.invalidateQueries(['adminUsersData']);
      toastify('success', newUser?.data?.message);
      return redirect('..');
    } catch (e) {
      toastify('error', e?.response?.data?.message);
      return e;
    }
  };

// ADMIN ONLY
const staffCreateAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      // some data formatting to adhere to createStaff API route
      data.personnelId = `PM${data.personnelId}`;
      data.workingDays = data.workingDays.split(',');
      data.workingHours = `${data.workingHoursFrom}-${data.workingHoursTo}`;

      delete data.workingHoursFrom;
      delete data.workingHoursTo;

      const newMember = await axios.post('/staff', data);
      queryClient.invalidateQueries(['adminStaffData', 'timeline']);
      toastify('success', newMember?.data?.message);
      return redirect('..');
    } catch (e) {
      toastify('error', e?.response?.data?.message);
      return e;
    }
  };

const staffLoginAction =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const newMember = await axios.post('/auth/staff/login', {
        ...data,
        personnelId: `PM${data.personnelId}`,
      });
      queryClient.invalidateQueries();
      toastify('success', newMember?.data?.message);
      return redirect('/dashboard');
    } catch (e) {
      toastify('error', e?.response?.data?.message);
      return e;
    }
  };

const AddAppointmentAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const time = data?.time;
    const doctor = data?.doctor;
    const personnelId = doctor.split(' - ').at(0);

    const doctorObj = await axios.post('/get-staff-id', { personnelId });

    await axios.post('/appointments', {
      doctor: doctorObj?.data?.message?.id,
      time,
    });

    toastify('success', 'نوبت شما با موفقیت ثبت شد.');
    return redirect('..');
  } catch (e) {
    toastify('error', e?.response?.data?.message);
    return redirect('..');
  }
};

const profileAction =
  (queryClient) =>
  async ({ request }) => {
    try {
      const formData = await request.formData();

      const avatarFile = formData.get('avatar');
      if (avatarFile && avatarFile.size > 500_000) {
        toastify('error', 'حجم تصویر ارسالی زیاد است. (حداکثر ۵۰۰ کیلوبایت)');
        return null;
      }

      const { data } = await axios.put('/update-self', formData);
      queryClient.invalidateQueries(['user']);
      toastify('success', data?.message);
      redirect('/dashboard');
    } catch (e) {
      toastify('error', e?.response?.data?.message);
    }
    return null;
  };

export default {
  registerAction,
  loginAction,
  userCreateAction,
  staffCreateAction,
  staffLoginAction,
  AddAppointmentAction,
  profileAction,
};
