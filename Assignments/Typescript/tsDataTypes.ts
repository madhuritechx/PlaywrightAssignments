//any datatype

let data:any="Testleaf"
data = 567
data = true

console.log(data);

//unknown
let data1:unknown = true
data1=undefined
data1="Qeagle"

if (typeof data1 === "string") {
    console.log(data1.toUpperCase());
} else {
    console.log(data1);
}

