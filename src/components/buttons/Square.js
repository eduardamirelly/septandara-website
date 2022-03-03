import React from 'react'

function Square(props) {

  const style_square = "mx-2 md:w-6 md:h-6 w-4 h-4 cursor-pointer " + props.color;

  return (
    <div className={style_square}></div>
  )
}

export default Square