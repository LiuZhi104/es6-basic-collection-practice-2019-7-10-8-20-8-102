'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return (collectionA.filter(x=>
       x ==(collectionB.filter(y=>y==x))));
}
