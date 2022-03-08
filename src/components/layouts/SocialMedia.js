import React from 'react'


function SocialMedia(props) {
  return (
    <>
        <a href={props.link} className="mr-4 flex justify-center items-center rounded-full text-violet-200 text-xl bg-white-100 hover:bg-gray-100 w-12 h-12">
            {props.icon}
        </a>
    </>
  )
}

export default SocialMedia