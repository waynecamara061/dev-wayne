import { useEffect } from 'react';
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Tooltip } from 'react-tooltip'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function App() {


  useEffect(() => {
    function typeWriter(elemento) {
      const textArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 90 * i);
      })
    }

    return () => {
      const titulo = document.querySelector('h1')
      typeWriter(titulo);
    }
  }, [])


  return (
    <>
      <section className='first-senction-container'>
        <nav>
          <div className="nav-content">
            <a target='_blank' href='https://github.com/waynecamara061'>  <img src="../src/assets/img/github.svg" alt="" /></a>
            <a target='_blank' href='https://www.linkedin.com/in/wayne-camara-358a2123b/'> <img src="../src/assets/img/in.svg" alt="" /></a>
            <a target='_blank' href='https://www.instagram.com/_devwayne/'> <img src="../src/assets/img/ig.svg" alt="" /></a>
          </div>
        </nav>
      </section>
      <section className='second-section-container'>
        <div className='second-section-content'>
          <p>Saudações, eu sou Wayne  &#129311;&#127995;</p>
          <h1>Desenvolvedor Front-end Jr.</h1>
        </div>
      </section>
      <div className='btn-view-more-container'>
        <button className='btn-view-more'>
          <a href="#third-section">
          </a>
        </button>

      </div>
      <section id='third-section' className='third-section-container'>
        <div className="section-image">
          <img src="../src/assets/img/image-profile.jpg" alt="Foto de perfil" />
        </div>
        <div className="profile-content">
          <h1>Ei, quem é o Wayne ?</h1>
          <p>
            "Eu me apresento como Wayne, um brasiliense com toques sulistas e cearenses,
            <br />
            uma brincadeira com as diversas regiões que influenciaram minha trajetória. Desde cedo,
            <br />
            cultivo uma paixão pelos esportes, abraçando atividades como skate, futsal, vôlei, corrida,
            <br />
            futebol e bodysurf. Minha jornada foi marcada por uma dualidade: enquanto me divertia
            <br />
            com videogames e a tela do celular, também nutria o desejo de seguir um caminho no
            <br />
            mundo esportivo, como nutricionista ou educador físico.
            <br />
            Porém, conforme o tempo passou, uma afinidade crescente com a tecnologia ganhou
            <br />
            espaço em minha vida. Hoje, aqui estou, moldando meu portfólio como desenvolvedor. Esta
            <br />
            trajetória única e eclética me proporcionou uma visão diversificada e aberta para desafios
            <br />
            inovadores, uma perspectiva que estou ansioso para incorporar em minha jornada no
            <br />
            mundo do desenvolvimento."
          </p>
          <div className="btn-third-container">
            <button className='btn-third-section'>
              <a href="#fourth-section">
                Carreira profissional  💻
              </a>
            </button>
          </div>
        </div>
      </section>
      <section id='fourth-section' className='fourth-section-container'>
        <div className="fourth-section-content">
          <h1>Histórico Profissional</h1>
          <div className="fourth-text-container">
            <p>
              "Iniciei minha jornada profissional aos 18 anos na empresa BIUD, uma organização focada na
              <br />
              obtenção de resultados por meio da análise de dados. Comecei realizando tarefas básicas
              <br />
              envolvendo HTML, CSS e JavaScript. Em pouco tempo, tive a oportunidade de me envolver
              <br />
              com tecnologias mais avançadas como React e Node, contribuindo para a criação de um
              <br />
              FAQ personalizado para a empresa."
              <br />
              <br />
              "À medida que o tempo passou, minha evolução foi notável, assumindo responsabilidades de
              <br />
              correção de bugs, implementação de novas funcionalidades e criação de telas para a
              <br />
              plataforma. Minhas habilidades foram requisitadas por outras equipes dentro da BIUD, onde
              <br />
              participei do mapeamento de clientes através de logs e da migração da plataforma Slack
              <br />
              para uma solução open-source, aplicando meu conhecimento em Docker.NET e, é claro, no
              <br />
              desenvolvimento contínuo do FAQ personalizado."
              <br />
              <br />
              "Minha trajetória foi marcada por um progresso técnico e pessoal constante. No entanto,
              <br />
              minha jornada na BIUD chegou ao fim após um ano e quatro meses de dedicação, devido a
              <br />
              um processo de lay-off que resultou no meu desligamento em julho deste ano. Estou grato
              <br />
              pelas oportunidades de crescimento e aprendizado que obtive durante esse período.
            </p>
          </div>
        </div>
        <div className="field-of-competence">
          <h2>Grau de habilidades</h2>

          <div className="competence-lenguages">
            <h3>HTML5 e CSS3</h3>
            <section className='field-xp-container'>
              <div className="field-xp-avancado"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>JavaScript</h3>
            <section className='field-xp-container'>
              <div className="field-xp-avancado"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>React e TypeScript</h3>
            <section className='field-xp-container'>
              <div className="field-xp-intermed"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>Bootstrap e TailWind</h3>
            <section className='field-xp-container'>
              <div className="field-xp-intermed"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>NodeJs e Express</h3>
            <section className='field-xp-container'>
              <div className="field-xp-intermed"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>PHP 7</h3>
            <section className='field-xp-container'>
              <div className="field-xp-basico"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>Versionamento de codigo</h3>
            <section className='field-xp-container'>
              <div className="field-xp-intermed"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>Boas praticas em repositorio</h3>
            <section className='field-xp-container'>
              <div className="field-xp-avancado"></div>
            </section>
          </div>

          <div className="competence-lenguages">
            <h3>Metodologias ageis</h3>
            <section className='field-xp-container'>
              <div className="field-xp-intermed"></div>
            </section>
          </div>

          <div className="btn-fourth-container">
            <button className='btn-fourth-section'>
              <a href="#fifth-section-container">
                Certificados e projetos &#x1F393;
              </a>
            </button>
          </div>
        </div>
      </section>
      <section id="fifth-section-container" className='fifth-section-container'>
        <div className="fifth-section-content">
          <div className="carrossel-certificados">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              // loop={true}
              slidesPerView={1}
              pagination={{ clickable: true }}
              // navigation
              autoplay={{
                delay: 3000,
                // TODO: Ao colocar o mouse em cima o slide fica parado, porem pode confundir o usuario
                // pauseOnMouseEnter: true,
              }}
            >
              <SwiperSlide><img src="../src/assets/img/frontend-page.jpg" /> </SwiperSlide>
              <SwiperSlide><img src="../src/assets/img/lgcdeprogramacao.jpg" /> </SwiperSlide>
              <SwiperSlide><img src="../src/assets/img/jsavanc.jpg" /> </SwiperSlide>
              <SwiperSlide><img src="../src/assets/img/apinode.jpg" /> </SwiperSlide>
              <SwiperSlide><img src="../src/assets/img/divinocafe.jpg" /> </SwiperSlide>
              <SwiperSlide><img src="../src/assets/img/4events.jpg" /> </SwiperSlide>
              <SwiperSlide><img src="../src/assets/img/dockernet.jpg" /> </SwiperSlide>
              <SwiperSlide><img src="../src/assets/img/react.jpg" /> </SwiperSlide>
            </Swiper>
          </div>
          <div className="carrossel-projetos">
            <div className="tootip-more-info">
              <h2>Casos de Estudo</h2>
              <a className='more-info-projects'>
                <img src="../src/assets/img/moreinfo.svg" />
              </a>
              <Tooltip anchorSelect='.more-info-projects'>
                "Ao clicar em uma das opções abaixo, você terá acesso a detalhes relevantes conforme sua escolha."
              </Tooltip>
            </div>
            <div className="fifth-text-content">
              <h1>
                aloooo
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App;
