import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, ChevronLeft } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  const timelineEvents = [
    { date: "October 2023", title: "Upper West Side Unionizes", description: "Teachers from Upper West Side vote unanimously to join the union." },
    { date: "June 2022", title: "Brooklyn Campus Unionizes", description: "Brooklyn campus teachers vote to unionize." },
    { date: "March 2019", title: "Park Avenue Campus Unionizes", description: "Teachers begin expressing concerns about working conditions and compensation." },
  ]

  const unionLeaders = [
    { name: "Danielle Mastricola", role: "Upper West Side Chapter Leader", email: "jane.doe@fusionacademy.com", phone: "(555) 123-4567", image: "/placeholder.svg?height=200&width=200" },
    { name: "Michael Favara", role: "Brooklyn Chapter Leader", email: "john.smith@fusionacademy.com", phone: "(555) 234-5678", image: "/placeholder.svg?height=200&width=200" },
    { name: "Liz McGlone", role: "Upper West Side Delegate", email: "emily.johnson@fusionacademy.com", phone: "(555) 345-6789", image: "/placeholder.svg?height=200&width=200" },
    { name: "Elizabeth Maghakian", role: "Brooklyn Delegate", email: "michael.brown@fusionacademy.com", phone: "(555) 456-7890", image: "/placeholder.svg?height=200&width=200" },
  ]

  const goals = [
    { title: "Security", description: "Guaranteed healthcare and class schedules" },
    { title: "Resources", description: "Adequate planning time for classes" }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-black dark:text-white dark:border-b-2 dark:border-white sticky top-0 z-20">
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
      <main className="flex-1 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
            About Our Union
          </h1>
          {/*<section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">Our History</h2>
            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-8">
              The Fusion Academy Teachers Union was formed to advocate for the rights and well-being of educators across our Brooklyn and Upper West Side campuses. Our journey began with a shared vision for a more empowered and supported teaching community.
            </p>
          </section>*/}
          <section className="my-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">Goals</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {goals.map((goal, index) => (
                <Card key={index} className="bg-black text-white">
                  <CardHeader>
                    <CardTitle>{goal.title}</CardTitle>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">Timeline</h2>
            <div className="relative">
              {/* Central timeline line */}
              <div className={"absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden sm:block"}></div>
              
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center justify-between mb-8 ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} flex-row`}>
                  {/*<div className="w-5/12">
                    <div className="p-4 rounded-lg shadow-md">
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 block">{event.date}</time>
                    </div>
                  </div>*/}
                  <div className="sm:w-5/12"></div>
                  <div className="z-10">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full ring-8 ring-white">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="sm:w-5/12">
                    <div className="p-4 bg-white rounded-lg shadow-md">
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 block">{event.date}</time>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-base font-normal text-gray-500">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="my-20">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">Campus Chapter Leaders</h2>
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