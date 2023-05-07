import "./CardList.css";
import Card from "../Card/Card";
import { MonsterTypes } from "../../types";

function CardList({ datas }: { datas: MonsterTypes[] }) {
  return (
    <div className="cardlist-wrapper">
      {datas.map((data: MonsterTypes) => {
        return (
          <Card
            key={data.id}
            name={data.name}
            id={data.id}
            email={data.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
