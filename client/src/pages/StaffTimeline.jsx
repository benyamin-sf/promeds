import { useQuery } from '@tanstack/react-query';

import Wrapper from '../assets/wrappers/Timeline';
import axios from '../utils/customAxios';
import translate from '../utils/langMapping';
import { WEEK_INDEX } from '../../../utils/constants';

export default function StaffTimeline() {
  const { data } = useQuery({
    queryKey: ['timeline'],
    queryFn: async () => {
      const { data } = await axios.get('/staff-timeline');
      return data?.message;
    },
  });

  console.log(data);

  return (
    <Wrapper>
      <h2 className='timeline-heading'>جدول هفتگی حضور کادر درمان</h2>
      <div className='timeline-table'>
        <header className='table-header'>
          <ul className='table-row header-row'>
            <li className='row-cell header-cell'></li>
            {WEEK_INDEX.map((day) => (
              <li key={day} className='row-cell header-cell days'>
                {translate(day)}
              </li>
            ))}
          </ul>
        </header>
        <article className='table-content'>
          {data.map(
            ({
              id,
              prefix,
              fullName,
              specialty,
              workingDays,
              workingHours,
            }) => (
              <ul key={id} className='table-row content-row'>
                <li className='row-cell content-cell doctor-info'>
                  <h5 className='doctor-name'>
                    {prefix} {fullName}
                  </h5>
                  <hr />
                  <p className='doctor-specialty'>{translate(specialty)}</p>
                </li>
                {WEEK_INDEX.map((day) => (
                  <li key={day} className='row-cell content-cell data'>
                    {workingDays?.includes(day) ? (
                      <p className='content-cell-data'>{workingHours}</p>
                    ) : (
                      <p className='content-cell-data'>عدم حضور</p>
                    )}
                  </li>
                ))}
              </ul>
            )
          )}
        </article>
      </div>
    </Wrapper>
  );
}
