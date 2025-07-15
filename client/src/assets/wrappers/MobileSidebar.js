import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 90vh;
    border-radius: var(--border-radius);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
    padding: 2rem 0;
    margin-top: 1.5rem;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    text-transform: capitalize;
    transition: var(--transition);

    &:hover {
      color: var(--primary-500);
    }
  }
  .icon {
    display: none;
  }
  .active {
    color: var(--primary-500);
  }
`;
export default Wrapper;
