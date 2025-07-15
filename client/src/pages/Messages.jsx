import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Wrapper from '../assets/wrappers/Messages';
import axios from '../utils/customAxios';
import toastify from '../utils/toastify';
import { MessageCard } from '../components';

export default function Messages({ queryClient }) {
  const navigate = useNavigate();
  const { data: messages } = useQuery({
    queryKey: ['logs'],
    queryFn: async () => {
      const { data } = await axios.get('/logs/logged-user');
      return data?.message;
    },
  });

  const onMessageDelete = async (id) => {
    try {
      await axios.delete(`/logs/${id}`);
      toastify('success', 'پیام انتخاب شده با موفقیت حذف شد.');
    } catch (e) {
      console.error(e.message);
      toastify('error', 'در فرآیند حذف پیام مشکلی پیش آمده است.');
    }
  };

  const onMessageRead = async (id, inPlace = true) => {
    try {
      const { data } = await axios.patch(`/logs/${id}`);
      queryClient.invalidateQueries(['logs']);
      if (inPlace) {
        toastify('success', data?.message);
      }
    } catch (e) {
      console.error(e.message);
      toastify('error', 'مشکلی در تغییر وضعیت پیام پیش آمده است.');
    }
  };

  const onMessageOpen = async (id) => {
    await onMessageRead(id, false);
    navigate(`./${id}`);
  };

  return (
    <Wrapper>
      {messages?.length > 0 && (
        <>
          <h2 className='section-heading'>
            <span>📬️</span>صندوق پیام
          </h2>
          <ul className='messages'>
            {messages?.map((msg) => (
              <MessageCard
                key={msg.id}
                {...msg}
                onDelete={onMessageDelete}
                onRead={onMessageRead}
                onOpen={onMessageOpen}
              />
            ))}
          </ul>
        </>
      )}

      {messages?.length === 0 && (
        <div className='no-message'>
          <h2 className='section-heading'>
            <span>📭️</span>صندوق پیام
          </h2>
          <p className='empty-box-text'>
            هنوز هیچ پیامی در صندوق پیام هایتان موجود نیست. با رزرو نوبت پزشکی
            پیام های یادآوری برای شما ارسال خواهد شد. همچنین ممکن است در موارد
            خاص یا زمانی که تیم پرومدز بخواهند نکته مهمی را با شما به اشتراک
            بگذارند، از طرف مدیر سامانه پیام هایی برایتان ارسال کنیم. پس حتما هر
            از گاهی به پیام هایتان یه سر بزنید...
          </p>
        </div>
      )}
    </Wrapper>
  );
}
