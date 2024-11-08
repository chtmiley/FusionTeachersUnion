import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, ChevronLeft } from "lucide-react"

export default function Mission() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
      <main className="flex-1 flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-32 flex-1">
          <div className="container px-4 md:px-6 flex flex-col h-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-6">
              Our Mission
            </h1>
            <div className="space-y-6 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mb-12">
              <p>
                We, the teachers and mentors of Fusion Academy Upper West Side and Brooklyn, are dedicated to continuing to provide high-quality, personalized education for each of our students.  As essential members of the Fusion Academy Upper West Side and Brooklyn communities, we have formed a union because teaching and learning depend on a staff who are empowered and protected by respect, stability, and due process. 
              </p><p>
                To ensure quality of education for our students and to meet the unique challenges of one-to-one education, we will create a structure for accountability, transparency, and shared decision making.  We will ensure security in our positions, in our wages, and in the faith that our voices are not only heard but capable of inspiring institutional change in the interest of our students. 
                We seek to improve the workplace conditions for staff, as they directly impact the learning conditions of our students.  
              </p><p>
                Our union is committed to respect, integrity, fairness, and opportunity for all Fusion Academy Upper West Side and Brooklyn employees. 
              </p>
            </div>
            <div className="mt-auto">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6">
                Support Our Mission
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="hover:bg-lightgray hover:text-black border-2 hover:border-black">
                  <Link href="/parent-petition">Sign the Parent Petition</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 hover:border-black">
                  <Link href="/union">Get Involved as a Teacher</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
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