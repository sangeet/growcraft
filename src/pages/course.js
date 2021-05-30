import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Course = () => {
  return (
    <Layout mainClassName="pt-28" title="Course">
      <IntroSection />
      <NotifyMeSection />
    </Layout>
  )
}

const IntroSection = () => {
  return (
    <section className="max-w-6xl mx-2 md:mx-5 xl:mx-auto border border-green-500 mb-10 rounded-bl-lg rounded-br-lg">
      <h1 className="text-2xl bg-green-500 text-white text-center py-2 font-serif">
        Foundation Course on Hydroponics and Microgreens
      </h1>
      <div className="flex flex-col p-5 md:p-20">
        <h2 className="text-2xl font-bold mb-2">What is it?</h2>
        <p>
          In this course, "Introduction to Hydroponics & Microgreens", you'll
          learn everything you need to start growing hydroponically and also
          grow microgreens. We will take you through every step of the process -
          from seed to harvest. The course is entirely in English with
          downloadable resources, easy-to-understand visuals, and live
          demonstrations.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-2">Who is it for?</h2>
        <p>
          It is for anyone who wants to learn about hydroponics and is wondering
          where to start. There are no minimum requirements, you can take it
          even if you have never grown a plant before.
        </p>
        <h2 className="text-2xl font-bold mt-10 mb-2">What do you get from the course?</h2>
        <p>
          After this course, you will be able to start your own hydroponic
          garden or take another step towards growing commercially. You'll also
          know how to grow your own microgreens!
        </p>
        <button disabled={true} className="btn mx-auto mt-16">
          Coming soon..
        </button>
        {/* 
        <div className="flex flex-col items-stretch text-center mt-16 w-64 self-center">
          <span>Coming soon...</span>
          <input
            placeholder="Enter Email"
            type="email"
            name=""
            id=""
            className="border rounded px-3 py-2 mt-5 mb-2 text-center"
          />
        </div> */}
      </div>
    </section>
  )
}

const NotifyMeSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-full">
        <StaticImage
          src="../images/growcraft-main.webp"
          alt="A dinosaur"
          className="h-full w-full object-cover"
          placeholder="blurred"
        />
      </div>
      <div className="w-full p-5 md:p-10 bg-green-500 font-sans text-center flex flex-col items-center text-white">
        <div className="flex flex-col mt-16 text-xl">
          <p className="mb-2">Have questions about the course?</p>
          <p className="mb-10">Want to know more?</p>
          <a href="/" className="btn btn-black mx-auto">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Course
