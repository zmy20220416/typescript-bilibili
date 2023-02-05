type TPoint = {
  x: number;
  y: number;
}

type ID = number | string;

function printPoint(pt: TPoint) {
  return pt.x + pt.y;
}

function printID(id: ID) {
  console.log(id.toLocaleString());
}
