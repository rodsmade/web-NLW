import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { TileLayer, Marker, Map } from 'react-leaflet'
import api from '../../services/api'

import './styles.css'

import logo from '../../assets/logo.svg'

interface Item{
    id: number;
    titulo: string;
    url_imagem: string;
}

const CreatePoint = () => {

    /* ATENSSAU 
    Sempre que criar um estado para um array ou objeto, é necessário manualmente informar
    o tipo da variável que vai ser armazenada ali dentro. 
    Para isso, crio uma interface (acima) e implemento na função useState o generic com a interface
    */
    const [items, setItems] = useState<Item[]>([]);// um estado, +- global var. Importante ser declarada right after component! 

    useEffect(() => {
        api.get('itens')
            .then(response => {
                setItems(response.data) // response só existe dentro dessa função. "variáveis globais" nesse caso são estados.
            })
    }, [])  /* conceito de Estado do JS: o colchetes recebe o gatilho para atualizar o estado do useEffect.
            Vazio significa que independente de qqr alteração no componente CreatePoint,
            o q tá dentro das chaves vai ser carregado uma única vez, assim q a página for carregada.
            */
    return(
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/">
                    Voltar para home
                    <FiArrowLeft />
                </Link>
            </header>

            <form>
                <h1>Cadastro do <br></br> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input
                            type="text"
                            name="name"
                            id="name"/>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"/>
                        </div>

                        <div className="field">
                            <label htmlFor="nagazap">Nagazap</label>
                            <input
                                type="text"
                                name="nagazap"
                                id="nagazap"/>
                        </div>
                    </div>
                </fieldset>
                  
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={[-23.5468342,-46.6117453]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-23.5468342,-46.6117453]}/>
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf">
                                <option value="0">Selecione uma UF</option>
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Itens de coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                            <li key={item.id} /*Each child in a list should have a unique "key" prop.*/>  
                            <img src={item.url_imagem} alt={item.titulo}/>
                            <span>{item.titulo}</span>
                        </li>
                        ))}
                    </ul>

                </fieldset>

                <button type="submit">
                    Cadastrar ponto de coleta
                </button>
            </form>
        </div>
    )
}

export default CreatePoint;