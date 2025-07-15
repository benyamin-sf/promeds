import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-align: center;
    text-transform: none;
    padding: 2rem 0;
  }
  p {
    text-align: center;
    margin-bottom: 4rem;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .appointments {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .appointments {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
