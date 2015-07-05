function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  for(var x=0; x<collection_a.length; ++x)
  {
    result.push(subCollectiona(collection_a[x],object_b));
  }
  return result;
}

function subCollectiona(item,object_b)
{
  for(var y=0; y<object_b.value.length; ++y)
  {
    if((item.key === object_b.value[y]) && item.count >= 3)
    {
        item.count -= (item.count-item.count%3)/3;
    }
  }
  return item;
}
