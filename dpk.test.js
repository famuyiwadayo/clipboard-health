const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Can accept an integer input", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
  });

  it("Can accept a string literal", () => {
    const trivialKey = deterministicPartitionKey('clipboard health');
    expect(trivialKey).toBe("91f727b034481409e0228e1ef1151f54770eef36e115e4cbfc4aadb6da6455706feb688e4fe7a4362ad005088350b19a5ed401d1b9e8842c268c7b7117cee9c5");
  });

  it("Trivial key length should not be greater than 256", () => {
    const falseKey = "e4cbfc4aadb6da6455706feb688e4fe7a4362ad091f727b03448ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa1409e0228e1ef1151f54770eef36e115e4cbfc4aadb6da6455706feb688e4fe7a4362ad005088350b19a5ed401d1b9e8842c268c7b7117cee9c5"
    const trivialKey = deterministicPartitionKey(falseKey);
    expect(trivialKey.length).not.toBeGreaterThan(256);
  });

  it("Trivial key length should not be less than 1 when partitionKey is an empty string", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: ''});
    expect(trivialKey.length).not.toBeLessThan(1);
  });

  it("Trivial key length should not be less than 1 when input is an empty string", () => {
    const trivialKey = deterministicPartitionKey('');
    expect(trivialKey.length).not.toBeLessThan(1);
  });

  it("Trivial key length should not be less than 1 when input is null", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey.length).not.toBeLessThan(1);
  });

  it("Trivial key length should not be less than 1 when input is undefined", () => {
    const trivialKey = deterministicPartitionKey(undefined);
    expect(trivialKey.length).not.toBeLessThan(1);
  });

  it("Can accept an object with a partitionKey and return the partitionKey", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 'e4cbfc4aadb6da6455706feb688e4f'});
    expect(trivialKey).toBe("e4cbfc4aadb6da6455706feb688e4f");
  });
  
});
