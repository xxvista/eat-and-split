import { Sidebar } from "./Sidebar";
import { SplitBill } from "./SplitBill";
import { initialFriends } from "../data";
import { useState } from "react";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [curOpen, setCurOpen] = useState(null);
  const curFriend = friends.filter((friend) => friend.id === curOpen)[0];

  function handleAddFriend(newFriend) {
    setFriends((frnds) => [...frnds, newFriend]);
  }

  function handleSplitBill(newBalance) {
    setFriends((frnds) =>
      frnds.map((f) => (curFriend === f ? { ...f, balance: newBalance } : f))
    );
  }

  return (
    <div className="app">
      <Sidebar
        friends={friends}
        onAddFriend={handleAddFriend}
        curOpen={curOpen}
        onCurOpen={setCurOpen}
      ></Sidebar>
      {curOpen && (
        <SplitBill
          onSplitBill={handleSplitBill}
          curFriend={curFriend}
        ></SplitBill>
      )}
    </div>
  );
}
