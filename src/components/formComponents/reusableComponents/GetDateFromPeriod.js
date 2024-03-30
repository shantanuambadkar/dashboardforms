import ConvertDateFormat from './ConvertDateFormat';

function GetDateFromPeriod(periodPart) {
  const today = new Date();
  if (periodPart === 'THIS MONTH') {
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    return ConvertDateFormat(firstDay);
  }
  if (periodPart === 'THIS QUARTER') {
    const quarterStartMonth = Math.floor(today.getMonth() / 3) * 3;
    const firstDay = new Date(today.getFullYear(), quarterStartMonth, 1);
    return ConvertDateFormat(firstDay);
  }
  if (periodPart === 'THIS WEEK') {
    const pastDate = new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000);
    return ConvertDateFormat(pastDate);
  }
}

export default GetDateFromPeriod;
