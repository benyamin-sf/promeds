import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';

import Wrapper from '../assets/wrappers/Appointment';
import translate from '../utils/langMapping';
import convertToShamsiDate from '../utils/convertToShamsi';

export default function Appointment({
  idx,
  date,
  doctor,
  expired,
  patient,
  reason,
  time,
  color,
}) {
  return (
    <Wrapper color={color}>
      <header>
        <h3 className='header-index'>{idx < 10 ? `0${idx}` : idx}</h3>
        <div className='header-content'>
          <p className='header-info'>{time}</p>
          <p className='header-info'>{convertToShamsiDate(date)}</p>
        </div>
        <div className='expiry-badge'>{expired ? 'منقضی شده' : 'در جریان'}</div>
      </header>
      <ul className='main-info'>
        <li className='info-row'>
          <span>
            <FaLocationArrow />
          </span>
          {patient.name} {patient.lastName}
        </li>
        <li className='info-row'>
          <span>
            <FaBriefcase />
          </span>
          {doctor.name} {doctor.lastName}
        </li>
        <li className='info-row'>
          <span>
            <FaCalendarAlt />
          </span>
          {translate(reason.title)}
        </li>
        <li className='info-row'>
          <span>
            <FaClock />
          </span>
          {reason.avgVisitTime} دقیقه
        </li>
      </ul>
    </Wrapper>
  );
}
