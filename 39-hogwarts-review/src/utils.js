export const sortByName = (arr, attr) => {
  return arr.sort(function (a, b) {
    var nameA = a[attr].toUpperCase();
    var nameB = b[attr].toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};
