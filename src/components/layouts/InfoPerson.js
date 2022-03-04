import React from 'react'

function InfoPerson(props) {
  return (
    <div className="text-gray-100 mx-6">
        <h4 className={"mb-2 text-[1.8rem] font-semibold " + props.addTextAlign}>{props.name}</h4>
        <p className={"mb-1.5 text-lg font-medium " + props.addTextAlign}>{props.funcao}</p>
        <p className={"mb-4 text-sm font-regular " + props.addTextAlign}>{props.contact}</p>
        <div className={"flex items-center " + props.addAlignChildren}>
            {props.children}
        </div>
    </div>
  )
}

export default InfoPerson