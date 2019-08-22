function class1() {
    this.propertyName = " A js property";
    this.fun = function () { console.log("js function"); };
}
var obj = new class1();
console.log(obj);
console.log(obj.fun());
var a = " its string";
var b = 100;
var arr = ["mobile", "cables", "laptop"];
var tsObj = { key: 'value' };
var fundoo = function () {
    return "Trying to have fundoo..";
};
function fun() {
    return "Trying to have fun..";
}
console.log(fundoo());
console.log(fun());
