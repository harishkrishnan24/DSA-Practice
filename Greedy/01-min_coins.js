const coins = [1, 2, 5, 10];

function minCoins(coins, amount) {
  let res = 0;

  coins.sort((a, b) => b - a);

  for (let coin of coins) {
    if (coin <= amount) {
      const numOfCoins = Math.floor(amount / coin);
      amount -= coin * numOfCoins;
      res += numOfCoins;
    }
    if (amount === 0) break;
  }

  return res;
}

console.log(minCoins(coins, 57));
