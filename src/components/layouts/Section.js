import React from 'react'

function Section(props) {
  return (
    <section className="w-full pb-16 pt-8 px-5 xl:px-12 flex flex-col items-center relative">
        {props.children}
    </section>
  )
}

export default Section