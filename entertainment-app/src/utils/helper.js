export function shortifyName(name = "") {
  return name.length > 25 ? `${name.slice(0, 26)}...` : name;
}

export function getFirstDate(date = "") {
  return date.split("-").at(0);
}
