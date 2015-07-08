function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var same_words = [];
  var result = [];

  findSamewords(collection_a,same_words);

  for(var x = 0; x < same_words.length; x++) {
    result.push(subCollectiona(same_words[x],object_b));
  }
  return result;
}

function findSamewords(collection_a,same_words) {
  var Count = 1;
  for(var n = 0; n < collection_a.length; n++) {
    if(collection_a[n] === collection_a[n+1]) {
      Count++;
    }
    else {
      same_words.push({key:collection_a[n],count:Count});
      Count = 1;
    }
  }
}

function subCollectiona(item,object_b) {
  for(var j = 0; j < object_b.value.length; j++) {
    if(item.key == object_b.value[j] && item.count >= 3) {
        item.count -= (item.count - item.count % 3) / 3;
    }
  }
  return item;
}
