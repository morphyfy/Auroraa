import moment from "moment";

export const parseDate = (date: string) => {
  const getActualDate = moment(date).format("DD MMMM YYYY");

  return getActualDate;
};
