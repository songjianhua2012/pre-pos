function count_same_elements(collection) {
  var result = [];
  for(var x=0; x<collection.length; ++x) {
    addResult(collection[x],result);
  }
  return result;
}

function addResult(item,result) {
  for(var y=0; y<result.length; ++y) {
    if(item[0] === result[y].name) {
      result[y].summary += (item.length == 1?1:(makeNumber(item)));
      return;
    }
  }
  result.push({name:item[0],summary:item.length == 1?1:(makeNumber(item))});
}

function makeNumber(item) {
  var str='';
  for(var m=0; m<item.length; ++m) {
    if(!isNaN(parseInt(item[m]))) {
      str += item[m];
    }
  }
  return parseInt(str);
}
