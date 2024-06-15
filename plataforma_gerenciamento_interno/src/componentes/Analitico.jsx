import axios from "axios"
import { baseUrlBackend } from "../utils/variaveis"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Analitico = () => {

    const [numeroPrestadoresRegistrados, setNumeroPrestaoresRegistrados] = useState()


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

   useEffect( () => {
       
    async function fetchNumeroPrestadoresServicosRegistrados(){
         const resultado = await axios(`${baseUrlBackend}/api/prestadores-servicos/analitico/numero-cadastros`);
         console.log(resultado.data)
         setNumeroPrestaoresRegistrados(resultado.data)   
    }

    fetchNumeroPrestadoresServicosRegistrados()

 }, [])

    return (
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
    )

}

export default Analitico