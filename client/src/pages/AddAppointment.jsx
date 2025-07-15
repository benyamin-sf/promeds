import { useState, useEffect, useRef } from 'react';
import { Form, useLoaderData, useOutletContext } from 'react-router-dom';

import Wrapper from '../assets/wrappers/DashboardFormPage';
import { FormSelect, SubmitBtn } from '../components';

export default function AddAppointments() {
  const { specialties, appointments } = useLoaderData();
  const { user } = useOutletContext();

  const calculatedValues = useRef({
    specialty: null,
    doctor: null,
    timeStart: null,
    timeEnd: null,
    timeTotal: null,
  });

  const todaySpecialties = specialties?.reduce((acc, curr) => {
    acc[curr.title] = curr.title;
    return acc;
  }, {});

  const [specialty, setSpecialty] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [visitTimes, setVisitTimes] = useState(null);
  const [timeSelectorText, setTimeSelectorText] = useState(
    'زمان نوبت خودتان را انتخاب کنید'
  );

  useEffect(() => {
    const selectedSpecialty = specialties.find(
      (data) => data.title === specialty
    );

    calculatedValues.current.specialty = selectedSpecialty;

    setDoctors(selectedSpecialty?.doctors);

    setTimeSelectorText('زمان نوبت خودتان را انتخاب کنید');
    setSelectedDoctor(null);
    setVisitTimes(null);

    if (document?.getElementById('doctor')) {
      document.getElementById('doctor').value = '';
      document.getElementById('time').value = '';
    }
  }, [specialty, specialties]);

  useEffect(() => {
    if (!selectedDoctor) return;

    const selectedDoctorPersonnelId = selectedDoctor.split(' - ').at(0);
    const selectedDoctorObj = doctors.find(
      (doctor) => doctor.personnelId === selectedDoctorPersonnelId
    );

    if (!selectedDoctorObj) return;

    calculatedValues.current.doctor = selectedDoctorObj;

    const [doctorStartingHour, doctorEndingHour] =
      selectedDoctorObj.workingHours.split('-');
    const [startingHour, startingMins] = doctorStartingHour.split(':');
    const [endingHour, endingMins] = doctorEndingHour.split(':');

    const now = new Date(Date.now());
    const startAsDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      startingHour,
      startingMins,
      0
    );
    const endAsDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      endingHour,
      endingMins,
      0
    );

    calculatedValues.current.timeStart = startAsDate;
    calculatedValues.current.timeEnd = endAsDate;

    const workingHoursInMs = endAsDate - startAsDate;
    const workingHoursInMin = Math.floor(workingHoursInMs / (1000 * 60));

    calculatedValues.current.timeTotal = workingHoursInMin;

    const numberOfAppointmentsPerDay = Math.floor(
      workingHoursInMin / calculatedValues.current.specialty.avgVisitTime
    );

    const relatedAppointments = appointments
      .filter(
        (appointment) =>
          appointment.reasonId === calculatedValues.current.specialty.id &&
          appointment.doctorId === calculatedValues.current.doctor.id
      )
      .map((appointment) => appointment.time);

    const todayCopy = new Date(now);
    const halfHourFromNow = new Date(
      todayCopy.setMinutes(now.getMinutes() + 60)
    );

    const appointmentsTimes = [];
    for (let i = 0; i <= numberOfAppointmentsPerDay; i++) {
      const newStartingDate = new Date(calculatedValues.current.timeStart);
      const appointmentDate = new Date(
        newStartingDate.setMinutes(
          newStartingDate.getMinutes() +
            calculatedValues.current.specialty.avgVisitTime * i
        )
      );

      const newStartingHour = appointmentDate.getHours();
      const newStartingMin = appointmentDate.getMinutes();
      const appointmentTimeStr = `${
        newStartingHour < 10 ? `0${newStartingHour}` : newStartingHour
      }:${newStartingMin < 10 ? `0${newStartingMin}` : newStartingMin}`;

      if (
        !relatedAppointments.includes(appointmentTimeStr) &&
        halfHourFromNow < appointmentDate
      ) {
        appointmentsTimes.push(appointmentTimeStr);
      }
    }

    setVisitTimes(appointmentsTimes);

    if (document?.getElementById('doctor')) {
      document.getElementById('time').value = '';
    }
  }, [selectedDoctor, doctors, specialties, appointments]);

  useEffect(() => {
    if (visitTimes) {
      setTimeSelectorText('اکنون امکان دریافت نوبت وجود ندارد');
    }
  }, [visitTimes]);

  if (!specialties?.length) {
    return (
      <Wrapper>
        <h2>متاسفانه امروز هیچ کدام از پزشکان ما در مرکز حضور ندارند.</h2>
        <p>
          میتوانید با تماس با شماره تماس 021-8873193 اطلاعات بیشتری بدست
          بیاورید.
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <header className='appointment-instructions'>
        <h3 className='instructions-heading'>
          🚧 {user?.name} جان برای اینکه در گرفتن نوبت به مشکلی برنخوری، لطفا به
          نکات زیر توجه داشته باش:
        </h3>
        <div className='instructions-content'>
          <p>
            اول اینکه دقت داشته باش که گزینه های <span>پزشک / متخصص</span> و{' '}
            <span>انتخاب زمان</span> تا زمانی که گزینه ای از لیست{' '}
            <span>مورد مراجعه</span> رو انتخاب نکرده باشی، خالی هستن. درواقع شما
            باید لیست ها رو به ترتیب انتخاب کنی و سیستم خودش موارد بعدی رو
            براساس موارد انتخابی قبلی برات فراهم میکنه.
          </p>
          <p>
            نکته بعد اینکه اگر توی لیست <span>انتخاب زمان</span> ساعت نوبت مورد
            نظرت رو پیدا نمیکنی، احتمالا بخاطر اینه که یکی دیگه از کاربرهامون
            اون زمان رو، برای اون پزشک خاص قبلا انتخاب کرده. تو این موقعیت
            میتونید یه پزشک دیگه با اون تخصص رو انتخاب کنی یا با اپراتور های ما
            تماس بگیری تا یه راه حلی برای این مشکل پیدا کنن.
          </p>
          <p>
            مسأله آخر، که قبلا هم توی صفحه اصلی پنل کاربری تون یادآور شدیم اینکه
            حتما حتما سعی کن روزها و ساعت هایی رو برای رزرو کردن نوبت انتخاب کنی
            که حتما بتونی توی مرکز حضور پیدا کنی. با این کار و سرموقع نوبت حاضر
            شدن، خیلی به جلوگیری از اتلاف زمان خودت و دیگران کمک میکنی.
          </p>
        </div>
      </header>

      <Form method='POST' className='form'>
        <h4 className='form-title'>فرم درخواست نوبت پزشکی</h4>
        <div className='form-center'>
          <FormSelect
            id='reason'
            labelText='مورد مراجعه'
            name='reason'
            options={{
              NULL: 'تخصص مورد نیازتان را انتخاب کنید',
              ...todaySpecialties,
            }}
            defaultValue='ALL'
            onChange={(e) => setSpecialty(e.target.value)}
            required
          />
          <FormSelect
            id='doctor'
            labelText='پزشک / متخصص'
            name='doctor'
            options={{
              NULL: 'پزشک مورد نظرتان را انتخاب کنید',
              ...doctors?.reduce((acc, doctor) => {
                acc[
                  doctor?.personnelId
                ] = `${doctor?.personnelId} - ${doctor?.name} ${doctor?.lastName}`;
                return acc;
              }, {}),
            }}
            defaultValue='NULL'
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
          />
          <FormSelect
            id='time'
            labelText='انتخاب زمان (تقریبی)'
            name='time'
            options={{ NULL: timeSelectorText, ...visitTimes }}
            defaultValue='NULL'
            required
          />
          <SubmitBtn
            text='ثبت نوبت'
            submissionText='در حال ارسال...'
            isFormBtn
          />
        </div>
      </Form>
    </Wrapper>
  );
}
