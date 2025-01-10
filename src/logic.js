
function storageCheck(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
  
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }  

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
