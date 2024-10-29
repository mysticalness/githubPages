import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Round() {

  const { name } = useParams();

  const [loading, setLoading] = useState(true);
  const [rounds, setRounds] = useState([]);

  console.log(name)

  useEffect(() => {
    fetch(`http://localhost:3001/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setRounds(data);
        setLoading(false);
      });
  }, []);

  console.log(rounds)


  return (

    <div className="roundContent">
      {loading ? "" :
        rounds.map((r) => (
          <div>
              <div>{r.number}일차</div>
              <div>{r.content}</div>
          </div>
        ))
      }
    </div>

  );
}

export default Round;
