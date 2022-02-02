const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

export const countDaysAgo = (date: Date) => {
  const today: Date = new Date(Date.now());
  const lastDate: Date = new Date(date);
  return Math.round(Math.abs((today.getTime() - lastDate.getTime()) / oneDay));
}
