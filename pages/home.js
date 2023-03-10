export default () =>{
    const container = document.createElement('div')
    container.classList.add('main')
    const h1 = document.createElement('h1')
    const button = document.createElement('button')
    button.append('SAIR')
    h1.append('HOME')
    container.append(h1, button)

    return container
}