interface IPoint {
  x: number;
  y: number;
}

function printCoord(pt: IPoint): IPoint {
  return {
    x: Math.pow(pt.x, 4),
    y: Math.pow(pt.y, 4)
  }
}

printCoord({
  x: 100,
  y: 200
})

// 扩展接口
/* interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: 'winie',
  honey: true
} */

/* type Animal = {
  name: string;
}

type Bear = Animal & {
  honey: boolean
}

const bear: Bear = {
  name: '二',
  honey: false
} */

/*interface MyWindow {
  count: number;
}

interface MyWindow {
  title: string
}

const w: MyWindow = {
  title: 'hello ts',
  count: 100
}*/

type MyWindow = {
  title: string;
} & {
  count: number;
}

const w: MyWindow = {
  title: 'hello js',
  count: 200
}

// unique array with ES5
function unique(ary: Array<any>): Array<any> { 
  const res: Array<any> = []
  for (let i = 0; i < ary.length; i++) {
    if (res.indexOf(ary[i]) === -1) {
      res.push(ary[i])
    }
  }
  return res;
}