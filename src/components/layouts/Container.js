import React from 'react'

function Container(props) {
  return (
    <div className="sm:px-8 px-3 flex flex-col justify-center items-center min-w-[250px]">
        {props.children}
    </div>
  )
}

export default Container