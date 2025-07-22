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

// import { useEffect, useState } from "react";

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100,
//       });
//     }, 1000);
//   });

//   fetch("https://google.com", async (res) => {
//     const json = await res.json();
//     setBankData(json);
//     // Assume it is { income: 100 }
//   });

//   const incomeTax = (bankData.income + exchangeData) * 0.3;

//   return <div>hi there, your income tax returns are {incomeTax}</div>;
// }

// export default App;

// use memo
import { useEffect, useState, useMemo } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    });
  }, []);

  const cryptoReturns = useMemo(() => {
    exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);
  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;
