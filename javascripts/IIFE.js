var FruitMaker = function(){
  var fruits = ["apples", "bananas", "cherries", "huckleberries"];
  return {
    getFruits: function(){
      return fruits;
    },
    addFruit: function(newFruit){
      fruits.push(newFruit);
      return fruits;
    }
  };
}();

console.log(FruitMaker.addFruits("Pear"));
console.log(FruitMaker.getFruits());
console.log(FruitMaker.slices("Pear", 3));