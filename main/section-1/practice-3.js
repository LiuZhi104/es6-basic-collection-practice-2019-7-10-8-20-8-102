'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter(x=>x==objectB.value.filter(y=>y==x));
}
