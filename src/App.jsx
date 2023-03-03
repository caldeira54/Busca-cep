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

          <div className='field'>
            <span>Rua</span>
            <input type='text' name='rua' className='input' />
          </div>

          <div className='field'>
            <span>Bairro</span>
            <input type='text' name='bairro' className='input' />
          </div>

          <div className='field'>
            <span>Cidade</span>
            <input type='text' name='cidade' className='input' />
          </div>

          <div className='field'>
            <span>Estado</span>
            <input type='text' name='estado' className='input' />
          </div>
        </form>
      </main>

      <Footer />

    </div>
  )
}

export default App
