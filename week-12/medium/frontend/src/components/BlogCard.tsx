import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogCardProps {
  authorName: string;
  title: string,
  content: string,
  publishedDate: string
}

const BlogCard = ({authorName, title, content, publishedDate}: BlogCardProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar>
          <AvatarImage alt="Peter V." src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>{authorName[0]}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-medium"> {authorName} </div>
          <div className="text-xs text-gray-500">
            {publishedDate}<span aria-hidden="true"> •</span> Member-only
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">
        {title}
      </h1>
      <p className="text-gray-700 mb-4">
        {content.slice(0, 100) + "..."}
      </p>
      <div className="flex flex-row items-center justify-between space-x-2 mb-4 ">
        <div className="flex justify-center">
          <Badge variant="secondary">Side Hustle</Badge>
          <div className="text-sm px-2 text-gray-500">{`${Math.ceil(content.length/ 100)} mins`}</div>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost">
            <HeartIcon />
          </Button>
          <Button variant="ghost">
            <BookmarkIcon />
          </Button>
          <Button variant="ghost">
            <MoreHorizontalIcon  />
          </Button>
        </div>
      </div>
    </div>
  )
}

function BookmarkIcon() {
  return (
    <svg
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function HeartIcon() {
  return (
    <svg
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MoreHorizontalIcon() {
  return (
    <svg
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

export default BlogCard
