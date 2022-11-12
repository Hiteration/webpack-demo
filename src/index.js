import x from './x.js'
import png from './assets/1.png'

const div = document.getElementById('app')
div.innerHTML = `<img src="${png}">`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const p = import('./lazy.js')
    p.then((m) => {
        const fn = m.default
        fn()
    }, (e)=>{console.log(e)})
}

div.appendChild(button)

