function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  for(var i=0; i<collection_a.length; ++i)
  {
    for(var j=0; j<object_b.value.length; ++j)
    {
      if((collection_a[i].key == object_b.value[j]))
      {
        if(collection_a[i].count >=3)
        {
          var k = (collection_a[i].count-collection_a[i].count%3)/3;
          collection_a[i].count -= k;
        }
      }
    }
    result.push({key:collection_a[i].key,count:collection_a[i].count});
  }
  return result;
}
