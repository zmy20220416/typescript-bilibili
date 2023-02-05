function printAll(param: string | string[] | null) {
  if (param && typeof param === 'object') {
    for (const iterator of param) {
      console.log(iterator);
    }
  }
  else if (typeof param === 'string') {
    console.log(param);
  }
  else {
    console.log(null);
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
) {
  if (!values) return values;

  return values.map(value => value * factor);
}

// console.log(multiplyAll([1, 2, 3], 5));
// console.log(multiplyAll(undefined, 5));

interface Container {
  value: number | undefined | null;
}

function multiplyValue(container: Container) {
  if (container.value) {
    console.log(container.value);
  }
}

multiplyValue({ value: undefined });
multiplyValue({ value: null });
multiplyValue({ value: 100 });

type Fish = {
  swim: () => void;
}

type Bird = {
  fly: () => void;
}

type Human = {
  swim?: () => void;
  fly?: () => void;
}

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) return (animal as Fish).swim();

  return (animal as Bird).fly();
}

function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') return new Array(padding + 1).join(' ') + input;

  return padding + input;
}

console.log(padLeft(3, 'def'));
