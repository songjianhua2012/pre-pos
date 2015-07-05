function count_same_elements(collection) {
  var result = [];
  for(var x=0; x<collection.length; ++x)
  {
    addResult(collection[x],result);
  }
  return result;
}

function addResult(item,result)
{
  for(var y=0; y<result.length; ++y)
  {
    if(item[0] === result[y].name)
    {
      result[y].summary += (item.length == 1?1:(item.length>4?(parseInt(item[2])*10+parseInt(item[3])):parseInt(item[2])));
      return;
    }
  }
  result.push({name:item[0],summary:item.length == 1?1:(item.length>4?(parseInt(item[2])*10+parseInt(item[3])):parseInt(item[2]))});
}
