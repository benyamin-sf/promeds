import styled from 'styled-components';

const Wrapper = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.45rem;
  background: transparent;
  border-color: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  margin-top: 0.15rem;

  .toggle-icon {
    color: var(--text-color);
  }
`;
export default Wrapper;
