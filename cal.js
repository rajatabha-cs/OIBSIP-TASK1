console.log("Hello");
let resul=document.getElementById("inputtext");

let calculate=(number)=>{
    resul.value+=number;
}

let result=()=>{
    try{
        resul.value=eval(resul.value);
    }
    catch(err){
        alert("Enter valid input syntax");
    }
}

function clr(){
    resul.value=" ";
}

function del(){
    resul.value=resul.value.slice(0,-1);
}