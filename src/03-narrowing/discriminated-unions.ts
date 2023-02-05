/* interface Shape {
  kind: 'circle' | 'square';
  radius?: number;
  sideLength?: number;
} */

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

enum Kind {
  Circle = 'circle',
  Square = 'square',
}

type Shape = Circle | Square

function hansleShape(shape: Shape) {
  if (shape.kind === Kind.Circle) {

  }
  else if (shape.kind === Kind.Square) {

  }
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case Kind.Circle:
      return Math.PI * shape.radius ** 2;
    case Kind.Square:
      return shape.sideLength ** 2;
  }
}
