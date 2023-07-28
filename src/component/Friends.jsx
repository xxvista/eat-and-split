import { Friend } from "./Friend";

export function Friends({ friends, curOpen, onCurOpen }) {
  return (
    <ul className="sidebar">
      {friends.map((friend) => (
        <Friend
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          id={friend.id}
          key={friend.id}
          curOpen={curOpen}
          onCurOpen={onCurOpen}
        ></Friend>
      ))}
    </ul>
  );
}
