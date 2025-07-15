import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3rem 4rem;
  .error-header {
    display: flex;
    align-items: center;
    gap: 0.85rem;

    svg {
      font-size: 1.8rem;
      color: var(--primary-500);
    }
  }
  h4 {
    font-size: 2rem;
    font-weight: semibold;
    margin: 1.5rem 0;
  }
  .error-content {
    padding: 0 2rem;
  }
  .error-msg {
    font-size: 1.2rem;
    padding: 0 1rem;
    margin-bottom: 1.75rem;
  }
  ol {
    margin-bottom: 1.75rem;
  }
  li {
    font-size: 1.2rem;

    &:not(:last-child) {
      margin-bottom: 0.65rem;
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 1.6;
    margin-left: -1rem;
    margin-bottom: 3rem;
  }
  .btn {
    display: block;
    width: 15rem;
    text-align: center;
    padding: 0.75rem 1rem;
    margin: 0 auto;
  }
`;

export default Wrapper;
