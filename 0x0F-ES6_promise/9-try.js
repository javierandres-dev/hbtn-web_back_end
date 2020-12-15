// create and return an array
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const val = mathFunction();
    queue.push(val);
  } catch (error) {
    queue.push(error);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
