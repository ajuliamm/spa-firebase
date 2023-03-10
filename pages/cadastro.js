//import {createUser} from '../servicesFB/auth.js'
export default ()=>{
    const container = document.createElement('div')
    container.classList.add('main')


    const form = `
    <h1>CADASTRE-SE</h1>
    <form>
    <div>
        <label for='email'>Email</label>
        <input id='email' type='email' placeholder='seuemail@email.com'>
    </div>
    <div>
        <label for='senha'>senha</label>
        <input id='senha' type='password' placeholder='Sua senha aqui'>
    </div>
    <div>
        <button class='cadastroButton' type='button'>CADASTRAR</button>
    </div>
   
    </form>

    `
   
    container.innerHTML += form
    const btnCadastro = container.querySelector(".cadastroButton")
    btnCadastro.addEventListener('click', takeUserData)
    const takeUserData=() =>{
        console.log('botaão funciona')
        const email= container.querySelector('#email')
        const senha = container.querySelector('#senha')
        createUser(email.value, senha.value)
    }

    return container
}