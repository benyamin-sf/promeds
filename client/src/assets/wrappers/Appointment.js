import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: var(--background-secondary-color);
  border-top: 5px solid ${(props) => props.color};
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-2);
  padding: 1.75rem;
  header {
    position: relative;
    width: 95%;
    display: flex;
    align-items: center;
    color: var(--text-color);
    background-color: var(--background-color);
    border-radius: var(--border-radius);
    padding: 1rem;
  }
  .header-index {
    font-size: 3rem;
    background-color: var(--primary-400);
    border-radius: var(--border-radius);
    padding: 1.5rem;
  }
  .header-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-right: 1rem;
  }
  .header-info {
    font-size: 1.25rem;
    text-align: right;
    margin: 0;
  }
  .expiry-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 1.05rem;
    background-color: ${(props) => props.color};
    border-radius: var(--border-radius);
    padding: 0.35rem 0.5rem;
  }
  .main-info {
    width: 100%;
    align-self: flex-start;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    row-gap: 1rem;
    padding: 1rem 1.5rem 0;
  }
  .info-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    span {
      font-size: 1.4rem;
      color: var(--primary-400);
    }
  }
`;

export default Wrapper;
