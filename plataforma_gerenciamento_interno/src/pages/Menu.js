import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


export default function Menu() {

  const Card = styled.section`
   background-color: #00b6eb;
   color: #fff;
   margin: 20px;
   padding: 15px;
   border-radius: 4px;
  `

  const InformacaoCard = styled.div`
    font-size: 40px;
    text-align: center;
    font-weight: bold;

  `

  const TituloCard = styled.div`
    font-size: 20px;
    text-align: center;


  `

  const ContainerInformacao = styled.div`
     display: flex;
     flex-direction: row;
  `

  const LinhaContainerInformacao = styled.div`
     flex: 1;
  `

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

    const [numeroPrestadoresRegistrados, setNumeroPrestaoresRegistrados] = useState()


    useEffect( () => {
       
       async function fetchNumeroPrestadoresServicosRegistrados(){
            const resultado = await axios('http://localhost:8080/api/prestadores-servicos/analitico/numero-cadastros');
            console.log(resultado.data)
            setNumeroPrestaoresRegistrados(resultado.data)   
       }

       fetchNumeroPrestadoresServicosRegistrados()

    }, [])

    return (

      
        <Container>
        <LinhaOpcoes>
        <div className="container">
        <div><a className="btn btn-primary" href="prestades-servico">Prestadores de Serviço</a></div>
        <div><a href="clientes">Clientes</a></div>


        </div>
      
        </LinhaOpcoes>
        <LinhaConteudo>
           <ContainerInformacao>
            <LinhaContainerInformacao>
              <Card>
                <InformacaoCard> {numeroPrestadoresRegistrados} </InformacaoCard>
                <TituloCard>Prestadores Registrados</TituloCard>
              </Card>
            </LinhaContainerInformacao>
            <LinhaContainerInformacao>2</LinhaContainerInformacao>

            <LinhaContainerInformacao>3</LinhaContainerInformacao>

            <LinhaContainerInformacao>4</LinhaContainerInformacao>

           </ContainerInformacao>
        </LinhaConteudo>
        </Container>


       
)
}