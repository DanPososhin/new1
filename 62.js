function lowercaseCount(str){
    let count=0,len=str.length;
    for(let i=0; i<len; i++) {
      if(/[a-z]/.test(str.charAt(i))) count++;
    }
    return count;
  }