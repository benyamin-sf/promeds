import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 4rem;
  li {
    position: relative;
  }
  .section-heading {
    font-size: 2.4rem;
    padding: 0 1.5rem;
    margin-bottom: 3rem;
    span {
      font-size: 3rem;
      margin-left: 0.75rem;
    }
  }
  .messages {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .message-card {
    position: relative;
    height: 8rem;
    display: grid;
    grid-template-columns: 1fr 10rem;
    align-items: flex-end;
    background-color: var(--background-secondary-color);
    border-top: 2px solid var(--primary-500);
    border-radius: var(--border-radius);
    transform: translateX(-7px);
    transition: all 0.25s ease-in;
    box-shadow: 0 0.5rem 1.5rem rgba(84, 209, 219, 0.05);
    padding: 1.5rem 2rem;
    z-index: 9;
    &:hover {
      transform: translateX(-12px);
      box-shadow: 0 0.75rem 1.5rem rgba(84, 209, 219, 0.1);
    }
  }
  .read .message-card {
    border: none;
    box-shadow: none;
    transform: none;
    &:hover {
      transform: none;
    }
  }
  .message-content {
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .heading-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .read-badge {
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: var(--primary-300);
  }
  .read .read-badge {
    background-color: var(--primary-800);
  }
  .message-heading {
    font-size: 1.3rem;
    cursor: pointer;
  }
  .message-short {
    font-size: 0.85rem;
    text-indent: 0.5rem;
  }
  .message-date {
    justify-self: end;
    color: var(--grey-400);
  }
  .no-message {
  }
  .empty-box-text {
    font-size: 1rem;
    line-height: 1.6;
    text-indent: 0.5rem;
    padding: 0 2rem;
  }
  .card-actions {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    padding: 0.5rem;
    cursor: auto;
    z-index: 99;
  }
  .action-btn {
    display: grid;
    place-items: center;
    width: 1.75rem;
    height: 1.75rem;
    font-size: 1rem;
    background-color: var(--primary-600);
    padding: 0.25rem;
  }
  .action-delete {
    background-color: #ee393e;
  }
`;

export default Wrapper;
