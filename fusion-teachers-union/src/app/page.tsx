"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
//import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GraduationCap, Users, BookOpen, Mail, /*Phone,*/ Menu, Instagram } from "lucide-react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => (
    <>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog" onClick={() => setIsOpen(false)}>
        Blog
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about" onClick={() => setIsOpen(false)}>
        About
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#for-parents" onClick={() => setIsOpen(false)}>
        For Parents
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#for-teachers" onClick={() => setIsOpen(false)}>
        For Teachers
      </Link>
      <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact" onClick={() => setIsOpen(false)}>
        Contact
      </Link>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white dark:bg-black dark:text-white dark:border-b-2 dark:border-white sticky top-0">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-6 w-6 mr-2" />
          <span className="font-bold">Fusion Academy Teachers Union</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <NavItems />
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white dark:bg-black dark:text-white">
            <nav className="flex flex-col gap-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="px-6 md:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to Fusion Academy Teachers Union
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-white">
                  Supporting excellence in education at Fusion Academies in New York City
                </p>
              </div>
              <div>
                <Button asChild className="mt-4 border-2 border-white hover:bg-white hover:text-black hover:dark:bg-black hover:dark:text-white">
                  <Link href="/mission">Mission Statement</Link>
                </Button>
              </div>
              {/*<div className="space-x-4">
                <Button asChild className="border-2 border-white">
                  <Link href="#for-parents">For Parents</Link>
                </Button>
                <Button asChild variant="outline" className="bg-white">
                  <Link href="#for-teachers">For Teachers</Link>
                </Button>
              </div>*/}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-lightgray">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
            <p className="my-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Fusion Academy Teachers Union is dedicated to supporting and empowering our educators, ensuring the highest
              quality education for your children at Fusion Academies in Brooklyn and on the Upper West Side.
            </p>
            <Button asChild size="lg" className="hover:bg-lightgray hover:text-black border-2 hover:border-black">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </section>
        <section id="for-parents" className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Parents</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 my-8">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Committed Educators</h3>
                <p className="text-gray-500">
                  Our union ensures that your children are taught by dedicated and well-supported teachers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BookOpen className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Quality Education</h3>
                <p className="text-gray-500">
                  We advocate for resources and policies that enhance the learning experience at Fusion Academy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Student Success</h3>
                <p className="text-gray-500">
                  Our goal is to create an environment where every student can thrive and succeed.
                </p>
              </div>
            </div>
            <Button asChild size="lg" className="hover:bg-lightgray hover:text-black border-2 hover:border-black">
              <Link href="/parent-petition">Sign the Parent Petition</Link>
            </Button>
          </div>
        </section>
        <section id="for-teachers" className="w-full py-12 md:py-24 lg:py-32 bg-lightgray">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">For Teachers</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              As a member of the Fusion Academy Teachers Union, you have access to resources, support, and a community of fellow
              educators. Together, we work to improve our teaching conditions and student learning outcomes.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/union">Union Resources</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <div className="mt-6">
              <div className="space-y-4">
                  <p className="text-gray-500">
                    Have questions or want to get involved?
                  </p>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4" />
                    <span>Instagram: @FusionTeacherUnion </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>UWS: uwsfusionunion@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>Brooklyn: unionfusionbrooklyn@gmail.com</span>
                  </div>
                </div>
            </div>
            {/*<div className="grid gap-10 sm:grid-cols-2 md:gap-16 mt-8">
              <div className="space-y-4">
                <p className="text-gray-500">
                  Have questions or want to get involved? Reach out to us using the contact information below or fill
                  out the form.
                </p>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@fusionteachersunion.org</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(212) 555-0123</span>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Subject" />
                <textarea
                  className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Message"
                />
                <Button type="submit">Send Message</Button>
              </form>
            </div>*/}
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