import { useState } from "react";

export function SplitBill({ curFriend, onSplitBill }) {
  const [bill, setBill] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const friendExpense = bill - myExpense;

  function handleOnSplitBill(e) {
    e.preventDefault();
    onSplitBill(curFriend.balance + friendExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleOnSplitBill}>
      <h2>Split a bill with Clark</h2>
      <label>💰Bill value</label>
      <input value={bill} onChange={(e) => setBill(+e.target.value)}></input>
      <label>🧍Your expens</label>
      <input
        value={myExpense}
        onChange={(e) => setMyExpense(+e.target.value)}
      ></input>
      <label>🧑‍🤝‍👩🏻{curFriend.name}'s expens</label>
      <input disabled value={friendExpense}></input>
      <label>🤑Who is paying the bill?</label>
      <select>
        <option value="you">🧍you</option>
        <option value={curFriend.name}>🧑‍🤝‍👩🏻{curFriend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
