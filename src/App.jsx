import { useEffect, useState } from 'react';
import './App.css'

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
            <a target='_blank' href='https://github.com/waynecamara061'> <img src="../src/assets/img/github.svg" alt="" /> </a>
            <a target='_blank' href='https://www.linkedin.com/in/wayne-camara-358a2123b/'> <img src="../src/assets/img/in.svg" alt="" /> </a>
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
          <h1>Entrada Oficial no Campo Profissional</h1>
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
              pelas oportunidades de crescimento e aprendizado que obtive durante esse período e estou
              <br />
              ansioso para explorar novos desafios em minha carreira profissional."
            </p>
          </div>
        </div>
        <div className="field-of-competence">
          <h2>Competências desenvolvidas</h2>
        </div>
      </section>
    </>
  )
}

export default App
