import React from 'react'
import Square from './buttons/Square'
import './SlideShow.css'

function SlideShow() {

  const img_00 = '/imgs/back-initial.png'

  return (
    <div>
        <div className="py-10 flex justify-center">
            <div className="outline sm:outline-[15px] outline-[10px] outline-violet-200 rounded-md xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12 box-shadow-violet">
                <img src={process.env.PUBLIC_URL + img_00} alt="img" />
            </div>
        </div>
        <div className="pt-3.5 flex justify-center items-center">
            <Square color="bg-violet-100" />
            <Square color="bg-gray-100" />
            <Square color="bg-gray-100" />
            <Square color="bg-gray-100" />
            <Square color="bg-gray-100" />
            <Square color="bg-gray-100" />
        </div>
    </div>
  )
}

export default SlideShow