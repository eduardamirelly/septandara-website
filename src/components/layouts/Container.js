import React from 'react'

function Container(props) {
  return (
    <div className="flex flex-col justify-center items-center min-w-[250px]">
        {props.children}
    </div>
  )
}

export default Container