import ItemCount from "../ItemCount/ItemCount";

export default function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}
