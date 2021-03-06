import React from 'react'

function InfoPerson(props) {
  return (
    <div className="text-gray-100 lg:mx-6 my-6 lg:order-none order-2">
        <h4 className={"mb-2 text-[1.6rem] font-semibold " + props.addTextAlign}>{props.name}</h4>
        <p className={"mb-4 text-lg font-medium " + props.addTextAlign}>{props.funcao}</p>
        <div className={"flex items-center " + props.addAlignChildren}>
            {props.children}
        </div>
    </div>
  )
}

export default InfoPerson