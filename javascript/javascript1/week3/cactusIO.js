let activities = [];
function addActivity(activity, duration, date) {
  if (date) {
    activities.push({
      date: date,
      activity: activity,
      duration: duration,
    });
  } else {
    let date = new Date();
    activities.push({
      date: date.toLocaleDateString("en-US"),
      activity: activity,
      duration: duration,
    });
  }
}

function showStatus(activities) {
  let totalTimeConsumption = 0;
  for (let index = 0; index < activities.length; index++) {
    const element = activities[index];
    totalTimeConsumption += element.duration;
  }
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else if (activities.length === 1) {
    console.log(
      `You have added 1 activity. It amounts to ${totalTimeConsumption} min. of usage`
    );
  } else {
    console.log(
      `You have added ${activities.length} activities. They amount to ${totalTimeConsumption} min. of usage`
    );
  }
  if (totalTimeConsumption >= 120) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

showStatus(activities);

function filterByDate(activities, desiredDate) {
  return activities.filter(({ date }) => date === desiredDate);
}

function calcMax(activities) {
  let durations = [];
  for (let index = 0; index < activities.length; index++) {
    const element = activities[index];
    durations.push(element.duration);
  }
  const max = durations.reduce((a, b) => Math.max(a, b), -Infinity);
  const result = activities.find(({ duration }) => duration === max);
  console.log(
    `You have spent most time (${max} minutes) on ${result.activity}!`
  );
}
