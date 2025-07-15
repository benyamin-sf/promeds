import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: var(--background-secondary-color);

  .about-header {
    padding: 3rem;

    span {
      color: var(--primary-500);
    }
  }

  .about-content {
    padding: 0 4rem 3rem;

    h5 {
      font-size: 1.4rem;
      margin-bottom: 1.35rem;
    }
  }

  .about-link {
    font-family: var(--en-font-family);
    color: var(--text-color);
    transition: color 0.25s ease;

    &:hover {
      color: var(--primary-500);
    }
  }

  .about-instructions {
    display: flex;
    flex-direction: column;
    list-style: disc;
    gap: 0.5rem;

    li {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-right: 1.25rem;
    }
  }
`;

export default Wrapper;
