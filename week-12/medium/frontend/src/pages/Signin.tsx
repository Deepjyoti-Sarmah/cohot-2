import Auth from "@/components/Auth"
import Quotes from "@/components/Quote"

const Signin = () => {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 bg-blue-100">
      <div>
        <Auth />
      </div>
      <div className="hidden lg:block bg-gray-200">
        <Quotes />
      </div>
    </div>
  )
}

export default Signin
