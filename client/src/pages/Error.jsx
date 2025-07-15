import { Link, useRouteError } from 'react-router-dom';

import Wrapper from '../assets/wrappers/ErrorPage';
import errorImg from '../assets/images/not-found.svg';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={errorImg} alt='not found logo' />
          <h3>صفحه مورد نظر شما پیدا نشد!</h3>
          <p>به نظر میرسد صفحه ای که به دنبال آن هستید وجود ندارد.</p>
          <Link to='/dashboard'>بازگشت به خانه</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>مشکلی پیش آمده است!</h3>
        <p>{error.message}</p>
      </div>
    </Wrapper>
  );
}
