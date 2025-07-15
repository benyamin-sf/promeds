import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Outlet,
  useNavigate,
  useNavigation,
  useOutletContext,
} from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { LargeSidebar, MobileSidebar, Navbar, Loading } from '../components';
import { useContextGenerator } from '../Context';
import axios from '../utils/customAxios';
import toastify from '../utils/toastify';

export default function DashboardLayout() {
  const Provider = useContextGenerator('dashboard');
  const { user, onLogout, loadingState } = useOutletContext();
  const { data } = useQuery({
    queryKey: ['logsCount'],
    queryFn: async () => {
      const { data } = await axios.get('/logs/logged-user-unread');
      return data?.message;
    },
  });

  const navigation = useNavigation();
  const navigate = useNavigate();

  const isPageLoading = navigation.state === 'loading';
  const sidebarStatus = localStorage.getItem('isSidebarOpen') === 'true';

  const [isSidebarOpen, setIsSidebarOpen] = useState(sidebarStatus);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem('darkTheme') === 'true'
  );

  const onToggleDarkTheme = () => {
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);
  };

  const onToggleSidebar = () => {
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  };

  useEffect(() => {
    localStorage.setItem('isSidebarOpen', isSidebarOpen);
  }, [isSidebarOpen]);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('darkTheme', isDarkTheme);
  }, [isDarkTheme]);

  useEffect(() => {
    if (loadingState !== 'success') {
      toastify(
        'error',
        'برای دسترسی به پنل کاربری، لطفا ابتدا وارد حساب کاربری خودتان شوید.'
      );
      navigate('/');
    }
  }, [loadingState, navigate]);

  const contextValues = {
    user,
    isSidebarOpen,
    isDarkTheme,
    onToggleSidebar,
    onToggleDarkTheme,
    onLogout,
    unreadLogsCount: data,
  };

  return (
    <Provider value={contextValues}>
      <Wrapper>
        <div className='dashboard'>
          <LargeSidebar />
          <MobileSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </div>
      </Wrapper>
    </Provider>
  );
}
