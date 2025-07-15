import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  .active {
    color: var(--white);
    background-color: var(--primary-500);
  }
  .prev-btn,
  .next-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    color: var(--primary-500);
    background: var(--background-secondary-color);
    border-color: transparent;
    border-radius: var(--border-radius);
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
    transition: var(--transition);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: text;
  }
`;
export default Wrapper;
