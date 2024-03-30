function ConvertDateFormat(unFormattedDate) {
  const dateObj = new Date(unFormattedDate);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}

export default ConvertDateFormat;
