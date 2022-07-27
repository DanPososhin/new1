function lowercaseCount(str){
    let count=0,len=str.length;
    for(let i=0; i<len; i++) {
      if(/[a-z]/.test(str.charAt(i))) count++;
    }
    return count;
  }



  const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    }