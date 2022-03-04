import React from 'react'
import ButtonLink from '../buttons/ButtonLink'
import BlockInfoPerson from '../layouts/BlockInfoPerson'
import Container from '../layouts/Container'
import ImagePerson from '../layouts/ImagePerson'
import InfoPerson from '../layouts/InfoPerson'
import Section from '../layouts/Section'
import SocialMedia from '../layouts/SocialMedia'
import SlideShow from '../SlideShow'
import Description from '../texts/Description'
import TitleSection from '../texts/TitleSection'
import Topic from '../texts/Topic'
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
        <Section>
          <div className="flex justify-center flex-col items-center xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12 px-4 py-8 border-2 border-gray-100 rounded-md">
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="Downloads (Versão 1.0)" />
              <div className="flex justify-center items-center">
                <ButtonLink image="/imgs/play-store.png" text="Android" link="https://github.com" />
                <ButtonLink image="/imgs/play-store.png" text="Windows" link="https://github.com" />
              </div>
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="Achou algum “Bug” no jogo?" />
              <Description text="Repasse para nossa equipe através do forms abaixo:" />
              <div className="flex justify-center items-center">
                <ButtonLink image="/imgs/play-store.png" text="Formulário" link="https://github.com" />
              </div>
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="O código do jogo está aberto" />
              <Description text="Caso alguém tenha interesse em reutilizá-lo ou observar a estruração de código" />
              <div className="flex justify-center items-center">
                <ButtonLink image="/imgs/play-store.png" text="Código Aberto" link="https://github.com" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <TitleSection text="Equipe por trás dos panos" />
          <div className="w-10/12">
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfoPerson>
                <ImagePerson image="/imgs/back-initial.png" />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" contact="E-mail: mirelly.eduarda404@gmail.com" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                </InfoPerson>
              </BlockInfoPerson>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfoPerson>
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" contact="E-mail: mirelly.eduarda404@gmail.com" addAlignChildren="justify-center lg:justify-end" addTextAlign="text-center lg:text-right">
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                </InfoPerson>
                <ImagePerson image="/imgs/back-initial.png" />
              </BlockInfoPerson>
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfoPerson>
                <ImagePerson image="/imgs/back-initial.png" />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" contact="E-mail: mirelly.eduarda404@gmail.com" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                </InfoPerson>
              </BlockInfoPerson>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfoPerson>
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" contact="E-mail: mirelly.eduarda404@gmail.com" addAlignChildren="justify-center lg:justify-end" addTextAlign="text-center lg:text-right">
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                </InfoPerson>
                <ImagePerson image="/imgs/back-initial.png" />
              </BlockInfoPerson>
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfoPerson>
                <ImagePerson image="/imgs/back-initial.png" />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" contact="E-mail: mirelly.eduarda404@gmail.com" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                  <SocialMedia image="/imgs/play-store.png" link="/" />
                </InfoPerson>
              </BlockInfoPerson>
            </div>
          </div>
        </Section>
    </Container>
  )
}

export default Home