import React from 'react'
import './TitleSection.css'

function TitleSection(props) {
  return (
    <>
        <h3 className="pb-4 glowing-text text-[2.5rem] font-semibold text-white-100 text-center border-b-4 border-dashed">
            {props.text}
        </h3>
    </>
  )
}

export default TitleSection