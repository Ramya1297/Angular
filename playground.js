var obj = {};
function funny(){


}
var funny1=function(){

}
//to access object item, use key  eg:obj.key
//to access array, use position. eg:arr[0]

var complexObj={

//key value pairs
funny2: function(){console.log("in funny2()");},
items: ["Mobiles","Cables","Papers","Laptop"],
subObj: {sk1:1000, 
        sk2:"some value" ,
        sk3:[1,2,3,
        ["a","b"],
        {ssk1:100}
     ]
    }
}

console.log("displaying funny2");
console.log(complexObj.funny2());
console.log("displaying cables");
console.log(complexObj.items[1]);
console.log("displaying some value");
console.log(complexObj.subObj.sk2);
console.log("displaying b");
console.log(complexObj.subObj.sk3[3][1]);
console.log("displaying ssk1");
console.log(complexObj.subObj.sk3[4].ssk1);


///// tweaking duncn

function fun(){
return "in fun()";

}
function fundoo(){

this.NameProperty = "ramya";
this.work = function(){
    return this.NameProperty+" Works";
}
}

//fundoo will act like constructor now
//becoz of new keyword all that in fundoo will be done
var classObj= new fundoo();
var funObj = new fun();

console.log(classObj.work());
console.log(funObj);