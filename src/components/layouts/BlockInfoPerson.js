import React from 'react'

function BlockInfoPerson(props) {
  return (
    <div data-aos="fade-up" data-aos-duration="1800" className="py-8 flex lg:flex-row flex-col lg:flex-nowrap flex-wrap justify-center items-center">
        {props.children}
    </div>
  )
}

export default BlockInfoPerson