function printText(text: string, alignment: 'left' | 'right' | 'center') {

}

printText('hello', 'left');

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}

function configure(x: Options | 'auto') { }

configure({
  width: 100
})

configure('auto');

let b1: true = true;

let oMap = {
  count: 0,
}

if (true) {
  oMap.count = 1;
}

function handleRequest(url: string, method: 'GET' | 'POST' | 'GUESS') {
  console.log(url, method);
}

const req = {
  url: 'http://www.example.cn',
  method: 'GET',
} as const;

handleRequest(req.url, req.method);
