const arr = [94, 23, 438, 239, 349, 12, 430, 20, 403, 59, 849];

// 冒泡
function popup(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

// 快排
function quickSort(arr) {
  if(arr.length<2){
    return arr;
  }
  const pivot = arr.pop();
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]<pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.time('快排');
console.log(quickSort(arr));
console.timeEnd('快排');