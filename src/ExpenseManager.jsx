// import React, { useState } from "react";

// function ExpenseManager() {
//   const [transactions, setTransactions] = useState([]);
//   const [title, setTitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [type, setType] = useState("income"); 
//   const addTransaction = () => {
//     if (title.trim() === "" || amount.trim() === "" || isNaN(amount)) {
//       alert("Please enter a valid title and numeric amount.");
//       return;
//     }

//     const newTransaction = {
//       id: Date.now(),
//       title,
//       amount: parseFloat(amount),
//       type
//     };

//     setTransactions([...transactions, newTransaction]);
//     setTitle("");
//     setAmount("");
//   };

//   const totalIncome = transactions
//     .filter((t) => t.type === "income")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const totalExpense = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((acc, t) => acc + t.amount, 0);

//   const balance = totalIncome - totalExpense;

//   return (
//     <div>
//       <h1>Kharcha Manager</h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           type="number"
//           placeholder="Amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//                 <br />

//         <select value={type} onChange={(e) => setType(e.target.value)}>
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </select>
//         <button onClick={addTransaction}>Add</button>
//       </div>

//       <h2>Expenses</h2>
//       <ul>
//         {transactions.map((t) => (
//           <li key={t.id}>
//             {t.title} - {t.type === "income" ? "+" : "-"}Rs:{t.amount.toFixed(2)}
//           </li>
//         ))}
//       </ul>

//       <h2>Balance and Kharcha</h2>
//       <div>
//         <p>Total Income: Rs:{totalIncome.toFixed(2)}</p>
//         <p>Total Expense: Rs:{totalExpense.toFixed(2)}</p>
//         <p>Remaining Balance: Rs:{balance.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// }

// export default ExpenseManager;
