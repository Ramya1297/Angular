//function with diff types of parameters
function UsingParams(pRequired, pDefault, pOptional) {
    if (pDefault === void 0) { pDefault = "DBS"; }
    var pRest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        pRest[_i - 3] = arguments[_i];
    }
    console.log(pRequired);
    console.log(pDefault);
    console.log(pOptional);
    console.log(pRest);
}
UsingParams(false, "Dbs-1234", 100, "let", "me", "see");
UsingParams(true);
//funcn returning funcn
function arrayParams(pArr) {
    console.log(pArr);
}
function restParams() {
    var prest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        prest[_i - 1] = arguments[_i];
    }
    console.log(pRest);
    console.log(prest);
}
var arry = ['1', "hi"];
arrayParams(arry);
restParams('1', '2', 'hii', '122', 1, 2);
//self invokable funcn
//lamda funcn
