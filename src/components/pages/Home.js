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

function Home() {

  const logo_playstore = '/imgs/play-store.png'
  const logo_forms = '/imgs/google-forms.png'
  const logo_github = '/imgs/github.png'
  const logo_windows = '/imgs/windows.png'
  const logo_instagram = '/imgs/instagram.png'
  const logo_linkedin = '/imgs/linkedin.png'
  const initial_page = '/imgs/back-initial.png'
  const npm_img = '/imgs/person.png'

  return (
    <Container>
        <Section>
          <div className="gradient-intro absolute top-0 w-full h-full"></div>
          <img className="w-80" src={process.env.PUBLIC_URL + '/imgs/logo.png'} alt="" />
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
                <ButtonLink image={process.env.PUBLIC_URL + logo_playstore} text="Android" link="https://github.com" />
                <ButtonLink image={process.env.PUBLIC_URL + logo_windows} text="Windows" link="https://github.com" />
              </div>
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="Achou algum “Bug” no jogo?" />
              <Description text="Repasse para nossa equipe através do forms abaixo:" />
              <div className="flex justify-center items-center">
                <ButtonLink image={process.env.PUBLIC_URL + logo_forms} text="Formulário" link="https://github.com" />
              </div>
            </div>
            <div className="my-4 flex flex-col justify-center items-center">
              <Topic text="O código do jogo está aberto" />
              <Description text="Caso alguém tenha interesse em reutilizá-lo ou observar a estruração de código" />
              <div className="flex justify-center items-center">
                <ButtonLink image={process.env.PUBLIC_URL + logo_github} text="Código Aberto" link="https://github.com/eduardamirelly/septandara-website" />
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <TitleSection text="Equipe por trás dos panos" />
          <div className="w-10/12">
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up">
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" contact="E-mail: mirelly.eduarda404@gmail.com" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image={process.env.PUBLIC_URL + logo_instagram} link="https://www.instagram.com/404neves/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_linkedin} link="https://www.linkedin.com/in/eduarda-neves/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_github} link="https://github.com/eduardamirelly" />
                </InfoPerson>
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up">
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-end" addTextAlign="text-center lg:text-right">
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                </InfoPerson>
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up">
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                </InfoPerson>
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up">
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-end" addTextAlign="text-center lg:text-right">
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                </InfoPerson>
                <ImageCircle image={initial_page} />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up">
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
                <InfoPerson name="Eduarda Mirelly" funcao="Desenvolvedora, Roterista e Gerenciamento de equipe" addAlignChildren="justify-center lg:justify-start" addTextAlign="text-center lg:text-left">
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
                  <SocialMedia image={process.env.PUBLIC_URL + logo_playstore} link="/" />
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
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
                <InfoWorldorNPC 
                  name="Mundo Matemático" 
                  description="O reino central onde todos os monarcas se reúnem para conferências a fim de conservar a harmonia entre todos os reinos. Nessa esfera vivem os conteúdos que abstiveram-se de escolher desmembrar-se do reino consolidado, no período em que o mundo matemático detinha apenas de um domínio." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Mundo da Álgebra" 
                  description="Reino do mundo matemático composto de números, letras e sinais que generalizam as diversas operações aritméticas, possibilitando o desenvolvimento de equações e análises equivalentes a outras resoluções." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
                <InfoWorldorNPC 
                  name="Mundo da Geometria" 
                  description="Dominado pelas formas geométricas englobando desde o comprimento, área e volume. Nesse reino vivem todos os membros da geometria plana, analítica e espacial." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Mundo dos Números" 
                  description="Reino formado pelo o que designamos de ordinais, os números de ordem, e os cardinais, os números de quantidade. Os indivíduos desse reino representam medidas, ordem ou quantidade."
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={process.env.PUBLIC_URL + initial_page} />
              </BlockInfo>  
            </div>
          </div>
        </Section>
        <Section>
          <div className="w-10/12">
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
                <InfoWorldorNPC 
                  name="Dandara" 
                  description="Protagonista do game, filha de Helena e neta de Tereza. Dandara é uma menina indagadora que adora solucionar questões e mistérios. Assim como sua mãe, é apaixonada pelo mundo da matemática." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Helena" 
                  description="Helena, mãe de Dandara e conselheira real do reino matemático. Desde de sua infância detém facilidade e interesse pelo universo dos números." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
                <InfoWorldorNPC 
                  name="Tereza" 
                  description="Tereza, avó de Dandara e mãe da conselheira real, Helena. Desfruta de uma vida pacata em sua fazenda, localizada a 3km do castelo real, com sua neta e filha." 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Primions" 
                  description="Filho do rei Numérios, monarca do reino matemático. Primions é um príncipe introvertido, ganancioso e teimoso. De maneira oposta a muitos cidadãos do mundo da matemática, ele não possui uma afinidade com as temáticas  da matemática, o que ocasiona uma relação conturbada com seu pai, já que ele é o progênito do trono do seu reino. " 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
                <InfoWorldorNPC 
                  name="Numérios" 
                  description="Monarca do reino da álgebra. Adéquare é um rei benévolo, agradável e astuto. Seu emblema é preservar o justo julgamento em todas as circunstâncias. " 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Ordium" 
                  description="Monarca do reino Números, és um rainha agradável, prudente e dona de um raciocínio ímpar. Seu lema é manter a ordem." 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
                <InfoWorldorNPC 
                  name="Metron" 
                  description="Monarca do reino da geometria. Metron é um rei rígido, reservado, estável e possui uma alta cognição" 
                  addTextAlign="text-center lg:text-left"
                />
              </BlockInfo>
            </div>
            <div className="w-full flex lg:justify-end justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-end">
                <InfoWorldorNPC 
                  name="Adéquare" 
                  description="Monarca do reino da álgebra. Adéquare é um rei benévolo, agradável e astuto. Seu emblema é preservar o justo julgamento em todas as circunstâncias" 
                  addTextAlign="text-center lg:text-right"
                />
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
              </BlockInfo>  
            </div>
            <div className="w-full flex lg:justify-start justify-center">
              <BlockInfo anim="fade-up" addAlignCustom="justify-start">
                <ImageCircle image={process.env.PUBLIC_URL + npm_img} />
                <InfoWorldorNPC 
                  name="Mercador" 
                  description="Proprietário de um mercado que possui uma enorme diversidade de especiarias, como porções de vida e porções de poderes. Ele é um sábio vendedor que encontra-se nas estradas dos reinos oferecendo seus produtos em troca de moedas." 
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