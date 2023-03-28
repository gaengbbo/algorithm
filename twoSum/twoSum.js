var twoSum = function(nums, target) {
  /*
  sort 사용시 배열이 정렬되어 index를 확인 할 수 없어 map을 사용하여 요소와 인덱스를 프로퍼티로
  갖는 객체를 생성해 주었다. 
  */
   const copyNums = nums.map((el,i) => {return {el,i}}); 
   copyNums.sort(function (a,b) {return a.el - b.el}); 
   
   let l = 0;
   let r = (copyNums.length - 1);
 
  /*
  동일한 값은 더 할 수 없기때문에 l과 r이 같아지면 안된다. (r이 l보다 작아지는 상황은 중복으로 할필요없음)
  */
   while ( l < r ) {
     if ( copyNums[l].el + copyNums[r].el === target ) {
       return [copyNums[l].i, copyNums[r].i]
     }
 //두 값의 합이 target보다 크면 r을 이전 인덱스로 이동시키고, target이 크면 l을 다음 인덱스로 이동
     if ( copyNums[l].el + copyNums[r].el  > target ) {
       r--;
     } else if ( copyNums[l].el + copyNums[r].el  < target ) {
       l++;
     }
   
   };
 };