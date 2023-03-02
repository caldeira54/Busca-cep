import './App.css'
import Header from './components/header'
import Footer from './components/footer'

import Icon from './assets/img/icon.png'

function App() {

  return (
    <div className='container'>
      <Header />

      <main className='main'>
        <form className='form'>
          <div className='icon'>
            <img src={Icon} alt="Icon" width="20%"/>
          </div>

          <div className='field'>
            <span>CEP</span>
            <input type='text' name='cep' className='input' placeholder='Digite o CEP' />
          </div>
        </form>
      </main>

      <Footer />

    </div>
  )
}

export default App
