import React from 'react'

function InfoWorldorNPC(props) {
  return (
    <div className="text-gray-100 lg:mx-6 my-6 lg:order-none order-2 lg:w-5/12 w-10/12">
        <h4 className={"mb-2 text-[1.6rem] font-semibold " + props.addTextAlign}>{props.name}</h4>
        <p className={"mb-1.5 text-[.95rem] font-regular " + props.addTextAlign}>{props.description}</p>
    </div>
  )
}

export default InfoWorldorNPC