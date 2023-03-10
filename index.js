import main from './pages/main.js'
import login from './pages/login.js'
import home from './pages/home.js'
import cadastro from './pages/cadastro.js'


const root = document.querySelector('#root')

const init =()=> {

window.addEventListener('hashchange', ()=>{
    root.innerHTML = ""
    switch (window.location.hash) {
        case '#home':
            root.appendChild(home())
            
            break;
        case '#cadastro':
            root.appendChild(cadastro())
                
            break;
        case '#login':
            root.appendChild(login())
    
        default:
            break;
    }
})
}

window.addEventListener('load', ()=>{
   root.appendChild(main())
   init()
})
   