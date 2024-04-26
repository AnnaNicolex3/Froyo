// create prompt that requests order from customer comma included
const froyoOrder = prompt ("Please enter your froyo order. Seperate each order with a comma!")
//creates variable with their order
const froyoArray = froyoOrder.split (",")

const froyoFunction =()=>{
const froyoObject = {}

for(let i=0; i<froyoArray.length;i++){
    if(froyoObject[froyoArray[i]]){
       froyoObject[froyoArray[i]] = froyoObject[froyoArray[i]]+1
    }else{
        froyoObject[froyoArray[i]] = 1
    }
}

return froyoObject
}
console.log(froyoFunction)