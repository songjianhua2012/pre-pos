var same_words = [];

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  for(var x=0; x<collection_a.length; ++x)
  {
    findObjectb(collection_a[x].key,object_b);
  }
  return same_words;
}

function findObjectb(item,object_b)
{
  for(var y=0; y<object_b.value.length; ++y)
  {
    if(item === object_b.value[y])
    {
      same_words.push(item);
    }
  }
}
