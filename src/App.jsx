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
          <a href="#third-section"></a>
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
      {/* <section id='fourth-section' className='fourth-section-container'>
        <div className="fourth-section-content">
          <h1>FOI AQUI QUE TUDO COMEÇOU </h1>
        </div>
      </section> */}
    </>
  )
}

export default App
