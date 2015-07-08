function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var same_words = [];
  var result = [];
  for(var n = 0; n < collection_a.length; n++) {
    findSamewords(collection_a[n],same_words);
  }

  for(var x = 0; x < same_words.length; x++) {
    result.push(subCollectiona(same_words[x],object_b));
  }
  return result;
}

function findSamewords(item,same_words) {
  for(var x = 0; x < same_words.length; x++) {
    if(item[0] === same_words[x].key) {
      same_words[x].count += item.length === 1 ? 1 : (parseInt(item[2]));
      return;
    }
  }
  same_words.push({key:item[0],count:item.length === 1 ? 1 : (parseInt(item[2]))});
}

function subCollectiona(word,object_b) {
  for(var y = 0; y < object_b.value.length; y++) {
    if((word.key == object_b.value[y]) && word.count >= 3) {
        word.count -= (word.count - word.count % 3) / 3;
    }
  }
  return word;
}
