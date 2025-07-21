// use state example
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button
//         onClick={function () {
//           setCount(count + 1);
//         }}
//       >
//         Count is {count}
//       </button>
//     </div>
//   );
// }

// export default App;
// useeffect

import { useEffect, useState } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  });

  fetch("https://google.com", async (res) => {
    const json = await res.json();
    setBankData(json);
    // Assume it is { income: 100 }
  });

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;
