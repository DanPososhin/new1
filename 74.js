// Определите функцию с именем length, которая принимает список как ввод и возвращает количество элементов в этом списке.
// Вы не должны использовать встроенную функцию length JavaScript.
//  Например,  length(['a', 'b', 'c', 'd']) должна возвращать 4. Напишите, что происходит на каждом шаге.

const length = function (x) {
  if (x[0] === undefined) {
    return 0;
  } else {
    let i = 0;
    for (i = 0; x[0] === undefined; n++) {
      x.shift();
      i++;
    }
    return i;
  }
};

console.log(length(["a", "b", "c", "d"]));
