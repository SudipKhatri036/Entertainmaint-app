export function shortifyName(name = "") {
  return name.length > 25 ? `${name.slice(0, 26)}...` : name;
}

export function getFirstDate(date = "") {
  return date.split("-").at(0);
}

export function sliceArray(arr, endVal) {
  return arr?.slice(0, endVal);
}

export function convertToStars(vote_average) {
  let stars = vote_average / 2;

  stars = Math.round(stars * 2) / 2;

  return stars;
}
