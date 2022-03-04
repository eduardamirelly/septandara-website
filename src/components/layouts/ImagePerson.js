import React from 'react'

function ImagePerson(props) {
  return (
    <div>
        <img className="rounded-full w-64 h-64" src={props.image} alt="img" />
    </div>
  )
}

export default ImagePerson