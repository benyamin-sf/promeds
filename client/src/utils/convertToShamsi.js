import dayjs from 'dayjs';
import jalaliday from 'jalali-plugin-dayjs';

dayjs.extend(jalaliday);

export default function convertToShamsiDate(dateObj, format) {
  return dayjs(dateObj)
    .calendar('jalali')
    .locale('fa')
    .format(format || 'DD MMMM YYYY');
}
