import React from 'react'

function ImageCircle(props) {
  return (
    <div>
        <img className="rounded-full xl:w-64 xl:h-64 w-52 h-52 xl:order-none order-1" src={props.image} alt="img" />
    </div>
  )
}

export default ImageCircle