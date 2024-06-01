import { useState } from 'react'
import imagem from './avatar.webp';
import axios from 'axios';
import "./FormularioPrestadorServico.css"
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'

const InputPadrao = styled.input`
border-radius: 10px;
padding: 10px;
border: 1px solid #ccc;
`

const styles = {
     width: '100px',
     height: '100px'
   };

export default function FormularioPrestadorServico() {


     const handleFileChange = (event) => {
       const file = event.target.files[0];
       if (file) {
         const imageUrl = URL.createObjectURL(file);
         alert(imageUrl)
         setFoto(imageUrl);
         setArquivoFoto(file)
       }
     };

     const handleValidacaoPrimeiroNome  = (e) => {
           if(e.target.value.length < 2){
               setPrimeiroNomeValido(false)
           }else{
               setPrimeiroNomeValido(true)
           }
     }


     const navigate = useNavigate();
  

     const [primeiroNomeValido, setPrimeiroNomeValido] = useState(true)
     const [foto, setFoto] = useState(null);
     const [ arquivoFoto, setArquivoFoto ] = useState(null)
     const [  primeiroNome, setPrimeiroNome ] = useState(null)
     const [ sobrenome, setSobrenome ] = useState(null)
     const [ celular, setCelular  ]= useState(null)
     const [ descricao, setDescricao ] = useState(null)
     const [ servicoEspecialidade, setServicoEspecialiade ] = useState(false)
     const [ segurancaResidencial, setSegurancaResidencial ] = useState(false)
     const [ eletrica, setEletrica ] = useState(false)
     const [ internetRedes, setInternetRedes ] = useState(false)
     const [ televisao, setTelevisao ] = useState(false)
     const [ telefonia, setTelefonia ] = useState(false)
     const [ limpezaDomestica, setLimpezaDomestica ] = useState(false)
     const [ instalacaoEquipamentos, setInstalacaoEquipamentos ] = useState(false)
     const [ instalacaoCameras, setInstalacaoCamaeras ] = useState(false)


     const handleSubmit = async (event) => {
          event.preventDefault();
      
          

          const dados = new FormData();
          dados.append('primeiroNome', primeiroNome);
          dados.append('sobrenome', sobrenome);
          dados.append('cpf', '36600608870');
          dados.append('cidade', 'Franca-SP');
          dados.append('arquivoFoto', arquivoFoto);
          dados.append('descricao', descricao);
          dados.append('servicoEspecializado', servicoEspecialidade);
          dados.append('celular', celular);
          dados.append('segurancaResidencial', segurancaResidencial);
          dados.append('eletrica', eletrica);
          dados.append('internetRedes', internetRedes);
  dados.append('televisao', televisao);
  dados.append('telefonia', telefonia);
  dados.append('limpezaDomestica', limpezaDomestica);
  dados.append('instalacaoEquipamentos', instalacaoEquipamentos);
  dados.append('instalacaoCameras', instalacaoCameras);
      
          try {
            const response = await axios.post(
              'http://192.168.0.87:8080/api/prestadores-servicos',
              dados
            );
            alert('cadastrado com sucesso')

            setCelular('')
            setPrimeiroNome('')
            setSobrenome('')
            setDescricao('')

            console.log('Resposta do servidor:', response.data);
            // Faça algo com a resposta, como exibir uma mensagem de sucesso
          } catch (error) {
            console.error('Erro ao enviar dados:', error);
            // Trate o erro, como exibir uma mensagem de erro ao usuário
          }
        };


     return ( <form encType='multipart/form-data' > <div className="centro">

<div>
              <div>
               
               <img id="foto"  style={{width: '300px'}} src={foto} />
              </div>
               <div><label>foto</label></div>
               <input className="form-control" type="file" 
               
               onChange={ (e) => handleFileChange(e)}
                
               />

          </div>

          <div>
               <div><label style={{backgroundColor: 'pink', 'text-align': 'left'}}>Primeiro Nome</label></div>
               <InputPadrao  onBlur={handleValidacaoPrimeiroNome}  value={primeiroNome} onChange={ (event) => { setPrimeiroNome(event.target.value) }} ></InputPadrao>
               <div>{primeiroNomeValido ? "" : "valor inválido"}</div>
          </div>

          <div>
               <div><label>Sobrenome</label></div>
               <input value={sobrenome} onChange={ (event) => { setSobrenome(event.target.value) }}  />

          </div>

          <div>
               <div><label>celular</label></div>
               <input value={celular} onChange={ (event) => { setCelular(event.target.value) }}   />

          </div>

          <div>
             <div> <label>Cidade</label></div>
              <select >
               <option>Franca-SP</option>
               <option>São Joaquim da Barra-SP</option>
               <option>Orlândia-SP</option>


              </select>

          </div>

          <div>
               <div><label>Apresentação</label></div>
               <textarea style={{width: '60%'}} value={descricao} onChange={ (event) => { setDescricao(event.target.value) }} />

          </div>
        
           <div><label>Quais serviços você presta?</label></div>
           <div>


               <label>Segurança Residencial</label>
               <input type="checkbox" checked={segurancaResidencial} onChange={ (event) => { setSegurancaResidencial(event.target.checked) }}  />

               <label>Elétrica</label>
               <input type="checkbox" checked={eletrica} onChange={ (event) => { setEletrica(event.target.checked) }} />


               <label>Internet e Redes</label>
               <input type="checkbox" checked={internetRedes} onChange={ (event) => { setInternetRedes(event.target.checked) }} />

               <label>Televisão</label>
               <input type="checkbox" checked={televisao} onChange={ (event) => { setTelevisao(event.target.checked) }} />

               <label>Telefonia</label>
               <input type="checkbox" checked={telefonia} onChange={ (event) => { setTelefonia(event.target.checked) }} />

               <label>Limpeza Doméstica</label>
               <input type="checkbox" checked={limpezaDomestica} onChange={ (event) => { setLimpezaDomestica(event.target.checked) }} />


               <label>Instalação de Equipamentos</label>
               <input type="checkbox" checked={instalacaoEquipamentos} onChange={ (event) => { setInstalacaoEquipamentos(event.target.checked) }} />

               <label>Instalação Câmeras</label>
               <input type="checkbox" checked={instalacaoCameras} onChange={ (event) => { setInstalacaoCamaeras(event.target.checked) }} />

           
           </div>


           <button type="button" onClick={handleSubmit}>
          Cadastrar
        </button>        
     </div>
     
     
     </form>)



}