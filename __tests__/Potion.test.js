const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    // the expectany method takes a constructor as an argument
    // the value we are putting in the argument expects any Number()
    expect(potion.value).toBe(expect.any(Number));
});