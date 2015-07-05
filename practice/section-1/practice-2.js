var same_words = [];
function collect_same_elements(collection_a, collection_b)
{
  //在这里写入代码
  for(var x=0; x<collection_a.length; ++x)
  {
    findCollectionb(collection_a[x],collection_b);
  }
  return same_words;
}

function findCollectionb(item,collection_b)
{
  for(var y=0; y<collection_b.length; ++y)
  {
    for(var k=0; k<collection_b[y].length; ++k)
    {
      if(item === collection_b[y][k])
      {
        same_words.push(item);
      }
    }
  }
}
