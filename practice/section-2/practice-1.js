function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var Count = 1;
  for(var i=0; i<collection.length; ++i)
  {
    if(collection[i] == collection[i+1])
    {
      Count++;
    }
    else
    {
      result.push({key:collection[i],count:Count});
      Count=1;
    }
  }
  return result;
}
