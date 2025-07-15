import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  z-index: 999;
  .nav-center {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
  .notification-container {
    position: relative;
    display: grid;
    place-items: center;
    width: var(--btn-height);
    height: var(--btn-height);
    font-size: 1.75rem;
    color: var(--text-color);
    border-radius: var(--border-radius);
    svg {
      transform-origin: top;
    }
  }
  .notification-container.dirty {
    border: 1px solid var(--primary-600);
    box-shadow: 0 0.5rem 1.5rem rgba(44, 177, 188, 0.15);
    svg {
      animation: jingle 3s ease-in-out 1s infinite;
    }
  }
  .notification-badge {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    line-height: 1;
    color: var(--text-color);
    background-color: var(--background-color);
    border: 2px solid var(--primary-500);
    border-radius: 100rem;
    z-index: 99;
    padding: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
