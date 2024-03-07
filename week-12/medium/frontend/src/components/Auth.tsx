import { Label } from "@radix-ui/react-label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

const Auth = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Card className="flex flex-col justify-center m-auto p-4">
        <CardHeader>
          <CardTitle className="text-3xl text-center p-2 font-extrabold">Signup</CardTitle>
          <CardDescription>Enter your email below to create an account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input placeholder="email"/>
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input placeholder="password"/>
          </div>
          <div className="space-y-2">
            <Button>Signup</Button>
          </div>
        </CardContent>
        <CardFooter className="space-y-2 text-gray-700">
          Already have a account? {"  "}
          <Link className="underline p-2" to="/Signin">Signin</Link>
        </CardFooter>


      </Card>

    </div>
  )
}

export default Auth
