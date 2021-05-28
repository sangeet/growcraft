import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <MainSection />
      <BlocksSection />
      <ImageSection />
      <SoilLess />
      <Contact />
    </Layout>
  )
}

const MainSection = () => {
  return (
    <section className="h-screen relative">
      <StaticImage
        src="../images/growcraft-main.webp"
        alt="A dinosaur"
        className="absolute inset-0 h-full w-full object-cover z-0"
        style={{ height: "100%" }}
        placeholder="blurred"
      />
      <div className="h-full absolute right-0 bottom-0 z-10 flex flex-col justify-center sm:justify-end">
        <div className="absolute top-0 bottom-0 right-0 w-full h-full bg-green-700 opacity-50"></div>
        {/* <img src={HeaderLogo} className="m-10 sm:m-32 z-10 object-contain" /> */}
        <StaticImage
          src="../images/growcraft-logo.webp"
          alt="Logo"
          className="m-10 sm:m-32 z-10 object-contain"
          placeholder="blurred"
        />
      </div>
    </section>
  )
}

const BlocksSection = () => {
  const firstBlock = [
    { icon: "fas fa-bug", text: "Pesticide free" },
    {
      icon: "fas fa-map-marker-alt",
      text: "Cultivated locally",
    },
    {
      icon: "fas fa-clock",
      text: "Delivered within hours of harvest",
    },
    {
      icon: "fas fa-tint",
      text: "Grown using 80% lower water",
    },
  ]
  const fourthBlock = [
    {
      icon: "fas fa-user-friends",
      text: "Free initial consultation",
    },
    {
      icon: "fas fa-tape",
      text: "Designed just for you",
    },
    {
      icon: "fas fa-seedling",
      text: "Everything you need to start growing",
    },
    {
      icon: "fas fa-sync",
      text: "Continued support",
    },
  ]
  return (
    <section className="py-0 sm:py-5 lg:py-32 bg-green-600">
      <div className="container grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white">
        <div className="w-full grid justify-center bg-green-300 grid-cols-1 sm:grid-cols-2 py-20">
          {firstBlock.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center p-10 text-center"
              key={index}
            >
              <i className={`${item.icon} text-5xl mb-5 text-green-600`}></i>
              <span className="text-2xl text-green-700">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col py-20 px-10">
          <div className="flex flex-col text-green-600">
            <h2 className="text-4xl sm:text-5xl font-serif">Green Box</h2>
            <span className="text-xl sm:text-2xl italic mt-3 font-serif">
              Coming soon to Bengaluru!
            </span>
          </div>
          <div className="flex flex-col text-lg sm:text-xl">
            <p className="pt-5">
              Green Box is an assortment of leafy greens and microgreens grown
              hydroponically, in a hygienic and pesticide-free environment.
            </p>
            <p className="pt-5">
              Travelling from our farm to your plate within hours of harvest, we
              make sure every Green Box is fresh, healthy and eco friendly!
            </p>
            <p className="pt-5">Contact us to join our waitlist!</p>
          </div>
        </div>
        <div className="w-full flex flex-col py-20 px-10 border-t border-green-500 lg:border-white">
          <div className="flex flex-col text-green-600">
            <h2 className="text-4xl sm:text-5xl font-serif mb-5">
              Get Growing!
            </h2>
          </div>
          <div className="flex flex-col text-lg sm:text-xl">
            <p className="pt-5">
              Let's make the best of your grow space by custom building
              hydroponic systems to fit your needs - both for home and farm!
            </p>
            <p className="pt-5">
              Please leave us a message below to get a free consultation!
            </p>
            <a href="/contact" className="mt-10 btn">
              Contact
            </a>
          </div>
        </div>
        <div className="w-full grid justify-center bg-green-300 grid-cols-1 sm:grid-cols-2 py-20">
          {fourthBlock.map((item, index) => (
            <div
              className="flex flex-col justify-center items-center p-10 text-center"
              key={index}
            >
              <i className={`${item.icon} text-5xl mb-5 text-green-600`}></i>
              <span className="text-2xl text-green-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ImageSection = () => {
  return (
    <section className="h-screen">
      <StaticImage
        src="../images/hydroponics.webp"
        alt="A dinosaur"
        className="h-full w-full object-cover"
        style={{ height: "100%" }}
        placeholder="blurred"
      />
    </section>
  )
}

const SoilLess = () => {
  const data = [
    {
      icon: "fas fa-layer-group",
      heading: "Grow 3x More",
      text:
        "Designed for space-efficiency, our systems allow you to have more plants than ever before!",
    },
    {
      icon: "fas fa-tint",
      heading: "Save Upto 90% Water",
      text:
        "By recirculating and reusing water, usage is up to 90% lower when compared to soil growing!",
    },
    {
      icon: "fas fa-globe-africa",
      heading: "Use Zero Soil",
      text:
        "Growing without soil helps avoid soil-borne pests, difficult labour and stay on top of plant root health!",
    },
  ]
  return (
    <section className="mx-auto container flex flex-col items-center py-20">
      <h2 className="text-green-600 text-4xl md:text-6xl font-serif">
        Why grow soilless?
      </h2>
      <div className="flex flex-wrap justify-center mt-20">
        {data.map((col, index) => (
          <div
            className="flex flex-col items-center p-10 text-center w-full md:w-1/2 lg:w-1/3"
            key={index}
          >
            <i className={`${col.icon} text-9xl mb-20 text-green-600`}></i>
            <h3 className="text-4xl text-green-600 font-serif">
              {col.heading}
            </h3>
            <p className="text-lg mt-5">{col.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const Contact = () => {
  const socialLinks = [
    {
      icon: "fab fa-facebook-square",
      link: "https://facebook.com/thegrowcraftsocial",
    },
    {
      icon: "fab fa-instagram",
      link: "https://instagram.com/thegrowcraft",
    },
  ]
  return (
    <section
      id="contact"
      className="mx-auto container px-10 lg:px-0 flex py-20 grid grid-cols-1 lg:grid-cols-2 gap-20"
    >
      <div>
        <h2 className="text-green-600 text-5xl self-center font-serif">
          Contact Us
        </h2>
        <div className="flex flex-col py-10">
          <span className="py-2">
            #13, 3rd A Main, AMS Layout, Vidyaranyapura, Bangalore - 560097
          </span>
          <span className="py-2">info@thegrowcraft.com</span>
          <span className="py-2">+91 7760167979</span>
          <div className="py-2 flex mt-5">
            {socialLinks.map(( link, index ) => (
              <a href={link.link} className="w-12 h-12 mr-2" key={index}>
                <i
                  className={`${link.icon} text-4xl text-green-600 hover:text-green-500  transition-all duration-200 ease`}
                ></i>
              </a>
            ))}
          </div>
        </div>
        <form action="" className="flex flex-col pt-10 text-xl">
          <h3 className="text-3xl text-green-600 font-serif">
            Leave us a message!
          </h3>
          <input
            type="text"
            className="border-b border-black placeholder-black my-5 py-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border-b border-black placeholder-black my-5 py-2"
            placeholder="Email"
          />
          <input
            type="text"
            className="border-b border-black placeholder-black my-5 py-2"
            placeholder="Phone"
          />
          <label htmlFor="message">Leave us a message..</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            className="border-b border-black py-2"
            rows="3"
          ></textarea>
          <button type="submit" className="mt-10 btn">
            Submit
          </button>
        </form>
      </div>
      <div>
        <div className="mapouter h-full">
          <div className="gmap_canvas h-96 lg:h-full">
            <iframe
              className="w-full h-full"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=darshan%20flour%20mill,%20ams%20layout&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="map-embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndexPage

//98C339
