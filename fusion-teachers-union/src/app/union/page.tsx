import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ChevronLeft, FileText, Handshake, Link as LinkIcon } from "lucide-react"

export default function Union() {
  const unionLeaders = [
    { name: "Danielle Mastricola", role: "Upper West Side Chapter Leader", email: "jane.doe@fusionacademy.com", phone: "(555) 123-4567", image: "/placeholder.svg?height=200&width=200" },
    { name: "Michael Favara", role: "Brooklyn Chapter Leader", email: "john.smith@fusionacademy.com", phone: "(555) 234-5678", image: "/placeholder.svg?height=200&width=200" },
    { name: "Liz McGlone", role: "Upper West Side Delegate", email: "emily.johnson@fusionacademy.com", phone: "(555) 345-6789", image: "/placeholder.svg?height=200&width=200" },
    { name: "Elizabeth Maghakian", role: "Brooklyn Delegate", email: "michael.brown@fusionacademy.com", phone: "(555) 456-7890", image: "/placeholder.svg?height=200&width=200" },
  ]

  const resources = [
    { title: "Union Bylaws", description: "Read our union's governing document", link: "#", icon: FileText },
    { title: "Teacher's Handbook", description: "Essential information for all union members", link: "#", icon: FileText },
    { title: "Professional Development", description: "Opportunities for growth and learning", link: "#", icon: GraduationCap },
    { title: "Legal Resources", description: "Information on your rights and protections", link: "#", icon: LinkIcon },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-black dark:text-white dark:border-b-2 dark:border-white sticky top-0">
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
      <main className="flex-1 py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            Teacher Information
          </h1>
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">Resources for Teachers</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map((resource, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
                      <resource.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link">
                      <Link href={resource.link}>Access Resource</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">Union Leaders</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {unionLeaders.map((leader, index) => (
                <Card key={index}>
                  <CardHeader>
                    {/*<Image
                      src={leader.image}
                      alt={leader.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />*/}
                    <CardTitle>{leader.name}</CardTitle>
                    <CardDescription>{leader.role}</CardDescription>
                  </CardHeader>
                  {/*<CardContent>
                    <div className="flex items-center mb-2">
                      <Mail className="mr-2 h-4 w-4" />
                      <span>{leader.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>{leader.phone}</span>
                    </div>
                  </CardContent>*/}
                </Card>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">United Federation of Teachers (UFT)</h2>
                <a href="https://www.uft.org/" className="flex flex-row">
                    <Handshake className="mx-4"/><span>UFT Website</span>
                </a>
                <br />
                <a href="https://www.uft.org/your-union/about-uft" className="flex flex-row">
                    <Handshake className="mx-4"/><span>About the UFT</span>
                </a>
          </section>
        </div>
      </main>
      <footer className="bg-white flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
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