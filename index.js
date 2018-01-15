function add(a, b){
  return a + b
}
function subtract(a, b){
  return a - b
}
function multiply(a, b){
  return a * b
}
function inc(n){
  return n += 1
}
function inc(n){
  return n -= 1
}

function divide(a, b){
  return a / b
}
function  makeInt(n){
  parseInt(n)
}

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })