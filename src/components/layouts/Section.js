import React from 'react'

function Section(props) {
  return (
    <section className="py-8 flex flex-col items-center">
        {props.children}
    </section>
  )
}

export default Section