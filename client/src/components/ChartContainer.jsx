import { useState } from 'react';

import Wrapper from '../assets/wrappers/ChartsContainer';
import AreaChart from './AreaChart';
import BarsChart from './BarsChart';

export default function ChartContainer({ data }) {
  const [chartType, setChartType] = useState('bars');

  const onChartBtnClick = () => {
    setChartType(chartType === 'bars' ? 'area' : 'bars');
  };

  return (
    <Wrapper>
      <h4>آمار ماهیانه نوبت های گرفته شده</h4>

      <button type='button' onClick={onChartBtnClick}>
        تغییر نمایش
      </button>

      {chartType === 'bars' ? (
        <BarsChart data={data} />
      ) : (
        <AreaChart data={data} />
      )}
    </Wrapper>
  );
}
