import Slider from 'react-slick'
import { useState } from 'react'
import Link from 'next/link'
import posts, { Post } from '../../markdown/0-index'

function postId(id) {
  // Returns a post based on ID
  return posts.filter(post => post.id === id)[0]
}

const Content1: React.FC<React.ReactNode> = () => {

  return <>
    <div className="p-6">
      <img
        src="/projects/placeholder.png"
        className="w-full object-cover shadow-xl rounded-lg"
      />
      <p className="text-gray-100 text-lg max-w-screen-md mt-6 mx-auto">
        {postId(7).description}
      </p>
    </div>
  </>
}

const Content2: React.FC<React.ReactNode> = () => {
  return <>
    <div className="p-6">
      <img
        src="/projects/placeholder.png"
        className="w-full object-cover shadow-xl rounded-lg"
      />
      <p className="text-gray-100 text-lg max-w-screen-md mt-6 mx-auto">
        {postId(6).description}
      </p>
    </div>
  </>
}

const Content3: React.FC<React.ReactNode> = () => {
  return <>
    <div className="p-6">
      <img
        src="/projects/placeholder.png"
        className="w-full object-cover shadow-xl rounded-lg"
      />
      <p className="text-gray-100 text-lg max-w-screen-md mt-6 mx-auto">
        {postId(1).description}
      </p>
    </div>
  </>
}

const RecentProj: React.FC<React.ReactNode> = () => {

  const settings = {
    centerMode: true,
    infinite: true,
    className: "slider",
    centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    variableWidth: true,
    dots: false,

    // Autoplay settings
    autoplaySpeed: 13000,
    autoplay: true,
    pauseOnHover: true,
  }

  return <div className="py-16 lg:py-24 gr-rad-rose shadow-2xl projects">
    <div className="container mx-auto max-w-screen-md">
      <h4 className="text-gray-200">See Some</h4>
      <h2 className="text-2xl text-gray-100">Recent Projects</h2>
    </div>

    {/* Desktop Slider */}
    <Slider {...settings}>
      <Content1 />
      <Content2 />
      <Content3 />
    </Slider>

    {/* Mobile List */}
    <div className="projects-list container mx-auto max-w-screen-md mt-6">
      <Content1 />
      <Content2 />
      <Content3 />
    </div>

    <div className="container mx-auto max-w-screen-md">
      <Link href="/projects"><a className="hover:underline text-yellow inline-block">
        <h3 className="container mx-auto max-w-screen-md text-yellow font-bold">See More Projects</h3>
      </a></Link>
    </div>

  </div>
}

export default RecentProj
