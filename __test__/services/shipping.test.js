const { shouldFreeShipping } = require('../../src/services/shipping');

describe('shouldFreeShipping', () => {
  it('should apply free shipping for value 200', () => {
    const valuePurchase = 200;

    const result = shouldFreeShipping(valuePurchase);

    expect(result).toBe(true);
  });

  it('should not apply free shipping for value 100', () => {
    const valuePurchase = 100;

    const result = shouldFreeShipping(valuePurchase);

    expect(result).toBe(false);
  });
});
