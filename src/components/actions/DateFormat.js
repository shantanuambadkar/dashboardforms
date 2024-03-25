const DateFormat = (enteredDate) => {
  const year = enteredDate.getFullYear();
  const month = enteredDate.getMonth() + 1;
  const day = enteredDate.getDate();
  return `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`;
};

export default DateFormat;
