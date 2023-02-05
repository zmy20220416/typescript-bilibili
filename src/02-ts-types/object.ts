function printName(obj: { first: string, last?: string }) {
  console.log(obj.last?.toUpperCase())
}

printName({
  first: 'Eason',
})
