var FruitMaker = function(fruitMaker){
  fruitMaker.slices = function(name, numSlices){
    var slicesArr = [];
    for(var i=0; i<numSlices; i++){
      slicesArr.push(name);
    }
    return slicesArr;
  };
  return fruitMaker;
}(FruitMaker)