const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({partitionKey: "e4cbfc4aadb6da6455706feb688e4fe7a4362ad091f727b03448ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa1409e0228e1ef1151f54770eef36e115e4cbfc4aadb6da6455706feb688e4fe7a4362ad005088350b19a5ed401d1b9e8842c268c7b7117cee9c5", username: 'dayo'}));

// import {deterministicPartitionKey} from './dpk.js'


// console.log(deterministicPartitionKey())