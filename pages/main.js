export default () => {
    const container = document.createElement('div')
    container.classList.add('main')
    

    const template = `
    <div class='main'>
        <h1>Projeto SPA e Firebase</h1>
        <nav>
            <ul>
                <li><a href="#login">Login</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#cadastro">Cadastrar</a></li>
            </ul>
        </nav>
    </div>
    `
    
    
    container.innerHTML+=template
    return container
}