function print1ToNum(num) {
  if (num == 0) return;
  print1ToNum(num - 1);
  console.log(num);
}

print1ToNum(5);
