const {
  CoinsTypes,
  convertCurrencyInReal,
} = require('../../src/services/payment');

const _dollarValue = 5.21;
const _euroValue = 5.08;
const _poundValue = 5.81;

// todo: complete service mock with values of coins
const mockExchangeServiceReal = {};

describe('convertCurrencyInReal', () => {
  it('should get value in currency Real from real value', () => {
    const valueInReal = 100;

    const result = convertCurrencyInReal(
      valueInReal,
      CoinsTypes.real,
      mockExchangeServiceReal
    );

    expect(result).toBe(valueInReal);
  });

  it('should get value in currency Real from Dollar value', () => {
    const valueInDollar = 100;

    const result = convertCurrencyInReal(
      valueInDollar,
      CoinsTypes.dollar,
      mockExchangeServiceReal
    );

    expect(mockExchangeServiceReal.getValueOfDollar).toBeCalled();

    expect(result).toBe(valueInDollar * _dollarValue);
  });

  it('should get value in currency Real from Euro value', () => {
    const valueInEuro = 100;

    const result = convertCurrencyInReal(
      valueInEuro,
      CoinsTypes.euro,
      mockExchangeServiceReal
    );

    expect(mockExchangeServiceReal.getValueOfEuro).toBeCalled();

    expect(result).toBe(valueInEuro * _euroValue);
  });
  it('should get value in currency Real from pound value', () => {
    const valueInPound = 100;

    const result = convertCurrencyInReal(
      valueInPound,
      CoinsTypes.pound,
      mockExchangeServiceReal
    );

    expect(mockExchangeServiceReal.getValueOfPound).toBeCalled();

    expect(result).toBe(valueInPound * _poundValue);
  });
});
