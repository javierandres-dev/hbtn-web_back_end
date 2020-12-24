export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const int8BufferArray = new Int8Array(buffer);
  int8BufferArray[position] = value;
  return int8BufferArray;
}
