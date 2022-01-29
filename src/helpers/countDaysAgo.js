const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

export default function countDaysAgo(date) {
  const today = new Date(Date.now());
  const lastDate = new Date(date);
  return Math.round(Math.abs((today - lastDate) / oneDay));
}
