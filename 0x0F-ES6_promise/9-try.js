export default function guardrail(mathFunction) {
  const queue = [];
  let value = undefined;
  try {
    value = mathFunction();
  }
  catch (error) {
    value = error.toString();
  }
  queue.push(value);
  queue.push('Guardrail was processed');
  return queue;
}
