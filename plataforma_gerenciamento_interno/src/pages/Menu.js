import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { baseUrlBackend } from '../utils/variaveis'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import styles from './Menu.module.css'

export default function Menu() {

 
   const [localizacao, setLocalizacao] = useState()

    const Container = styled.div`
    display: flex;
    direction: row;
    height: 90vw;
  `

  const LinhaOpcoes = styled.div`
   flex: 1,
   font-size: 40px;
   background-color: #00b6eb  
  `

  const LinhaConteudo = styled.div`
  
   flex: 4
  `

  const location = useLocation();

   //setLocalizacao(location.pathname)  

    return (

      
        <Container>
        <LinhaOpcoes>
        <div className="container">
        <div><NavLink className={({isActive}) => isActive ? styles.ativo : undefined } end={true} to="/prestadores-servicos">Prestadores de Serviço</NavLink></div>
        <div><NavLink className={({isActive}) => isActive ? styles.ativo : undefined } end={true} to="/clientes">Clientes</NavLink></div>


        </div>
      
        </LinhaOpcoes>
        <LinhaConteudo>

          <Outlet>
          </Outlet>
        
        </LinhaConteudo>
        </Container>


       
)
}