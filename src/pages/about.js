import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const About = () => {
  return (
    <Layout mainClassName="bg-green-100">
      <div className="grid gap-0 md:gap-5 grid-cols-1 md:grid-cols-2 md:px-5 md:min-h-screen pt-24 md:pt-28 md:pb-5">
        <div className="w-full p-10 bg-green-500 font-sans text-center flex flex-col items-center text-white">
          <h1 className="text-5xl font-serif">About Us</h1>
          <div className="flex flex-col mt-16 text-lg">
            <p>
              The Grow Craft is a soilless agriculture company that grows
              healthy, pesticide-free produce hydroponically and also teaches
              you how to do it yourself!
            </p>
            <p className="my-10">
              We want to enable people to shift to more sustainable ways of
              growing food and make it possible for everyone to have access to
              fresh and healthy food right at home.
            </p>
            <p>
              We are strongly rooted in our community with 10% of our profits
              dedicated to helping rural farmers learn and adopt sustainable,
              soilless farming methods.
            </p>
          </div>
        </div>
        <div className="w-full order-first md:order-none">
          <StaticImage
            src="../images/growcraft-main.webp"
            alt="Growcraft"
            className="h-full object-cover w-full"
            placeholder="blurred"
            objectFit="cover"
          />
        </div>
      </div>
    </Layout>
  )
}

export default About
