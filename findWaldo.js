var index;

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(val,agg){
  //for (var i = 0; i < arr.length; i++) {
    if (val === "Waldo") {
      index = agg;
      found();   // execute callback
    }
  });
}

function actionWhenFound() {
  console.log(`Found him at index ${index}.`);
}
function something (){
  console.log('yah!')
}




findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);