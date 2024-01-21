import RevenueCard from "./component/RevenueCard"

function App() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <RevenueCard title={"hi there"} amount={23} orderCounts={23} />
      </div>
    </>
  )
}

export default App
