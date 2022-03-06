import React from 'react'

function ButtonLink(props) {
  return (
    <>
        <a className="mx-2 my-4 py-4 px-6 flex items-center text-center cursor-pointer hover:bg-gray-100 rounded-md bg-white-100 font-medium text-md text-violet-200" href={props.link}>
            <img className="w-6 mr-3" src={props.image} alt="img" />
            {props.text}
        </a>
    </>
  )
}

export default ButtonLink