const MIN_DATE = new Date(1995, 5, 16);
const validateDate = (date: Date): Date => {
  //console.log('validate ' + date);
  if (date > new Date()) {
    //console.log('Date too late');
    return new Date();
  }

  if (date < MIN_DATE) {
    //console.log('Date too early');
    return MIN_DATE;
  }

  //console.log('return: ' + date);
  return date;
};

export default validateDate;
