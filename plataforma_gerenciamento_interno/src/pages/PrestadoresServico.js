import { useState, useEffect, useRef } from "react";
import {styled} from 'styled-components'
import axios from "axios"
import Modal from "../componentes/Modal";
import { baseUrlBackend } from "../utils/variaveis";
import { Link } from "react-router-dom";

export default function PrestadoresServico() {
  const [prestadoresServicos, setPrestadoresServicos] = useState([]);
  const modalRef = useRef();

  const ContainerPrestadoresServicos = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
    border: 1px solid #ddd;
    padding: 5px;

  `
  const LinhaPrestadoresServicos = styled.div`
   flex: 1
  `

  const Container = styled.div`
    display: flex;
    direction: row
  `

  const LinhaOpcoes = styled.div`
   flex: 1;
   background-color: #00b6eb ; 
   height: 90vw
  `

  const LinhaConteudo = styled.div`
  
   flex: 4
  `

   useEffect( () => {

      
    async function fetchPrestadors(){



      const prestadoresServicos = await fetch(`${baseUrlBackend}/api/prestadores-servicos`, {
        headers: {
         // 'Authorization': `Bearer ${localStorage.getItem('token')}`
          // Substitua `seuTokenDeAutenticacao` pelo seu token real
        }
      })
      const resultado  = await prestadoresServicos.json()
      setPrestadoresServicos(resultado)
    }

    fetchPrestadors()

   }, [])


   const handleExcluirPrestadorServico = async (id) => {
    try {
        
        await axios.delete(`${baseUrlBackend}/api/prestadores-servicos/${id}`);

        modalRef.current.open();
        // Atualizar a lista de prestadores de serviço após a exclusão
        // Você pode chamar a função fetchPrestadors() aqui novamente ou qualquer outro método de atualização.
    } catch (error) {
        modalRef.current.open();
        console.error("Erro ao excluir prestador de serviço:", error);
    }
};

  return (
    <Container>

  
    <LinhaConteudo>
    <LinhaPrestadoresServicos><h1>Prestadores de Serviços</h1></LinhaPrestadoresServicos>
    <LinhaPrestadoresServicos>      <Link to="/prestador-servico/novo">Adicionar Prestador de Serviço</Link>
    </LinhaPrestadoresServicos>

    <ContainerPrestadoresServicos>
    <LinhaPrestadoresServicos>
Foto
</LinhaPrestadoresServicos>

<LinhaPrestadoresServicos>
Nome
</LinhaPrestadoresServicos>

<LinhaPrestadoresServicos>
celular
</LinhaPrestadoresServicos>
<LinhaPrestadoresServicos>

</LinhaPrestadoresServicos>
<LinhaPrestadoresServicos>

</LinhaPrestadoresServicos>
<LinhaPrestadoresServicos>

</LinhaPrestadoresServicos>
</ContainerPrestadoresServicos>

      {
        prestadoresServicos.map((prestadorServico) => {
            return (
              <ContainerPrestadoresServicos>

<LinhaPrestadoresServicos>
             <img style={{width: '100px'}} src={prestadorServico.foto} />
              </LinhaPrestadoresServicos>
              <LinhaPrestadoresServicos>
              {prestadorServico.primeiroNome}
              </LinhaPrestadoresServicos>

              <LinhaPrestadoresServicos>
              {prestadorServico.celular}
              </LinhaPrestadoresServicos>
      
              <LinhaPrestadoresServicos>
              <Modal nome={prestadorServico.primeiroNome} ref={modalRef}></Modal>

              <button onClick={(e) => { e.preventDefault(); handleExcluirPrestadorServico(prestadorServico.id)}}> Excluir</button>
                </LinhaPrestadoresServicos>
      
                <LinhaPrestadoresServicos>
                <a href={`/prestador-servico/fotos/update/${prestadorServico.id}`}>Alterar Fotos</a>
                </LinhaPrestadoresServicos>

                <LinhaPrestadoresServicos>
                <a href={`/prestador-servico/update/${prestadorServico.id}`}>Alterar Cadastro</a>
                </LinhaPrestadoresServicos>
                            </ContainerPrestadoresServicos>

             )
        })
      }

    </LinhaConteudo>
    </Container>
  );
}
