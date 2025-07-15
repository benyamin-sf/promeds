import Wrapper from '../assets/wrappers/AppointmentsContainer';
import { useContextOf } from '../Context';
import Appointment from './Appointment';
import PaginationContainer from './PaginationContainer';
import axios from '../utils/customAxios';

export default function AppointmentsContainer() {
  const {
    data: { appointments, count, numberOfPages, currentPage },
    searchValues,
  } = useContextOf('appointments');

  if (!count) {
    return (
      <Wrapper>
        <h2>🩺 هیچ نوبت مراجعه ای ثبت نشده است</h2>
        <p>امیدواریم همیشه سالم و تندرست باشید...</p>
      </Wrapper>
    );
  }

  if (searchValues?.page && searchValues.page > numberOfPages) {
    return (
      <Wrapper>
        <h2>🫤 به نظر میرسد به صفحه اشتباهی آمده اید!</h2>
        <p>لطفا یکی دیگر از صفحات را انتخاب کنید...</p>
        <PaginationContainer />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>{count} مورد نوبت مراجعه پیدا شد</h5>
      <div className='appointments'>
        {appointments.map((appointment, idx) => {
          const [hours, minutes] = appointment.time.split(':');

          const now = new Date(Date.now());
          const appointmentDate = new Date(appointment.date);
          appointmentDate.setHours(hours);
          appointmentDate.setMinutes(minutes);

          if (now > appointmentDate) {
            appointment.expired = true;
            (async () => {
              await axios.patch(`/appointments/${appointment.id}`);
            })();
          }

          return (
            <Appointment
              key={appointment.id}
              idx={idx + 1}
              color={appointment.expired ? '#f59e0b' : '#2cb1bc'}
              {...appointment}
            />
          );
        })}
      </div>
      {numberOfPages > 1 && (
        <PaginationContainer
          numberOfPages={numberOfPages}
          currentPage={currentPage}
        />
      )}
    </Wrapper>
  );
}
