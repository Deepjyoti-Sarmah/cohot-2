import { Label } from "@radix-ui/react-label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { SignupType} from "@deepjyoti-sarmah/zod-input-validator"
import axios from "axios"
import { BACKEND_URL } from "@/config"

const Auth = ({type}: {type: "signin" | "signup"}) => {
  const naviagate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignupType>({
    email: "",
    password: ""
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type=== "signup"? "signup":"signin"}`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      naviagate("/blog")
    } catch (error) {
      alert(`Error while ${type === "signin"? "signin": "signup"}`);
    }
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
            <Button onClick={sendRequest}>{type === "signup"? "Sign Up": "Sign In"}</Button>
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
