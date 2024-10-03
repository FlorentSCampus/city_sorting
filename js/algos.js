Number.prototype.toRadians = function () {
  return this * Math.PI / 180;
};

function distanceFromGrenoble (city) {
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  const R = 6371;
  const latFrom = Number(city.latitude).toRadians();
  const latTo = Number(GrenobleLat).toRadians();
  const lonFrom = city.longitude;
  const lonTo = GrenobleLong;

  const latDelta = Number((GrenobleLat - city.latitude)).toRadians();
  const lonDelta = Number((lonTo - lonFrom)).toRadians();

  const a =
    Math.sin(latDelta / 2) ** 2 +
    Math.cos(latFrom) * Math.cos(latTo) *
    Math.sin(lonDelta / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;

  return d;
}

function swap (i, j) {
  displayBuffer.push(['swap', i, j]);

  const tmp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = tmp;
}

function isLess (i, j) {
  displayBuffer.push(['compare', i, j]);

  const cityA = csvData[i];
  const cityB = csvData[j];

  const distanceA = distanceFromGrenoble(cityA);
  const distanceB = distanceFromGrenoble(cityB);

  return distanceA < distanceB;
}

function insertsort () {
  const n = csvData.length;

  for (let i = 1; i < n; i++) {
    let j = i;

    while (j > 0 && isLess(j, j - 1)) {
      swap(j, j - 1);
      j--;
    }
  }
}

function selectionsort () {
  const n = csvData.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (isLess(j, minIndex)) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(i, minIndex);
    }
  }
}

function bubblesort () {
  const n = csvData.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (isLess(j + 1, j)) {
        swap(j, j + 1);
      }
    }
  }
}

function shellsort () {
  const n = csvData.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let j = i;

      while (j >= gap && isLess(j, j - gap)) {
        swap(j, j - gap);
        j -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
}

function mergesort (arr = csvData, start = 0, end = arr.length - 1) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    mergesort(arr, start, mid);
    mergesort(arr, mid + 1, end);

    const temp = [];
    let left = start;
    let right = mid + 1;

    while (left <= mid && right <= end) {
      if (isLess(left, right)) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }

    while (left <= mid) {
      temp.push(arr[left]);
      left++;
    }

    while (right <= end) {
      temp.push(arr[right]);
      right++;
    }

    for (let i = 0; i < temp.length; i++) {
      swap(start + i, arr.indexOf(temp[i]));
    }
  }
}

function heapsort (arr = csvData) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    swap(0, i);
    heapify(arr, i, 0);
  }

  function heapify (arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && isLess(largest, left)) {
      largest = left;
    }

    if (right < n && isLess(largest, right)) {
      largest = right;
    }

    if (largest !== i) {
      swap(i, largest);
      heapify(arr, n, largest);
    }
  }
}

function quicksort (arr = csvData, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }

  function partition (arr, low, high) {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
      if (isLess(j, high)) {
        swap(i, j);
        i++;
      }
    }
    swap(i, high);
    return i;
  }
}

// à corriger !!!
function quick3sort () {
  // if (low < high) {
  //   const pivotIndex = partition(arr, low, high);
  //   quick3sort(arr, low, pivotIndex[0] - 1);
  //   quick3sort(arr, pivotIndex[1] + 1, high);
  // }

  // function partition (arr, low, high) {
  //   const pivot = arr[low];
  //   let lt = low;
  //   let gt = high;
  //   let i = low + 1;

  //   while (i <= gt) {
  //     if (isLess(arr[i], pivot)) {
  //       swap(lt, i);
  //       lt++;
  //       i++;
  //     } else if (isLess(pivot, arr[i])) {
  //       swap(i, gt);
  //       gt--;
  //     } else {
  //       i++;
  //     }
  //   }
  //   return [lt, gt];
  // }
}




function sort (algo) {
  switch (algo) {
    case 'insert': insertsort(); break;
    case 'select': selectionsort(); break;
    case 'bubble': bubblesort(); break;
    case 'shell': shellsort(); break;
    case 'merge': mergesort(); break;
    case 'heap': heapsort(); break;
    case 'quick': quicksort(); break;
    case 'quick3': quick3sort(); break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
