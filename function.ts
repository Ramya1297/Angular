//function with diff types of parameters
function UsingParams(pRequired:boolean,pDefault:string="DBS",pOptional?:number,...pRest:string[]){
console.log(pRequired);
console.log(pDefault);
console.log(pOptional);
console.log(pRest);
}
UsingParams(false,"Dbs-1234",100,"let","me","see");
UsingParams(true);
//funcn returning funcn
function arrayParams(pArr:string[]){
    console.log(pArr);
}
function restParams(...pRest:string[],...prest:number[])
{
 console.log(pRest);   
 console.log(prest);
}
var arry=['1',"hi"];
arrayParams(arry);
restParams('1','2','hii','122', 1,2);

    //self invokable funcn
//lamda funcn
