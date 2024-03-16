import { AvatarImage, Avatar } from "@/components/ui/avatar"

interface BlogProps {
  authorName: string;
  title: string,
  content: string,
  publishedDate: string
}

const Blog = ({authorName, title, content, publishedDate}: BlogProps) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-5xl font-bold leading-tight mb-4">{title}</h1>
          <p className="text-sm mb-8">Posted on {publishedDate}</p>
          <p className="text-lg">
            {content}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Author</h2>
          <div className="flex items-center mb-4">
            <Avatar>
              <AvatarImage alt="Jokester" src="/placeholder.svg?height=40&width=40" />
            </Avatar>
            <h3 className="text-xl font-bold ml-4">{authorName}</h3>
          </div>
          <p className="text-lg"></p>
        </div>
      </div>
    </div>
  )
}

export default Blog
