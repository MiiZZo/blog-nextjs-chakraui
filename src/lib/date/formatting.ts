export function formatDate(date: string) {
  const _d = new Date(date);

  const day = _d.getDate();
  const month = _d.getMonth() + 1;
  const year = _d.getFullYear();

  return `${day >= 10 ? day : `0${day}`}-${
    month >= 10 ? month : `0${month}`
  }-${year}`;
}
