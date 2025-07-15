import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  .appointment-instructions {
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    padding: 3rem 1.75rem;
    margin-bottom: 3rem;
  }
  .instructions-heading {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
  .instructions-content {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    line-height: 1.6;
    span {
      background-color: var(--primary-600);
      border-radius: var(--border-radius);
      padding: 0.15rem 0.25rem;
    }
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .form-title {
    margin-bottom: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    position: relative;
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    display: grid;
    align-self: end;
    place-items: center;
    font-size: 1.15rem;
    margin-top: 1rem;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
