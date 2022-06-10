const pivot = (arr, start, end) => {
  const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

  let pivot = arr[end],
      pointer = start - 1;

  for (let i = start; i < end; i++) {
    if (arr[i][1] < pivot[1] || (arr[i][1] === pivot[1] && arr[i][0].localeCompare(pivot[0]) > 0)) {
      pointer++;
      swap(arr, pointer, i);
    }
  };
  swap(arr, pointer + 1, end);
  return (pointer + 1);
};

const quickSortHelper = (arr, start, end) => {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    quickSortHelper(arr, start, pivotIndex - 1);
    quickSortHelper(arr, pivotIndex + 1, end);
  }
};

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else if (!Array.isArray(arr[0])) {
    return false;
  }
  quickSortHelper(arr, 0, arr.length - 1);
  arr.reverse();
  return arr;
};

module.exports = {
  pivot,
  quickSortHelper,
  quickSort
};
