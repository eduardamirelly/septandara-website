import React from 'react'
import Container from '../layouts/Container'
import Section from '../layouts/Section'
import SlideShow from '../SlideShow'
import './Home.css'

function Home() {
  return (
    <Container>
        <Section>
          <div className="gradient-intro absolute top-0 w-full h-full"></div>
          <img className="w-80" src="/imgs/logo.png" alt="" />
          <SlideShow />
        </Section>
    </Container>
  )
}

export default Home