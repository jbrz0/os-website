import { useState, useEffect } from 'react'
import Link from 'next/link'
import {useExcerpt} from '../../hooks/useExcerpt'
import posts from '../../markdown/0-index'
import type {Post} from '../../markdown/0-index'
import RightArrow from './RightArrow'

const Labs: React.FC<React.ReactNode> = () => {

  const [sorted, setSorted] = useState<Array<Post>>([])

  useEffect(() => {

    function sortRecent() {
      const recentSort: Array<Post> = posts.sort((a, b) => {
        return a.id - b.id
      })
      return recentSort
    }

    setSorted(sortRecent())
  }, [])

  if (sorted.length < 1) return <p className="text-gray-200">Loading</p>

  else if (sorted.length > 1) return <>
    <div className="px-12 sm:px-16 lg:px-auto py-20 md:py-40 bg-gray-1000 home-labs">
      <div className="container mx-auto mb-8 sm:mb-6 lg:mb-auto lg:px-12 xl:px-24">

        <Link href={`/blog/${sorted[sorted.length - 1].slug}`}><a className="hover:opacity-75">
          <div className="rounded-sm lg:mb-6 xl:mb-8 bg-cover bg-center"
            style={{backgroundImage: `url(${process.env.S3_BUCKET}/${sorted[sorted.length - 1].cover})`}}>
            <div className="w-full h-full gr-tp-purple  py-10 px-6 sm:px-24 sm:pt-20 sm:pb-64 bg-fixed">

              {sorted[sorted.length - 1].tags.slice(0, 2).map((tag, i) => {
                return <p className="text-sm xl:text-base text-teal inline-block mr-2" key={i}>{tag}</p>
              })}
              <h3 className="text-white text-xl font-bold">{useExcerpt(sorted[sorted.length - 1].title, 20)}</h3>
            </div>
          </div>
        </a></Link>

      </div>

      <div className="container mx-auto lg:px-12 xl:px-24 grid grid-cols-3 gap-5 sm:gap-8">

          <div className="col-span-3 sm:col-span-1 rounded-sm">
            <Link href={`/blog/${sorted[sorted.length - 2].slug}`}><a className="hover:opacity-75">
              <img src={`${process.env.S3_BUCKET}/${sorted[sorted.length - 2].cover}`}
                className="xl:mt-auto lg:w-16 lg:h-16 xl:w-20 xl:h-20 float-left
                mr-4 mt-2 mb-2 lg:mb-16 rounded-sm object-cover h-24 sm:h-32 w-1/3 sm:w-full" />

                {sorted[sorted.length - 2].tags.slice(0, 2).map((tag, i) => {
                  return <p className="text-sm xl:text-base text-blue inline-block mr-2" key={i}>{tag}</p>
                })}
              <h6 className="text-gray-100 pl-24 sm:pl-0 lg:pl-5">{useExcerpt(sorted[sorted.length - 2].title, 12)}</h6>
            </a></Link>
          </div>

          <div className="col-span-3 sm:col-span-1 rounded-sm">
            <Link href={`/blog/${sorted[sorted.length - 3].slug}`}><a className="hover:opacity-75">
              <img src={`${process.env.S3_BUCKET}/${sorted[sorted.length - 3].cover}`}
                className="xl:mt-auto lg:w-16 lg:h-16 xl:w-20 xl:h-20 float-left
                mr-4 mt-2 mb-2 lg:mb-16 rounded-sm object-cover h-24 sm:h-32 w-1/3 sm:w-full" />

                {sorted[sorted.length - 3].tags.slice(0, 2).map((tag, i) => {
                  return <p className="text-sm xl:text-base text-pink inline-block mr-2" key={i}>{tag}</p>
                })}
              <h6 className="text-gray-100 pl-24 sm:pl-0 lg:pl-5">{useExcerpt(sorted[sorted.length - 3].title, 12)}</h6>
            </a></Link>
          </div>

          <div className="col-span-3 sm:col-span-1 rounded-sm">
            <Link href={`/blog/${sorted[sorted.length - 4].slug}`}><a className="hover:opacity-75">
              <img src={`${process.env.S3_BUCKET}/${sorted[sorted.length - 4].cover}`}
                className="xl:mt-auto lg:w-16 lg:h-16 xl:w-20 xl:h-20 float-left
                mr-4 mt-2 mb-2 lg:mb-16 rounded-sm object-cover h-24 sm:h-32 w-1/3 sm:w-full" />

                {sorted[sorted.length - 4].tags.slice(0, 2).map((tag, i) => {
                  return <p className="text-sm xl:text-base text-yellow inline-block mr-2" key={i}>{tag}</p>
                })}
              <h6 className="text-gray-100 pl-24 sm:pl-0 lg:pl-5">{useExcerpt(sorted[sorted.length - 4].title, 12)}</h6>
            </a></Link>
          </div>
      </div>
    </div>

    <div className="py-20 md:py-32 lg:py-40 bg-black bg-cover bg-no-repeat bg-contain shadow-2xl" style={{backgroundImage: `url(/icons/waves.svg)`}}>
      <div className="container mx-auto px-12 xl:px-24 grid md:grid-cols-4 lg:grid-cols-3 md:gap-5 lg:gap-6 xl:gap-8 home-labs-below">

      <Link href={`/blog/${sorted[sorted.length - 5].slug}`}><a className="md:col-span-4 lg:col-span-1 mb-4 md:mb-auto max-w-sm md:max-w-none mx-auto">
        <div className="bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          {/* <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">{sorted[sorted.length - 5].date}</h6> */}
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">{useExcerpt(sorted[sorted.length - 5].title, 12)}</h2>
          <p className="text-md text-gray-500 mb-8 md:mb-20 group-hover:text-gray-200">
            {useExcerpt(sorted[sorted.length - 5].description, 12)}
          </p>
          <RightArrow
            arrowHover="group-hover:text-teal"
            txtHover="group-hover:text-gray-100" />
        </div>
      </a></Link>

      <Link href={`/blog/${sorted[sorted.length - 6].slug}`}><a className="md:col-span-2 lg:col-span-1 mb-4 md:mb-auto max-w-sm md:max-w-none mx-auto">
        <div className="bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          {/* <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">{sorted[sorted.length - 6].date}</h6> */}
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">{useExcerpt(sorted[sorted.length - 6].title, 12)}</h2>
          <p className="text-md text-gray-500 mb-8 md:mb-20 group-hover:text-gray-200">
            {useExcerpt(sorted[sorted.length - 6].description, 12)}
          </p>
          <RightArrow
            arrowHover="group-hover:text-teal"
            txtHover="group-hover:text-gray-100" />
        </div>
      </a></Link>

      <Link href={`/blog/${sorted[sorted.length - 7].slug}`}><a className="md:col-span-2 lg:col-span-1 max-w-sm md:max-w-none mx-auto">
        <div className="bg-gray-100 rounded-sm shadow-lg p-8 group cursor-pointer hover:bg-purple">
          {/* <h6 className="text-gray-300 text-sm mb-3 group-hover:text-gray-200">{sorted[sorted.length - 7].date}</h6> */}
          <h2 className="font-bold text-2xl mb-5 group-hover:text-gray-100">{useExcerpt(sorted[sorted.length - 7].title, 12)}</h2>
          <p className="text-md text-gray-500 mb-8 md:mb-20 group-hover:text-gray-200">
            {useExcerpt(sorted[sorted.length - 7].description, 12)}
          </p>
          <RightArrow
            arrowHover="group-hover:text-teal"
            txtHover="group-hover:text-gray-100" />
        </div>
      </a></Link>

      </div>
    </div>
  </>
}

export default Labs
