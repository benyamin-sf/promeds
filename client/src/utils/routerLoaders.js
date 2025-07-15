/* eslint-disable no-unused-vars */
import axios from './customAxios';
import toastify from './toastify';

const loggedUserLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData({
      queryKey: ['user'],
      queryFn: async () => {
        const { data } = await axios.get('/logged-user');
        return data?.message;
      },
    });
  } catch (e) {
    return null;
  }
};

const dashboardLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData({
      queryKey: ['logsCount'],
      queryFn: async () => {
        const { data } = await axios.get('/logs/logged-user-unread');
        return data?.message;
      },
    });
  } catch (e) {
    return null;
  }
};

const userAppointmentsLoader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const { data } = await axios.get('/appointments/logged-user', { params });
    return { data: data?.message, searchValues: params };
  } catch (e) {
    toastify('error', e?.response?.data?.message);
    return null;
  }
};

const dailySpecialtiesLoader = async () => {
  try {
    const dailySpecialties = await axios.get('/get-daily-specialties');
    const dailyAppointments = await axios.get(
      '/appointments/today-appointments'
    );
    return {
      specialties: dailySpecialties.data?.message,
      appointments: dailyAppointments.data?.message,
    };
  } catch (e) {
    toastify('error', 'مشکلی در دریافت نوبت ها وجود دارد.');
    return e;
  }
};

const userMessagesLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData({
      queryKey: ['logs'],
      queryFn: async () => {
        const { data } = await axios.get('/logs/logged-user');
        return data?.message;
      },
    });
  } catch (e) {
    toastify('error', e?.response?.data?.message);
    return null;
  }
};

const singleMessageLoader = async ({ params }) => {
  try {
    const { data } = await axios.get(`/logs/${params?.messageId}`);
    return data?.message;
  } catch (e) {
    toastify('error', e?.response?.data?.message);
    return null;
  }
};

const staffTimelineLoader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData({
      queryKey: ['timeline'],
      queryFn: async () => {
        const { data } = await axios.get('/staff-timeline');
        return data?.message;
      },
    });
  } catch (e) {
    toastify('error', e?.response?.data?.message);
    return null;
  }
};

// ADMIN ONLY
const statsLoader = (queryClient) => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['stats'],
    queryFn: async () => {
      const { data } = await axios.get('/app-stats');
      return data?.message;
    },
  });
};

// ADMIN ONLY
const allStaffDataLoader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);

      return await queryClient.ensureQueryData({
        queryKey: ['adminStaffData'],
        queryFn: async () => {
          const { data } = await axios.get('/staff', { params });
          return data?.message;
        },
      });
    } catch (e) {
      toastify('error', e?.response?.data?.message);
      return null;
    }
  };

// ADMIN ONLY
const allUsersDataLoader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);

      return await queryClient.ensureQueryData({
        queryKey: ['adminUsersData'],
        queryFn: async () => {
          const { data } = await axios.get('/users', { params });
          return data?.message;
        },
      });
    } catch (e) {
      toastify('error', e?.response?.data?.message);
      return null;
    }
  };

export default {
  loggedUserLoader,
  dashboardLoader,
  userAppointmentsLoader,
  dailySpecialtiesLoader,
  userMessagesLoader,
  singleMessageLoader,
  staffTimelineLoader,
  statsLoader,
  allStaffDataLoader,
  allUsersDataLoader,
};
