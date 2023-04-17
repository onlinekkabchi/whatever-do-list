import { useState, useEffect } from "react";
import "./styles/style.css";
import "./App.css";

const columns = (column) =>
  column.map((ctem, index) =>
    typeof ctem === "boolean" && ctem === true ? (
      <td key={index}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Check">
              <path
                id="Vector"
                d="M6 12L10.2426 16.2426L18.727 7.75732"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </td>
    ) : (
      <td key={index}>{ctem}</td>
    )
  );

function TodoList(props) {
  const data = props.data;

  // useEffect(() => {
  //   console.log("data");
  //   console.log(data);
  // });

  return (
    <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>{columns(item)}</tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbz0cs0o09-lqMI_jFCNSX3NrPoK9R01TA39DaiPBuFs_goxQTq4eejY0jEiCCncCccKFw/exec"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>아무단어장</h1>
        <svg
          width="50px"
          height="50px"
          viewBox="3 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Interface / Check">
              <path
                id="Vector"
                d="M6 12L10.2426 16.2426L18.727 7.75732"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </g>
        </svg>
      </header>
      <main>
        {data ? <TodoList data={data} /> : <aside>데이터 가져오는 중!</aside>}
      </main>
      <footer>
        <h3>쏘냐&나단 프로젝트</h3>
        <p>
          이 페이지는 React + Google App Script + Netlify 로 만들어졌습니다.
        </p>
      </footer>
    </div>
  );
}

export default App;
