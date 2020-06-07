import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'   // esse componente substitui <a> e faz com que a mudança de url não recarregue toda
                                        //   a página, fica mais performático; é o cerne do conceito de Single Page Application
                                        //   todo o html/javascript é mantido no naveg, não precisa ficar (re)trafegando na rede   
import logo from '../../assets/logo.svg';
import './styles.css';

const Home = () => {
    return(
        <div id="page-home">
            <div className="content">
            <header>
                <img src={logo} alt="Ecoleta"/>
            </header>

            <main>
                <h1>Seu marketplace de coleta de resíduos.</h1>
                <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

                <Link to="/criar-ponto">
                    <span>
                        <FiLogIn />
                    </span>
                    <strong>Cadastre um ponto de coleta</strong>
                </Link>
            </main>
            </div>
        </div> 
    )
}

export default Home;