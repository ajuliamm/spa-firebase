export default ()=>{
    const container = document.createElement('div')
    container.classList.add('main')


    const form = `
    <h1>LOGIN</h1>
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
        <button class='loginButton' type='button'>LOGIN</button>
    </div>
    <div>
        <button class='googleButton' type='button'>Logar com Google</button>
    </div>
    </form>

    `
   
    container.innerHTML += form

    return container
}
