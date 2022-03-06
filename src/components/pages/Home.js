import React from 'react'
import ButtonLink from '../buttons/ButtonLink'
import Footer from '../Footer'
import BlockInfo from '../layouts/BlockInfo'
import Container from '../layouts/Container'
import ImageCircle from '../layouts/ImageCircle'
import InfoPerson from '../layouts/InfoPerson'
import InfoWorldorNPC from '../layouts/InfoWorldorNPC'
import Section from '../layouts/Section'
import SocialMedia from '../layouts/SocialMedia'
import SlideShow from '../SlideShow'
import Description from '../texts/Description'
import TitleSection from '../texts/TitleSection'
import Topic from '../texts/Topic'
import './Home.css'
import logo_septandara from '../imgs/logo.png'
import logo_playstore from '../imgs/play-store.png'
import logo_forms from '../imgs/google-forms.png'
import logo_windows from '../imgs/windows.png'
import logo_github from '../imgs/github.png'
import logo_instagram from '../imgs/instagram.png'
import logo_linkedin from '../imgs/linkedin.png'
import initial_page from '../imgs/back-initial.png'
import npm_img from '../imgs/person.png'

function Home() {
  return (
    <Container>
        <Section>
          <div className="gradient-intro absolute top-0 w-full h-full"></div>
          <img className="w-80" src={logo_septandara} alt="" />
          <SlideShow />
        </Section>
        <Section>
          <iframe className="custom-iframe xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12 xl:h-[30rem] lg:h-[25rem] md:h-[26rem] h-[20rem]" src="https://www.youtube.com/embed/70d9irlxiB4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="mt-8 w-9/12 flex justify-center">
            <h4 className="text-lg text-gray-100 text-center font-semibold">
              Ajude Dandara a salvar sua mãe e os monarcas em um aventura matemática emocionante.
            </h4>
          </div>
        </Section>
        <Section>
          <div className="flex justify-center flex-col items-center xl:w-7/12 lg:w-8/12 md:w-10/12 w-11/12 px-4 py-8 border-2 border-gray-100 rounded-md">
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="Downloads (Versão 1.0)" />
              <div className="flex justify-center items-center flex-wrap">
                <ButtonLink image={logo_playstore} text="Android" link="https://github.com" />
                <ButtonLink image={logo_windows} text="Windows" link="https://github.com" />
              </div>
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="Achou algum “Bug” no jogo?" />
              <Description text="Repasse para nossa equipe através do forms abaixo:" />
              <div className="flex justify-center items-center">
                <ButtonLink image={logo_forms} text="Formulário" link="https://github.com" />
              </div>
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="O código do jogo está aberto" />
              <Description text="Caso alguém tenha interesse em reutilizá-lo ou observar a estruração de código" />
              <div className="flex justify-center items-center">
                <ButtonLink image={logo_github} text="Código Aberto" link="https://github.com/eduardamirelly/septandara-website" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <TitleSection text="Equipe por trás dos panos" />
          <div className="w-10/12">
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up">
                <ImageCircle image={initial_page} />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" contact="E-mail: mirelly.eduarda404@gmail.com" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image={logo_instagram} link="https://www.instagram.com/404neves/" />
                  <SocialMedia image={logo_linkedin} link="https://www.linkedin.com/in/eduarda-neves/" />
                  <SocialMedia image={logo_github} link="https://github.com/eduardamirelly" />
                </InfoPerson>
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up">
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-end" addTextAlign="text-center lg:text-right">
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                </InfoPerson>
                <ImageCircle image={initial_page} />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up">
                <ImageCircle image={initial_page} />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                </InfoPerson>
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up">
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-end" addTextAlign="text-center lg:text-right">
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                </InfoPerson>
                <ImageCircle image={initial_page} />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up">
                <ImageCircle image={initial_page} />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                  <SocialMedia image={logo_playstore} link="/" />
                </InfoPerson>
              </BlockInfo>
            </div>
          </div>
        </Section>
        <Section>
          <TitleSection text="Conheça um pouco da história do jogo" />
          <div className="w-10/12">
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={initial_page} />
                <InfoWorldorNPC 
                  name="Mundo Matemático" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor. Mauris vitae mauris ut orci laoreet congue in at neque. Suspendisse ipsum augue, sagittis nec congue at, ultrices sed dui. Cras egestas, tellus in feugiat dignissim, dolor ipsum bibendum lorem." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Mundo Matemático" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor. Mauris vitae mauris ut orci laoreet congue in at neque. Suspendisse ipsum augue, sagittis nec congue at, ultrices sed dui. Cras egestas, tellus in feugiat dignissim, dolor ipsum bibendum lorem." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={initial_page} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={initial_page} />
                <InfoWorldorNPC 
                  name="Mundo Matemático" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor. Mauris vitae mauris ut orci laoreet congue in at neque. Suspendisse ipsum augue, sagittis nec congue at, ultrices sed dui. Cras egestas, tellus in feugiat dignissim, dolor ipsum bibendum lorem." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Mundo Matemático" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor. Mauris vitae mauris ut orci laoreet congue in at neque. Suspendisse ipsum augue, sagittis nec congue at, ultrices sed dui. Cras egestas, tellus in feugiat dignissim, dolor ipsum bibendum lorem." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={initial_page} />
              </BlockInfo>  
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-10/12">
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={npm_img} />
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={npm_img} />
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={npm_img} />
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={npm_img} />
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={npm_img} />
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu enim nec massa sodales porttitor id at tortor." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
          </div>
        </Section>
        <Section>
          <div className="gradient-footer absolute bottom-0 w-full h-full"></div>
          <Footer />
        </Section>
    </Container>
  )
}

export default Home