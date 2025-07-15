import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 4rem;
  .timeline-heading {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
  .timeline-table {
    width: 115%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--background-secondary-color);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin-right: -4vw;
  }
  .table-header {
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    padding: 1.5rem 1rem;
  }
  .table-row {
    display: grid;
    grid-template-columns: 8rem repeat(7, 6rem);
    align-items: center;
    justify-items: center;
    gap: 0.65rem;
  }
  .header-row {
  }
  .row-cell {
  }
  .header-cell {
    font-size: 0.85rem;
  }
  .days {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .table-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1rem;
  }
  .content-row {
    background-color: var(--background-color);
    border-radius: var(--border-radius);
  }
  .content-cell {
  }
  .doctor-info {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1px 15px;
    gap: 0.25rem;
    background-color: var(--primary-600);
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    padding: 0.25rem;
  }
  .doctor-name {
    font-size: 1.1rem;
    padding: 0.15rem;
  }
  .doctor-specialty {
    font-size: 0.85rem;
    color: #223;
  }
  .data {
  }
  .content-cell-data {
  }
`;

export default Wrapper;
