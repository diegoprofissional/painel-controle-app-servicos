import { createStore } from 'redux'

const loginReducer = (state = {
    nome: "Deslogado"
}, action) => {

    if(action.type === "logar"){
        return {
            nome: "admin"
        }
    }

    return state

}

const store = createStore(loginReducer)

export default store