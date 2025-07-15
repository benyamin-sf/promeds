import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Wrapper from '../assets/wrappers/StaffList';
import axios from '../utils/customAxios';
import {
  PersonInfoCard,
  AdminStatsBar,
  PaginationContainer,
} from '../components';

export default function Staff({ queryClient }) {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const params = Object.fromEntries([...searchParams.entries()]);

  const { data } = useQuery({
    queryKey: ['adminUsersData'],
    queryFn: async () => {
      const { data } = await axios.get('/users', { params });
      return data?.message;
    },
  });

  const { users, numberOfPages, currentPage, count, menCount, womenCount } =
    data;

  return (
    <Wrapper>
      <h2 className='staff-heading'>کاربران</h2>
      <AdminStatsBar
        count={count}
        menCount={menCount}
        womenCount={womenCount}
      />
      <ul className='staff-list'>
        {users?.map((person) => {
          return <PersonInfoCard key={person.id} {...person} />;
        })}
      </ul>
      {numberOfPages > 1 && (
        <PaginationContainer
          queryClient={queryClient}
          queryKey='adminUsersData'
          numberOfPages={numberOfPages}
          currentPage={currentPage}
        />
      )}
    </Wrapper>
  );
}
