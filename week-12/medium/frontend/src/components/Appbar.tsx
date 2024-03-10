import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Appbar() {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow container max-w-full fixed z-10 mb-6">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold"> Medium </span>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="bg-green-500 text-white">Publish</Button>
        <MoreHorizontalIcon className="text-gray-500" />
        <BellIcon className="text-gray-500" />
        <Avatar>
          <AvatarImage alt="User profile" src="/placeholder.svg?height=32&width=32" />
          <AvatarFallback>h</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
