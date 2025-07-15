import { MdOutlineMedicalServices } from 'react-icons/md';
import { FaUserDoctor } from 'react-icons/fa6';
import { HiUsers } from 'react-icons/hi2';
import { nanoid } from 'nanoid';

import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';

export default function StatsContainer({ patients, doctors, specialties }) {
  const stats = [
    {
      id: nanoid(),
      title: 'کاربران ثبت شده',
      count: patients || 0,
      color: '#f59e0b',
      bgColor: '#fef3c7',
      icon: <HiUsers />,
    },
    {
      id: nanoid(),
      title: 'همکاران و کادر درمان',
      count: doctors || 0,
      color: '#647acb',
      bgColor: '#e0e8f9',
      icon: <FaUserDoctor />,
    },
    {
      id: nanoid(),
      title: 'تخصص ها و خدمات',
      count: specialties || 0,
      color: '#d66a6a',
      bgColor: '#ffeeee',
      icon: <MdOutlineMedicalServices />,
    },
  ];

  return (
    <Wrapper>
      {stats.map((stat) => (
        <StatItem key={stat.id} {...stat} />
      ))}
    </Wrapper>
  );
}
