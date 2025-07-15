import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    height: var(--btn-height);
    font-size: 1.15rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 125%;
    left: 0;
    width: 100%;
    height: var(--btn-height);
    text-align: center;
    box-shadow: var(--shadow-2);
    background: var(--primary-500);
    border-radius: var(--border-radius);
    transform: translateY(-50px);
    transition: transform 0.25s, opacity 0.45s ease;
    pointer-events: none;
    opacity: 0;
    z-index: 9;
  }
  .show-dropdown {
    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
    z-index: 3;
  }
  .dropdown-btn {
    width: 100%;
    height: 100%;
    font-size: 0.85rem;
    letter-spacing: var(--letter-spacing);
    color: var(--white);
    background: transparent;
    border-color: transparent;
    border-radius: var(--border-radius);
    text-transform: capitalize;
    cursor: pointer;
    padding: 0.5rem;

    &:hover {
      background: var(--primary-600);
      box-shadow: var(--shadow-3);
    }
  }
`;

export default Wrapper;
