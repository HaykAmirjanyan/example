function addBorder(picture) {
   let arr = [],
       arr1 = [];
  for(let  i = 0; i < picture.length; i++){
    arr[i] = picture[i].split('');
    arr[i].unshift('*');
    arr[i].push('*');
    arr[i] = arr[i].join('');
  }
  let j = arr[0].length;
 while( j > 0){
   arr1.splice(0,0,'*');
   j--;
 }
 arr1 = arr1.join('');
  arr.unshift(arr1);
  arr.push(arr1);
  
  return arr;
}
