import { Friends } from "./Friends";
import { AddFriend } from "./AddFriend";
import { useState } from "react";

export function Sidebar({ friends, onAddFriend, curOpen, onCurOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleAddFriend() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="sidebar">
      <Friends
        friends={friends}
        curOpen={curOpen}
        onCurOpen={onCurOpen}
      ></Friends>
      {isOpen && <AddFriend onAddFriend={onAddFriend}></AddFriend>}
      <button className="button" onClick={handleAddFriend}>
        {isOpen ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}
