import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  .staff-heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  .stats {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-secondary-color);
    border-radius: 5px;
    padding: 2rem 3.5rem;
    margin-bottom: 3rem;
  }
  .stat-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.75rem;
  }
  .staff-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .staff {
    height: 190px;
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 1.5rem;
    background-color: var(--background-secondary-color);
    border-radius: 5px;
    padding: 1.25rem;
  }
  .header {
    position: relative;
    width: 125px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--background-color);
      border-radius: 5px;
      transform: scale(1.15);
      z-index: 1;
    }
  }
  .title {
    font-size: 1rem;
    z-index: 2;
  }
  .staff-img {
    width: 100%;
    z-index: 2;
  }
  .staff-content {
    .staff-id {
      position: absolute;
      top: 1rem;
      left: 1rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85rem;
      line-height: 1;
      color: var(--black);
      background-color: var(--green-light);
      border-radius: 5px;
      padding: 0.25rem 0.35rem;
      cursor: pointer;
    }
    .content-list {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }
    .content-item {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.15rem;
      color: var(--text-color);
      svg {
        font-size: 1.35rem;
        color: var(--primary-500);
        z-index: 3;
      }
      &::before {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 0;
        right: -0.065rem;
        background-color: var(--background-color);
        border-radius: 5px;
        transform: scale(1.1);
      }
    }
  }
  @media (min-width: 992px) {
    .staff-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 578px) {
    padding: 2rem;
    .stat-items {
      flex-direction: row;
      align-items: center;
    }
  }
`;

export default Wrapper;
