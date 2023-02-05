let x: undefined = undefined;
let y: null = null;
// let z: string = undefined;

function doSomething(x: string | null) {
  if (x === null) {
    // ...
  } else {
    console.log(x.toUpperCase())
  }
}

function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}
