function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var same_words = [];
  for(var i=0; i<collection_a.length; ++i)
  {
  	for(var j=0; j<collection_b.length; ++j)
	  {
		    if(collection_a[i] == collection_b[j])
		    {
			     same_words.push(collection_a[i]);
		    }
	  }
  }
	return same_words;
}
