import React from 'react'

function Container(props) {
  return (
    <div className="px-8 flex justify-center">
        {props.children}
    </div>
  )
}

export default Container