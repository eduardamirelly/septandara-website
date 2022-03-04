import React from 'react'

function SocialMedia(props) {
  return (
    <>
        <a href={props.link} className="mr-4 flex justify-center items-center rounded-full bg-white-100 hover:bg-gray-100 w-12 h-12">
            <img className="w-4" src={props.image} alt="img" />
        </a>
    </>
  )
}

export default SocialMedia