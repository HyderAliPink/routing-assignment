export default function List({ list }) {
  return (
    <div>
      {list.map((item, i) => (
        <h3 key={i}>{item.name}</h3>
      ))}
    </div>
  );
}
