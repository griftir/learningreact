var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]
var initialValue ={}
var reducer = function(accumulator,listItem){
    if(!accumulator[listItem]){
        accumulator[listItem] =1;
    } else {
        accumulator[listItem] = accumulator[listItem] + 1;
    }
    return accumulator;
}
 var result = votes.reduce(reducer,initialValue)
 console.log(result)