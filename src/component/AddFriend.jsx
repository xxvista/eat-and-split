import { useState } from "react";

export function AddFriend({ onAddFriend }) {
  const randomImage = Math.floor(Math.random() * 99999);
  const [name, setName] = useState("");
  const [image, setImage] = useState(`https://i.pravatar.cc/?u=${randomImage}`);

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      name,
      image,
      balance: 0,
      id: Date.now(),
    };

    onAddFriend(newFriend);

    setName("");
    setImage(`https://i.pravatar.cc/?u=${randomImage}`);
  }

  return (
    <>
      <form className="form-add-friend" on onSubmit={handleSubmit}>
        <label>🧑‍🤝‍👩🏻Friend name</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>🏞️ Image URL</label>
        <input value={image} onChange={(e) => setImage(e.target.value)}></input>
        <button className="button">Add</button>
      </form>
    </>
  );
}
