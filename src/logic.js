import { storageCheck } from "./helper";

export function saveToStorage(key, Object) {
  if (storageCheck("localStorage")) {
    localStorage.setItem(key, JSON.stringify(Object));
  }
}

export function fetchData(key) {
  if (localStorage.length === 0) {
    console.log("No data is saved");
  } else {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);

    return data;
  }
}
