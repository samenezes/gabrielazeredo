import Container from '../../components/cabeçalho'
import Footer from './components/conteudo'
import Header from './components/rodape'
import { Link } from 'react-router-dom'
import Container from '../../components/cabeçalho'
import styles from './Home.module.css'

function Home() {
    return (
       <>
          <Header />
          <Container>
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
             <br /> Gabriel Azeredo fazendo prova de frame e indo muito mal :/
               <br />
              
          </p>
          
      </div>
      <figure>
          <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
      </figure>
  </section>
</Container>
          <Footer />
        </> 
    )
}

export default Home
