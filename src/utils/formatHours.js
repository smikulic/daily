export const formatHours = (hourValue) => {
  let newDate = new Date(0);
  newDate.setSeconds(hourValue * 60 * 60); // minutes * seconds
  return newDate.toISOString().substr(11, 5);
};
