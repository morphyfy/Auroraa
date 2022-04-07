import moment from "moment";

export const parseDate = (date: string) => {
  const getActualDate = moment(date).format("MMMM YYYY");

  return getActualDate;
};
