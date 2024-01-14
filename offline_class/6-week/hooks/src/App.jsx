import { useEffect, useState, useMemo } from 'react'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  // fetch("https://google.com", async (res) => {
  //   const json = await res.json();
  //   setBankData(json);
  //   // Assume it is { income: 100 }
  // });
  //
  useEffect(() => {
    setTimeout(() => {
      setExchange1Data({
        returns: 100
      });
    });

    setTimeout(() => {
      setExchange2Data({
        returns: 100
      });
    });

    setTimeout(() => {
      setBankData({
        income: 300
      });
    }, 3000);

  },[]);

  // const cryptoReturns = useMemo(() => {
  //   return exchange1Data.returns + exchange2Data.returns ;
  // }, [exchange1Data, exchange2Data]);
  // const incomeTax = (bankData.income + exchangeData.returns) * 0.3;
  // const incomeTax = (bankData.income + cryptoReturns) * 0.3;

  // function cryptoReturns() {
  //   return exchange1Data.returns + exchange2Data.returns ;
  // }

  // const incomeTax = (cryptoReturns() + bankData.income) * 0.3;
  // console.log(incomeTax);



  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App;
