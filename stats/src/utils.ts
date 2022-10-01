export const dateStringToDate = (dateString: string): Date => {
  const dateFormatted = dateString.split("/").map((value: string) => {
    return parseInt(value);
  });
  return new Date(dateFormatted[2], dateFormatted[1] - 1, dateFormatted[0] + 1);
};
