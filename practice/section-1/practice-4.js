function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var same_words = [];
  for(var x=0; x<collection_a.length; ++x)
  {
    findObjectb(collection_a[x].key,object_b,same_words);
  }
  return same_words;
}

function findObjectb(item,object_b,same_words)
{
  for(var y=0; y<object_b.value.length; ++y)
  {
    if(item === object_b.value[y])
    {
      same_words.push(item);
    }
  }
}
