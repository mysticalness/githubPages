import { useEffect, useState } from "react";
import List from "../components/List";

function Document() {
  const [loading, setLoading] = useState(true);
  const [document, setDocument] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/docuInfo_1")
      .then((response) => response.json())
      .then((data) => {
        setDocument(data);
        setLoading(false);
      });
  }, []);

  console.log(document);

  return (
    <div className="summaryContent">
      {loading
        ? ""
        : document.map((d) => (
            <List
              key={d.number}
              number={d.number}
              name={d.documentName}
              duration={d.duration}
              img={d.coverImg}
              type={d.type}
            />
          ))}
    </div>
  );
}

export default Document;
