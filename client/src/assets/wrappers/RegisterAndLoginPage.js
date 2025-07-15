import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    width: 75px;
    display: block;
    margin: 0 auto;
    margin-bottom: 1.75rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    padding: 3rem 2.25rem;
  }
  h4 {
    text-align: center;
    margin-bottom: 2.75rem;
  }
  p {
    font-size: 1rem;
    text-align: center;
    line-height: 1.5;
    margin-top: 1.5rem;
  }
  .btn {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-right: 0.35rem;
  }
  .input-overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2.2rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    background-color: var(--background-color);
    border: 1px solid var(--grey-300);
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
    padding: 0.375rem 0.75rem;
  }
  .overlay-text {
    font-size: 1rem;
    line-height: 1;
    padding: 0;
    margin: 0;
  }
`;
export default Wrapper;
