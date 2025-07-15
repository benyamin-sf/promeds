import styled from 'styled-components';

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 0;
      transition: width 0.35s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
      opacity: 0;
    }
    .show-sidebar {
      width: 250px;
    }
    .show-sidebar .content {
      opacity: 1;
    }
    header {
      height: 6rem;
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
      padding-right: 3rem;
    }
    .nav-links {
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding-top: 2rem;
    }
    .nav-link {
      display: flex;
      align-items: center;
      justify-content: right;
      gap: 0.65rem;
      color: var(--text-secondary-color);
      padding: 1rem;
      padding-right: 2.5rem;
      transition: padding 0.15s ease-in-out;
    }
    .nav-link.active {
      padding-right: 3rem;
    }
    .nav-link:hover {
      padding-right: 3rem;
      color: var(--primary-500);
    }
    .icon {
      font-size: 1.5rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
    .pending {
      background: var(--background-color);
    }
  }
`;
export default Wrapper;
