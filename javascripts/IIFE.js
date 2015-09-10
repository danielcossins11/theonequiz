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