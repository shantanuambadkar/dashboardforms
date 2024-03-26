function ReturnPeriod(periodVal) {
  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const getPastDate = (days) => {
    const today = new Date();
    const pastDate = new Date(today.getTime() - days * 24 * 60 * 60 * 1000);
    const dd = String(pastDate.getDate()).padStart(2, '0');
    const mm = String(pastDate.getMonth() + 1).padStart(2, '0');
    const yyyy = pastDate.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const getFirstDayOfMonth = () => {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const dd = String(firstDay.getDate()).padStart(2, '0');
    const mm = String(firstDay.getMonth() + 1).padStart(2, '0');
    const yyyy = firstDay.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  const getFirstDayOfQuarter = () => {
    const today = new Date();
    const quarterStartMonth = Math.floor(today.getMonth() / 3) * 3;
    const firstDay = new Date(today.getFullYear(), quarterStartMonth, 1);
    const dd = String(firstDay.getDate()).padStart(2, '0');
    const mm = String(firstDay.getMonth() + 1).padStart(2, '0');
    const yyyy = firstDay.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  };

  switch (periodVal) {
    case 'THIS WEEK':
      getCurrentDate(getPastDate(6));
      break;
    case 'THIS MONTH':
      getCurrentDate(getFirstDayOfMonth());
      break;
    case 'THIS QUARTER':
      getCurrentDate(getFirstDayOfQuarter());
      break;
    default:
      break;
  }
}

export default ReturnPeriod;
