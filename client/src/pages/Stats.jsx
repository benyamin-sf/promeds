import { useQuery } from '@tanstack/react-query';

import { StatsContainer, ChartContainer } from '../components';
import axios from '../utils/customAxios';

export default function Stats() {
  const { data } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const { data } = await axios.get('/app-stats');
      return data?.message;
    },
  });

  const { patientsCount, doctorsCount, specialtiesCount, appointments } = data;

  return (
    <>
      <StatsContainer
        patients={patientsCount}
        doctors={doctorsCount}
        specialties={specialtiesCount}
      />
      {appointments?.length && <ChartContainer data={appointments} />}
    </>
  );
}
