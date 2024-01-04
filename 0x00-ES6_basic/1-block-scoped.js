export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint-disable-next-line
    task;
    // eslint-disable-next-line
    task2;
  }

  return [task, task2];
}
