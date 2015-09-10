var FruitMaker = function(){
  var fruits = ["apples", "bananas", "cherries", "huckleberries"];
  return {
    getFruits: function(){
      return fruits;
    },
    addFruits: function(newFruit){
      fruits.push(newFruit);
    }
  };
}();

console.log(FruitMaker.addFruits("Pear"));
console.log(FruitMaker.getFruits());
console.log(FruitMaker.slices("Pear", 3));