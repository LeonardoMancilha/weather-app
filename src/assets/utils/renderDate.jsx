import dateFormat from "dateformat";

const renderDate = () => {
  const now = new Date();
  return dateFormat(now, "dddd, mmmm dS, h:MM TT");
};

export default renderDate;
