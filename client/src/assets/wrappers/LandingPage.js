import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.35rem;
  }
  .nav-link {
    font-size: 1.25rem;
    color: var(--primary-500);
    &:hover {
      color: var(--primary-600);
      text-shadow: var(--shadow-1);
    }
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
  .user-welcome {
    font-size: 1.2rem;
    margin: 0;
  }
  .user-logged .nav-link {
    font-size: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.75rem 1rem;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  span {
    color: var(--primary-500);
  }
  p {
    max-width: 35em;
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 2.5rem;
  }
  .register-link {
    font-size: 1.15rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
      text-align: right;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
