import { useSelector } from "react-redux";


const  InformacaoLogin = () => {

    const nome = useSelector(state => state.nome)
    return(<div>{nome}</div>)
}

export default InformacaoLogin;