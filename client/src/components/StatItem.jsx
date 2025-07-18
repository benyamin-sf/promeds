import Wrapper from '../assets/wrappers/StatItem';

export default function StatItem({ count, title, icon, color, bgColor }) {
  return (
    <Wrapper color={color} bcg={bgColor}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
}
