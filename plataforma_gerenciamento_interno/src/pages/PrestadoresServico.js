import { useState, useEffect } from "react";
import {styled} from 'styled-components'
import axios from "axios"

export default function PrestadoresServico() {
  const [prestadoresServicos, setPrestadoresServicos] = useState([]);

  const ContainerPrestadoresServicos = styled.div`
    display: flex;
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
      const prestadoresServicos = await fetch("http://localhost:8080/api/prestadores-servicos")
      const resultado  = await prestadoresServicos.json()
      setPrestadoresServicos(resultado)
    }

    fetchPrestadors()

   }, [])


   const handleExcluirPrestadorServico = async (id) => {
    try {
        alert("Excluindo prestador de serviço com ID: " + id);
        await axios.delete(`http://localhost:8080/api/prestadores-servicos/${id}`);
        alert("Prestador de serviço excluído com sucesso!");
        // Atualizar a lista de prestadores de serviço após a exclusão
        // Você pode chamar a função fetchPrestadors() aqui novamente ou qualquer outro método de atualização.
    } catch (error) {
        alert("Ocorreu um erro ao excluir o prestador de serviço. Por favor, tente novamente.");
        console.error("Erro ao excluir prestador de serviço:", error);
    }
};

  return (
    <Container>
    <LinhaOpcoes>
      <a href="prestador-servico/novo">Adicionar Prestador de Serviço</a>
  
    </LinhaOpcoes>
    <LinhaConteudo>
    <LinhaPrestadoresServicos><h1>Prestadores de Serviços</h1></LinhaPrestadoresServicos>

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
