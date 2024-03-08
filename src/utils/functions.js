export function getTime(time) {
  const hr = Math.floor(time);
  const m = (time % hr) * 60;

  return hr + ":" + (m == 0 ? "00" : m) + " PM";
}

export function filterBands(arr, day) {
  return arr.filter((el) => el.day == day);
}
