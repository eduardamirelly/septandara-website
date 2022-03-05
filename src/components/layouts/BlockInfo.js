import React from 'react'

function BlockInfo(props) {
  return (
    <div data-aos={props.anim} data-aos-duration="2000" className={"py-8 flex lg:flex-row flex-col lg:flex-nowrap flex-wrap items-center " + props.addAlignCustom}>
        {props.children}
    </div>
  )
}

export default BlockInfo