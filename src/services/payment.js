const CoinsTypes = {
  real: 'real',
  dollar: 'dollar',
  euro: 'euro',
  pound: 'pound',
};

function convertCurrencyInReal(value, coin, exchangeServiceReal) {
  let amount = value;

  switch (coin) {
    case CoinsTypes.real:
      amount *= 1;
      break;
    case CoinsTypes.dollar:
      amount *= exchangeServiceReal.getValueOfDollar();
      break;
    case CoinsTypes.euro:
      amount *= exchangeServiceReal.getValueOfEuro();
      break;
    case CoinsTypes.pound:
      amount *= exchangeServiceReal.getValueOfPound();
      break;

    default:
      break;
  }

  return amount;
}

module.exports = { convertCurrencyInReal, CoinsTypes };
