const DOBValidations = (endDate, formName, inputProp) => {
  const start = new Date();
  const end = new Date(endDate);
  const difference = start.getTime() - end.getTime();
  const yearDifference = Math.round(
    difference / (365.25 * 24 * 60 * 60 * 1000)
  );
  if (inputProp === 'minorOrNominee') {
    if (yearDifference < 0) {
      return false;
    } else {
      return true;
    }
  }
  if (inputProp === 'sendAge') {
    return yearDifference;
  }
  if (inputProp === 'guardian') {
    if (yearDifference < 18) {
      return false;
    } else {
      return true;
    }
  }
  if (inputProp === 'majorIndividual') {
    if (formName === 'pmsby') {
      if (yearDifference < 18 || yearDifference > 80) {
        return false;
      } else {
        return true;
      }
    }
    if (formName === 'pmjjby') {
      if (yearDifference < 18 || yearDifference > 75) {
        return false;
      } else {
        return true;
      }
    } else {
      if (yearDifference < 18) {
        return false;
      } else {
        return true;
      }
    }
  }
};

export default DOBValidations;
