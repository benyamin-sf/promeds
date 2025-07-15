import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--background-secondary-color);
  border-radius: var(--border-radius);
  padding: 2rem 4rem;
  .message-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  .back-btn {
    width: 2.5rem;
    height: 2.5rem;
    display: grid;
    place-items: center;
    font-size: 1.6rem;
    padding: 0;
  }
  .message-heading {
    font-size: 1.6rem;
  }
  .message-content {
    font-size: 1.2rem;
    line-height: 1.6;
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    padding: 2rem 3.5rem;
  }
`;

export default Wrapper;
