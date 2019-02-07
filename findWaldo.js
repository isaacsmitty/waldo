function findWaldo(arr, found) {

  arr.forEach(function(val,agg){

  if (val === "Waldo") {
    found(agg);   // execute callback
    }
  });
}

function actionWhenFound(agg) {
  console.log(`Found him at index ${agg}.`);
}
// function something (){
//   console.log('yah!')
//}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound;