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
        <Section>
          <iframe className="xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12 xl:h-[30rem] lg:h-[25rem] md:h-[26rem] h-[20rem]" src="https://www.youtube.com/embed/70d9irlxiB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="my-8 w-9/12 flex justify-center">
            <h4 className="text-lg text-gray-100 text-center font-semibold">
              Ajude Dandara a salvar sua mãe e os monarcas em um aventura matemática emocionante.
            </h4>
          </div>
        </Section>
    </Container>
  )
}

export default Home