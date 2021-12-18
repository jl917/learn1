let obj = {
fn: function () {
console.log(this)
}
}
let a = 11
console.log(obj.fn())

console.log(a)