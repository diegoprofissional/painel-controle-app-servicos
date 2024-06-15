import axios from "axios";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"
import { baseUrlBackend } from "../utils/variaveis";
import { useNavigate } from 'react-router-dom';
const Authorized = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const codeVerifier = "er";
    const navigate = useNavigate();

    useEffect( () => {


        const formData = {
            "grant_type": 'authorization_code',  // Verifique se é "grant_type" e não "grant-type"
            "code": code,
            "client_id": "client",
            "redirect_uri": "http://localhost:3000/authorized"  // Deve ser "redirect_uri" no OAuth2
        };
        
        const params = new URLSearchParams(formData);
        
        const headers = {
            'Authorization': 'Basic Y2xpZW50OnNlY3JldA=='  // Deve ser "Basic", não "BASIC"
        };
        
        axios.post(`http://192.168.0.87:8080/oauth2/token`, params, {
            headers: headers
        }).then(response => {
            console.log(response.data);  // Use response.data para acessar os dados da resposta
            localStorage.setItem("token", response.data.access_token)
            navigate('/prestadores-servicos');
        }).catch(e => {
            console.error('Erro ao fazer requisição:', e);
        });
    
    },[])

    return (<h1>{code}</h1>)
}

export default Authorized