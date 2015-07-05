function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var same_words = [];
  var result = [];
  var Count=1;
  for(var n=0; n<collection_a.length; ++n)
  {
    if(collection_a[n] == collection_a[n+1])
    {
      Count++;
    }
    else
    {
      same_words.push({key:collection_a[n],count:Count});
      Count = 1;
    }
  }

  for(var i=0; i<same_words.length; ++i)
  {
    for(var j=0; j<object_b.value.length; ++j)
    {
      if((same_words[i].key == object_b.value[j]))
      {
        if(same_words[i].count >=3)
        {
          var k = (same_words[i].count-same_words[i].count%3)/3;
          same_words[i].count -= k;
        }
      }
    }
    result.push({key:same_words[i].key,count:same_words[i].count});
  }
  return result;
}
