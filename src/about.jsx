import React from 'react'
import { Card } from "flowbite-react";

export default function About() {
  return (
    <div className='flex gap-3.5 ml-1 w-[50%]'> 
    <Card
      className="max-w-sm mt-6"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7qEN-reUh4BRASmHQ-fOTXWSzRJ-V1XkPA&s"
      
      >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card
      className="max-w-sm mt-6"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7qEN-reUh4BRASmHQ-fOTXWSzRJ-V1XkPA&s"
      
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    <Card
      className="max-w-sm mt-6"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7qEN-reUh4BRASmHQ-fOTXWSzRJ-V1XkPA&s"
      
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
      </div>

    
  )
}
