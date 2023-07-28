export function Friend({ name, image, balance, curOpen, onCurOpen, id }) {
  const isOpen = id === curOpen;

  function handleToggle() {
    onCurOpen(isOpen ? null : id);
  }

  return (
    <li className="">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p className={!balance ? "" : balance > 0 ? `green` : `red`}>
        {" "}
        {!balance
          ? "You and Clark are even"
          : balance > 0
          ? `You owe ${name} ${balance}$`
          : `${name} owes you ${balance}$`}
      </p>
      <button className="button" onClick={handleToggle}>
        {isOpen ? "Close" : "Select"}
      </button>
    </li>
  );
}
