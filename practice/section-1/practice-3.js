function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var same_words = [];
  for(var x=0; x<collection_a.length; ++x) {
    findCollectionb(collection_a[x],object_b,same_words);
  }
  return same_words;
}

function findCollectionb(item,collection_b,same_words) {
  for(var y=0; y<collection_b.value.length; ++y) {
    if(item === collection_b.value[y]) {
      same_words.push(item);
    }
  }
}
