function class1(){
    this.propertyName=" A js property";
    this.fun=function(){console.log("js function");}
}

var obj= new class1();
console.log(obj);
console.log(obj.fun());

var a:string = " its string";
var b : number =100;
var arr:string[] =["mobile","cables","laptop"];
var tsObj:any={key:'value'};
var fundoo :any= function() :string{
    return "Trying to have fundoo..";
}


function fun() : string{
    return "Trying to have fun..";
}
console.log(fundoo());

console.log(fun());