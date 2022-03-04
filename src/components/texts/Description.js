import React from 'react'

function Description(props) {
  return (
    <>
        <p className="w-9/12 text-md font-medium text-gray-100 text-center">
            {props.text}
        </p>
    </>
  )
}

export default Description