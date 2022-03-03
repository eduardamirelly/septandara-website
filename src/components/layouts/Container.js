import React from 'react'

function Container(props) {
  return (
    <div className="sm:px-8 px-5 flex flex-col justify-center items-center min-w-[300px]">
        {props.children}
    </div>
  )
}

export default Container