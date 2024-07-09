import moment from 'moment';

export const getTimeOfDay = () => {
  const currentHour = moment().hour();

  if (currentHour >= 5 && currentHour < 12) {
    return 'morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'afternoon';
  } else if (currentHour >= 17 && currentHour < 21) {
    return 'evening';
  } else {
    return 'night';
  }
}

