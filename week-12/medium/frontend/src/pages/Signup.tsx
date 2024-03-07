import Auth from "@/components/Auth"
import Quotes from "@/components/Quote"

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div>
        <Auth type="signup" />
      </div>
      <div className="hidden lg:block bg-gray-50">
        <Quotes />
      </div>
    </div>
  )
}

export default Signup
