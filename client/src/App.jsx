import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Pages and components
import {
  AddAppointment,
  AllAppointments,
  AdminCreateStaff,
  AdminCreateUser,
  DashboardAbout,
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  LoginStaff,
  Messages,
  Profile,
  Register,
  Stats,
  Staff,
  Users,
  ProfileStaff,
  Message,
  StaffTimeline,
} from './pages';
import { ErrorElement } from './components';

// Actions and Loaders
import actions from './utils/routerActions';
import loaders from './utils/routerLoaders';

// setting stale-time for queries to 5 mins
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout queryClient={queryClient} />,
    loader: loaders.loggedUserLoader(queryClient),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'login',
        children: [
          {
            index: true,
            element: <Login />,
            action: actions.loginAction(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'staff',
            element: <LoginStaff />,
            action: actions.staffLoginAction(queryClient),
            errorElement: <ErrorElement />,
          },
        ],
      },
      {
        path: 'register',
        element: <Register />,
        action: actions.registerAction,
        errorElement: <ErrorElement />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: loaders.dashboardLoader(queryClient),
        errorElement: <ErrorElement />,
        children: [
          {
            index: true,
            element: <DashboardAbout />,
          },
          {
            path: 'appointments',
            element: <AllAppointments />,
            loader: loaders.userAppointmentsLoader,
            errorElement: <ErrorElement />,
          },
          {
            path: 'new-appointment',
            element: <AddAppointment />,
            loader: loaders.dailySpecialtiesLoader,
            action: actions.AddAppointmentAction,
            errorElement: <ErrorElement />,
          },
          {
            path: 'profile',
            children: [
              {
                index: true,
                element: <Profile />,
                action: actions.profileAction(queryClient),
                errorElement: <ErrorElement />,
              },
              {
                path: 'staff',
                element: <ProfileStaff />,
                action: actions.profileAction(queryClient),
                errorElement: <ErrorElement />,
              },
            ],
          },
          {
            path: 'staff-timeline',
            element: <StaffTimeline />,
            loader: loaders.staffTimelineLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'messages',
            children: [
              {
                index: true,
                element: <Messages queryClient={queryClient} />,
                loader: loaders.userMessagesLoader(queryClient),
                errorElement: <ErrorElement />,
              },
              {
                path: ':messageId',
                element: <Message />,
                loader: loaders.singleMessageLoader,
                errorElement: <ErrorElement />,
              },
            ],
          },
          {
            path: 'admin',
            children: [
              {
                index: true,
                element: <Stats />,
                loader: loaders.statsLoader(queryClient),
                errorElement: <ErrorElement />,
              },
              {
                path: 'users',
                children: [
                  {
                    index: true,
                    element: <Users queryClient={queryClient} />,
                    loader: loaders.allUsersDataLoader(queryClient),
                    errorElement: <ErrorElement />,
                  },
                  {
                    path: 'create',
                    element: <AdminCreateUser />,
                    action: actions.userCreateAction(queryClient),
                    errorElement: <ErrorElement />,
                  },
                ],
              },
              {
                path: 'staff',
                children: [
                  {
                    index: true,
                    element: <Staff queryClient={queryClient} />,
                    loader: loaders.allStaffDataLoader(queryClient),
                    errorElement: <ErrorElement />,
                  },
                  {
                    path: 'create',
                    element: <AdminCreateStaff />,
                    action: actions.staffCreateAction(queryClient),
                    errorElement: <ErrorElement />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default function App() {
  document.body.classList.toggle(
    'dark-theme',
    localStorage.getItem('darkTheme') === 'true'
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
