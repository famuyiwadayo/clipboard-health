const crypto = require("crypto")

/**
 * @param event - Could be an object that contains a partitionKey, some useful information
 * about a candidate, or anytype which can be used for generating a unique SHA3-512 hash with
 * the length not more than a MAX_PARTITION_KEY_LENGTH of 256.
 */
function deterministicPartitionKey(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if(!!event && !!event?.partitionKey) candidate = event.partitionKey;
  else if(!!event && !event?.partitionKey) candidate = generateSha512Hash(event);

  if(!!candidate && typeof candidate !== 'string') candidate = JSON.stringify(candidate);
  if(!candidate) candidate = TRIVIAL_PARTITION_KEY;

  if(candidate.length > MAX_PARTITION_KEY_LENGTH) candidate = generateSha512Hash(candidate);

  return candidate;
}

/**
 * @param data - The data you'd like to generate a unique sha3-512 hash from.
 */
function generateSha512Hash(data) {
  return crypto.createHash("sha3-512").update(JSON.stringify(data)).digest("hex")
}

exports.deterministicPartitionKey = deterministicPartitionKey;