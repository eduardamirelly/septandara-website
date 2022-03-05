import React from 'react'

function Section(props) {
  return (
    <section className="w-full pb-20 pt-8 px-5 flex flex-col items-center relative">
        {props.children}
    </section>
  )
}

export default Section