import { Link, useLoaderData } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

import Wrapper from '../assets/wrappers/SingleMessage';

export default function Message() {
  const msgData = useLoaderData();

  return (
    <Wrapper>
      <header className='message-header'>
        <Link className='btn back-btn' to='..'>
          <FaChevronRight />
        </Link>
        <h2 className='message-heading'>{msgData.title}</h2>
      </header>
      <p className='message-content'>{msgData.message}</p>
    </Wrapper>
  );
}
