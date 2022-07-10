// Перепишите код с использованием одной конструкции switch:

const down = +prompt("Введите число между 0 и 3", "");

if (down === 0) {
  alert("Вы ввели число 0");
}

if (down === 1) {
  alert("Вы ввели число 1");
}

if (down === 2 || down === 3) {
  alert("Вы ввели число 2, а может и 3");
}

const down = +prompt("Введите число между 0 и 3", "");
switch (down) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}
