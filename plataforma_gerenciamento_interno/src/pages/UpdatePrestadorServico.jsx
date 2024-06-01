import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export default function UpdatePrestadorServico() {

    const {id} = useParams()
    const [primeiroNome, setPrimeiroNome] = useState()
    const [sobrenome, setSobrenome] = useState()
    const [celular, setCelular] = useState()
    const [descricao, setDescricao] = useState()
    const [ segurancaResidencial, setSegurancaResidencial ] = useState(false)
    const [ eletrica, setEletrica ] = useState(false)
    const [ internetRedes, setInternetRedes ] = useState(false)
    const [ televisao, setTelevisao ] = useState(false)
    const [ telefonia, setTelefonia ] = useState(false)
    const [ limpezaDomestica, setLimpezaDomestica ] = useState(false)
    const [ instalacaoEquipamentos, setInstalacaoEquipamentos ] = useState(false)
    const [ instalacaoCameras, setInstalacaoCamaeras ] = useState(false)

  

    useEffect( () => {
      
         async function fetchPrestadorServico(id){
            const resultado = await axios.get('http://192.168.0.87:8080/api/prestadores-servicos/' + id)
            setPrimeiroNome(resultado.data.primeiroNome)
            setSobrenome(resultado.data.sobrenome)
            setCelular(resultado.data.celular)
            setDescricao(resultado.data.descricao)
            
            console.log(resultado)
         }

         fetchPrestadorServico(id)

    }, [])


const handleAtualizarPrestadorServico = async (event) => {
    event.preventDefault();

    

    const dados = new FormData();
    dados.append('primeiroNome', primeiroNome);
    dados.append('sobrenome', sobrenome);
    dados.append('cpf', '36600608870');
    dados.append('cidade', 'Franca-SP');
    dados.append('descricao', descricao);
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
      const response = await axios.put(
        `http://192.168.0.87:8080/api/prestadores-servicos/${id}`,
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

    return <div>
       
       <form>

      

        <div>
        <label>Primeiro Nome</label>
        <input value={primeiroNome} onChange={(e) => { setPrimeiroNome(e.target.value)  }} />
        </div>
        <div>
        <label>Sobrenome</label>
        <input value={sobrenome} />
        </div>

         <div>
        <label>Celular (Whatsapp)</label>
        <input value={celular} />
        </div>

        <div>
        <label>Descrição</label>
        <textarea value={descricao}></textarea>
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

        <button onClick={ (e) => {  e.preventDefault(e); handleAtualizarPrestadorServico(e)}}>atualizar cadastro</button>
       </form>

       

    </div>
}