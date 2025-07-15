import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import axios from '../utils/customAxios';
import toastify from '../utils/toastify';

export default function HomeLayout({ queryClient }) {
  const navigate = useNavigate();

  const [isAuthError, setIsAuthError] = useState(false);
  const [user, setUser] = useState(null);

  const userData = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await axios.get('/logged-user');
      return data?.message;
    },
  });

  useEffect(() => {
    if (userData.status === 'success') {
      setUser(userData.data);
    }
  }, [userData]);

  const onLogoutUser = async (showToast = true) => {
    await axios.get('/logout');
    setUser(null);
    queryClient.removeQueries();
    if (showToast) toastify('success', 'روز خوبی و خوشی رو واست آرزومندیم 👋');
    return navigate('/');
  };

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    (async () => {
      await onLogoutUser(false);
    })();
  }, [isAuthError]);

  return (
    <main id='main'>
      <Outlet
        context={{
          user,
          onLogout: onLogoutUser,
          loadingState: userData.status,
        }}
      />
    </main>
  );
}
