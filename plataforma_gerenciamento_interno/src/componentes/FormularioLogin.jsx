import { useState } from 'react'
import styles from './FormularioLogin.module.css';
import { useNavigate } from 'react-router-dom';
import imagemIcone from '../assets/icon.png';
import BotaoTab from './controles/BotaoTab';
import { useDispatch } from 'react-redux';

export default function FormularioLogin() {

     const navigate = useNavigate()
     const [formularioValido, setFormularioValido] = useState(true)
     const [topicoSelecionado, setTopicoSelecionado] = useState('prestadoresServico')
     const [conteudoTopico, setConteudoTopico] = useState(null)
     const [usuario, setUsuario] = useState(null)
     const [senha, setSenha] = useState(null)

     const dispatch = useDispatch()


     const logarHandler = (e) => {
          e.preventDefault()
                   

          if (usuario === 'admin' && senha === '9090') {
               navigate('/analitico')
             dispatch({type: "logar"})

          } else {
               alert('Usuário e/ou Senha incorreta!')
               setFormularioValido(false)
          }
     }
  

     const onSelect = (topicoSelecionado) => {

          setTopicoSelecionado(topicoSelecionado)
          if (topicoSelecionado === 'prestadoresServico') {
               setConteudoTopico({
                    titulo: 'Prestadores Serviços',
                    conteudo: 'Adicione e gerencie os prestadores de serviços.'
               })
          } else if(topicoSelecionado === 'clientes'){
               setConteudoTopico(
                    {
                         titulo: 'Clientes',
                         conteudo: 'Adicione e gerencie os clientes.'
                    }
               )
          } else if(topicoSelecionado === 'ordensServicos'){
               setConteudoTopico(
                    {
                         titulo: 'Ordens de Serviços',
                         conteudo: 'Gere ordens de serviços para os serviços contratados.'
                    }
               )
          }

     }

     return (



          

          <div className={styles.pagina}>
               <div className={styles.containerTitulo}>
              <div className={styles.linhaTituloLogo}> <img className={styles.icone} alt="logo do app serviços pró" src={imagemIcone}></img></div>
              <div className={styles.linhaTitulo}> <h2 className={styles.tituloPagina}>SERVIÇOS PRO gerenciador interno</h2></div>
               </div>
               <div className={styles.container}>
                    <div className={styles.coluna}>

                         <p className={styles.titulo}>GERENCIADOR SERVIÇOS PRO</p>
                          <div className={styles.containerAbas}>
                         <div className={styles.linhaAba}><BotaoTab className={styles.BotaoTab} onSelect={() => onSelect("prestadoresServico")}>Prestadores Serviços</BotaoTab></div> 
                         <div className={styles.linhaAba}>  <BotaoTab onSelect={() => onSelect("clientes")} >Clientes</BotaoTab></div> 
                         <div className={styles.linhaAba}> <BotaoTab onSelect={() => onSelect("ordensServicos")}>Ordens de Serviço</BotaoTab></div> 
                         </div>
                         <div className={styles.containerInformacao}>
                           <h3>{conteudoTopico?.titulo}</h3>
                           <p className={styles.informacaoSoftware}>{conteudoTopico?.conteudo}</p>
                         </div>

                    </div>

                    <div className={styles.coluna}>

                         <form>
                              <div>
                                   <div>
                                        <div><label>Usuário</label></div>
                                        <input style={{ backgroundColor: formularioValido ? '#fff' : '#E3496C' }} value={usuario} onChange={(event) => { setUsuario(event.target.value) }} />

                                   </div>

                                   <div>
                                        <div>  <label>Senha</label></div>

                                        <input className={formularioValido ? "#fff" : styles.campoInvalido} type="password" value={senha} onChange={(event) => { setSenha(event.target.value) }} />
                                   </div>


                                   <button onClick={logarHandler}>logar</button>
                                   <a href="http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=http://localhost:3000/authorized" >Logar</a>
                              </div>
                         </form>
                    </div>

               </div>

          </div>)
}



