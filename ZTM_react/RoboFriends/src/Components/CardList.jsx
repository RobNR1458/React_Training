import Card from "./Card.jsx";

export default function CardList({ robots }) {
  /*IMPORTANTE!!! key es un valor que usa React internamente para "mapear" elemento del array...
    ... con componentes y así lograr distinguir entre ellos. No obstante, esta prop NUNCA llegará al hijo.*/
  return (
    <>
      {robots.map((user) => {
        return (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        );
      })}
    </>
  );
}
