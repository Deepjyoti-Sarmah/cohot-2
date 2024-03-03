export default function({children} :{
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border-b text-center p-4">
        <h2>20% off for the next 3 days</h2>
      </div>
      {children}
    </div>
  )
}
