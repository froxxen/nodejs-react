import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>Greeting app created by Froxxen</div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 101
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Arto" age={26 + 10} />
      <Hello name={nimi} age={ika} />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))