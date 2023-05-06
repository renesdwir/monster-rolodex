import "./Card.css";

interface CardProps {
  name: string;
  id: string;
  email: string;
}
function Card({ name, id, email }: CardProps) {
  return (
    <div className="card-wrapper">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={"monster-testName"}
      />
      <h3 className="title">{name}</h3>
      <p className="email">{email}</p>
    </div>
  );
}

export default Card;
