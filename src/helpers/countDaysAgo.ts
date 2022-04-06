const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const countDaysAgo = (date: Date): number => {
    const today: Date = new Date(Date.now());
    const lastDate: Date = new Date(date);
    return Math.round(
        Math.abs((today.getTime() - lastDate.getTime()) / oneDay),
    );
};

export default countDaysAgo;
