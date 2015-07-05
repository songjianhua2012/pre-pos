var same_words = [];

function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  for(var x=0; x<collection_a.length; ++x)
  {
    findCollectionb(collection_a[x],object_b);
  }
  return same_words;
}

function findCollectionb(item,collection_b)
{
  for(var y=0; y<collection_b.value.length; ++y)
  {
    if(item === collection_b.value[y])
    {
      same_words.push(item);
    }
  }
}
