import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios";
import styled  from "styled-components";
import { baseUrlBackend } from "../utils/variaveis";
export default function UpdateFotosPrestadorServico() {

  const Container = styled.div`
  text-align: center
`

const Formulario = styled.form`
  magin: auto
`
   

    const {id} = useParams()
    const [foto, setFoto] = useState(null);
    const [ arquivoFoto, setArquivoFoto ] = useState(null)
   

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setFoto(imageUrl);
        setArquivoFoto(file)
      }
    };
  

    useEffect( () => {
      
         async function fetchPrestadorServico(id){
            const resultado = await axios.get(`${baseUrlBackend}/api/prestadores-servicos/fotos/` + id)
           setFoto(resultado.data)
            
         }

         fetchPrestadorServico(id)

    }, [])


const handleAtualizarPrestadorServico = async (event) => {
    event.preventDefault();

    

    const dados = new FormData();
    dados.append('arquivoFoto', arquivoFoto);
   

    try {
      const response = await axios.put(
        `${baseUrlBackend}/api/prestadores-servicos/fotos/${id}`,
        dados
      );
      alert('Foto Atualizada')

     

      console.log('Resposta do servidor:', response.data);
      // Faça algo com a resposta, como exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Trate o erro, como exibir uma mensagem de erro ao usuário
    }
  };

    return <Container>
       
       <Formulario encType='multipart/form-data' >

       <div>
              <div>
               
               <img id="foto"  style={{width: '300px'}} src={foto} />
              </div>
               <div><label>foto</label></div>
               <input className="form-control" type="file" 
               
               onChange={ (e) => handleFileChange(e)}
                
               />

          </div>
      

        <button onClick={ (e) => {  e.preventDefault(e); handleAtualizarPrestadorServico(e)}}>atualizar cadastro</button>
        <Link to="/prestadores-servicos">cancelar</Link>
       </Formulario>

       

    </Container>
}