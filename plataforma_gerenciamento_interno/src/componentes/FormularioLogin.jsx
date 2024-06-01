import { useState } from 'react'
import  styles from './FormularioLogin.module.css';
import { useNavigate } from 'react-router-dom';

export default function FormularioLogin() {

     const navigate = useNavigate()
     const [formularioValido, setFormularioValido] = useState(true)

     const [usuario, setUsuario] = useState(null)
     const [senha, setSenha] = useState(null)

     return (
          <div className={styles.pagina}>
               <img className={styles.icone} alt="logo do app serviços pró" src="/icon.png"></img>
               <h2 className={styles.tituloPagina}>SERVIÇOS PRO gerenciador interno</h2>
               <div className={styles.container}>
                    <div className={styles.coluna}>

                         <p className={ styles.titulo}>GERENCIADOR SERVIÇOS PRO</p>
                         <p className={styles.informacaoSoftware}>Uma plataforma versátil para o gerenciamento dos prestadores de serviços e clientes. Uma solução para geração de ordens de serviço. </p>
                    </div>

                    <div className={styles.coluna}>

     <form>
     <div>
          <div>
         <div><label>Usuário</label></div>
          <input style={{backgroundColor: formularioValido ? '#fff' : '#E3496C'}} value={  usuario } onChange={ (event) => { setUsuario(event.target.value) } } />
      
          </div>
       
           <div>
      <div>  <label>Senha</label></div>
              
          <input className={ formularioValido ? "#fff" : styles.campoInvalido } type="password"  value={  senha } onChange={ (event) => { setSenha(event.target.value) } } />
           </div>


           <button onClick={ (e) => {
 e.preventDefault()
         

if(usuario === 'admin' && senha === '9090'){
 navigate('/menu')

}else{
    alert('Usuário e/ou Senha incorreta!')
    setFormularioValido(false)
}

   }}>logar</button>

      </div>
      </form>
     </div>

      </div>

      </div>)
}



