import React from 'react'

function BlockInfoPerson(props) {
  return (
    <div data-aos="fade-up" data-aos-duration="1500" className="py-8 flex items-center">
        {props.children}
    </div>
  )
}

export default BlockInfoPerson