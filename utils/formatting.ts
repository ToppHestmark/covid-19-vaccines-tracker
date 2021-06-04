export const formatDate = (dateInput: string) => {
  const date = new Date(dateInput);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);

  return `${month} ${day}, ${year}`;
};

export const formatMonth = (dateInput: string) => {
  const date = new Date(dateInput);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);

  return month;
};

export const formatLargeNum = (num: number) =>
  num === undefined ? "-" : new Intl.NumberFormat().format(num);
