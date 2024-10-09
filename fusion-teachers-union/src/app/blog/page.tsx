'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ChevronLeft } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      title: "The Importance of Teacher Unions in Private Schools",
      description: "Exploring the role of unions in maintaining educational standards and teacher rights.",
      date: "2024-03-15",
      readTime: "5 min read",
    },
    {
      title: "Fusion Academy's Unique Approach to Education",
      description: "How our teaching methods differ from traditional schools and benefit students.",
      date: "2024-03-10",
      readTime: "7 min read",
    },
    {
      title: "Supporting Teachers' Professional Development",
      description: "Initiatives and programs offered by the Fusion Academy Teachers Union.",
      date: "2024-03-05",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <GraduationCap className="h-6 w-6 mr-2" />
          <span className="font-bold">Fusion Academy Teachers Union</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Button asChild variant="ghost">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-lightgray">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Fusion Academy Teachers Union Blog
            </h1>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay updated with the latest news, insights, and stories from our union and Fusion Academy.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-pretty">{post.title}</CardTitle>
                    <CardDescription className="text-pretty">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <p className="text-sm text-gray-500">{post.readTime}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Fusion Academy Teachers Union. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}