'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var collectionBvalues=objectB.value;
  return   (collectionA.filter(x=>
                 x ==(collectionBvalues.filter(y=>y==x))));
}
