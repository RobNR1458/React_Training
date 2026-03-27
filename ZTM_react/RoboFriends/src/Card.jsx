export default function Card({ name, username, email }) {
  return (
    <div className="bg-light-green dib br5 pa3 ma2 grow bw2 shadow-5">
      <img alt="Avatar" src={`https://robohash.org/${username}?200*200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
