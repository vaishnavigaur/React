import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com' }
)

createRoot(document.getElementById('root')).render(

  reactElement


)
