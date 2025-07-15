import { useLoaderData } from 'react-router-dom';

import { AppointmentsContainer, SearchContainer } from '../components';
import { useContextGenerator } from '../Context';

export default function AllAppointments() {
  const { data, searchValues } = useLoaderData();
  const Provider = useContextGenerator('appointments');

  return (
    <Provider value={{ data, searchValues }}>
      <SearchContainer />
      <AppointmentsContainer />
    </Provider>
  );
}
