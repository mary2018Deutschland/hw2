function SchoppingList({ items }) {
  return (
    <ul>
      {items.length === 0
        ? "Список покупок пуст"
        : items.map((el, ind) => (
            <li key={ind}>
              <p>category: {el}</p>
            </li>
          ))}
    </ul>
  );
}

export default SchoppingList;
