import { Label } from "@radix-ui/react-label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { SignupType } from "@deepjyoti-sarmah/zod-input-validator"

const Auth = ({type}: {type: "signin" | "signup"}) => {

  const [postInputs, setPostInputs] = useState<SignupType>({
    email: "",
    password: ""
  });

  const sendRequest = () => {

  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <Card className="flex flex-col justify-center m-auto p-4 border-none max-w-fit">
        <CardHeader>
          <CardTitle className="text-3xl text-center p-2 font-extrabold">{type === "signin"? "Signin" : "Signup"}</CardTitle>
          <CardDescription>{type === "signup"? "Enter your email to create an account": "Enter your email to login to an account"}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <LabelledInput label="Email" placeholder="email" onChange={(e) => {
            setPostInputs(postInput => ({
              ...postInput, 
              email: e.target.value
            }))
          }}/>
          <LabelledInput label="Password" placeholder="password" type="password" onChange={(e) => {
            setPostInputs(postInput => ({
              ...postInput, 
              password: e.target.value
            }))
          }}/>
          <div className="space-y-2">
            <Button>{type === "signup"? "Sign Up": "Sign In"}</Button>
          </div>
        </CardContent>
        <CardFooter className="space-y-2 text-gray-700">
          {type === "signup"? "Already have an account?" : "Don't have an account?"}
          <Link className="underline p-2" to={type=== "signup"? "/signin":"/signup"}>
            {type=== "signup"? "SignIn" : "SignUp"}
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

interface LabelInputType {
  label: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelInputType ) {
  return (
    <div className="space-y-2">
      <Label className="p-2">{label}</Label>
      <Input onChange={onChange} type={type || "text"} placeholder={placeholder}/>
    </div>
  )
}

export default Auth
