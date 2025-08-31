import React, { useState } from "react";

export default function Myepenses() {

 const [input, setInput] = useState("");
 const [balance, setBalance] = useState(0);
 const [type, setType] = useState("Income");
 const [income, setIncome] = useState(0);
 const [expense, setExpense] = useState(0);
 const [title, setTitle] = useState();

function inputValue(e){
    setInput(e.target.value);
    // console.log(input);
    
}

function CurrentBalance (){
let amount = Number(input);
console.log(amount);

if (!amount) {
 return;   
}
else if(type === "Income"){
    
    console.log(income);
    setIncome(income + amount)
    setBalance(balance + amount)
}

else if(type === "Expense"){
    setExpense(expense + amount)
    setBalance(balance - amount)
}


number.value = ""

}


function Title(){

}

function reset() {
setBalance(0)
setExpense(0)
setIncome(0)
    
}



    return (
      <>
        <h1>Expense Manager</h1>
        <input onChange={Title} placeholder="Name" type="text" />
        <input onChange={inputValue} id="number" placeholder="Number" type="number" />

        <select value={type} onChange={(e)=> {setType(e.target.value)}} name="" id="">
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button onClick={CurrentBalance}>Add</button>
        <li>  
        </li>
        <h1> balance ${balance}</h1>
        <h1>Income ${income}</h1>
        <h1>Expense ${expense}</h1>
        <button onClick={reset}>reset</button>
      </>
    );
}

