import { nanoid } from 'nanoid';

import { IoCalendarSharp } from 'react-icons/io5';
import { FaHistory, FaUsers, FaRegChartBar, FaUserPlus } from 'react-icons/fa';
import { BsMailbox2Flag } from 'react-icons/bs';
import { FaUserDoctor } from 'react-icons/fa6';
import { MdMedicalInformation, MdManageAccounts } from 'react-icons/md';
import { ImUserPlus } from 'react-icons/im';

const links = [
  {
    id: nanoid(),
    text: 'مراجعات گذشته',
    path: 'appointments',
    icon: <FaHistory />,
    access: 'user',
  },
  {
    id: nanoid(),
    text: 'درخواست نوبت جدید',
    path: 'new-appointment',
    icon: <MdMedicalInformation />,
    access: 'user,admin',
  },
  {
    id: nanoid(),
    text: 'جدول حضور پزشکان',
    path: 'staff-timeline',
    icon: <IoCalendarSharp />,
    access: 'user,admin,staff',
  },
  {
    id: nanoid(),
    text: 'ویرایش حساب کاربری',
    path: 'profile',
    icon: <MdManageAccounts />,
    access: 'admin,user',
  },
  {
    id: nanoid(),
    text: 'ویرایش حساب کاربری',
    path: 'profile/staff',
    icon: <MdManageAccounts />,
    access: 'staff',
  },
  {
    id: nanoid(),
    text: 'صندوق پیام',
    path: 'messages',
    icon: <BsMailbox2Flag />,
    access: 'user,staff',
  },
  {
    id: nanoid(),
    text: 'آمارها و جداول',
    path: 'admin',
    icon: <FaRegChartBar />,
    access: 'admin',
  },
  {
    id: nanoid(),
    text: 'لیست کاربران',
    path: 'admin/users',
    icon: <FaUsers />,
    access: 'admin',
  },
  {
    id: nanoid(),
    text: 'ایجاد کاربر جدید',
    path: 'admin/users/create',
    icon: <FaUserPlus />,
    access: 'admin',
  },
  {
    id: nanoid(),
    text: 'لیست پرسنل',
    path: 'admin/staff',
    icon: <FaUserDoctor />,
    access: 'admin',
  },
  {
    id: nanoid(),
    text: 'ایجاد پرسنل جدید',
    path: 'admin/staff/create',
    icon: <ImUserPlus />,
    access: 'admin',
  },
];

export default links;
