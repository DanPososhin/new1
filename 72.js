function rangeOfNumbers(startNum, endNum) {
    if (startNum !== endNum) {
    if (startNum === endNum) {
      return [];
    } else {
      const countArray = rangeOfNumbers(endNum - 1);
      countArray.push(endNum);
      console.log(countArray);
      return countArray;
    }
  } else  {
    return ["startNum"];
  }
  };