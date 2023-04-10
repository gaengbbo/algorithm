/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const answer = new Array(temperatures.length);
  answer.fill(0);
  const stack = [];
  temperatures.forEach((tem, day) => {
      while (stack.length && stack[stack.length -1 ].tem < tem) {
          const prev = stack.pop();
          answer[prev.day] = day - prev.day;
      }
      stack.push({tem, day});

})
  return answer;

};