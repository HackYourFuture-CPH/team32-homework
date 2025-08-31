const seriesDuration = [
  {
    title: "Overlord",
    days: 0,
    hours: 20,
    minutes: 48,
  },
  {
    title: "Love,Death & Robots",
    days: 1,
    hours: 4,
    minutes: 23,
  },
];

function logOutSeriesText(series, age) {
  const myAgeInMinutes = age * 365 * 24 * 60;
  let seriesConsumeInMinutes = 0;
  let lifeSpentOnSeries = 0;
  let totalLifeSpent = 0;
  for (let index = 0; index < series.length; index++) {
    const element = series[index];
    seriesConsumeInMinutes =
      element.days * 24 * 60 + element.hours * 60 + element.minutes;
    lifeSpentOnSeries = (seriesConsumeInMinutes * 100) / myAgeInMinutes;
    console.log(
      `${element.title} took ${lifeSpentOnSeries.toFixed(4)}% of my life`
    );
    totalLifeSpent += lifeSpentOnSeries;
  }
  return `In total that is ${totalLifeSpent.toFixed(4)}% of my life`;
}
