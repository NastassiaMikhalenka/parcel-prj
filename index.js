import './components/header'
import './style.scss'

console.log('Hello from main index');

document.body.insertAdjacentHTML('afterbegin', `
<ul>
    <li>Home</li>
    <li>Catalog</li>
    <li>About</li>
    <li>Contact</li>
</ul>
`)
