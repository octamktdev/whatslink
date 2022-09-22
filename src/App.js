import React, { useState } from 'react';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FiLink2, FiCopy, FiRepeat } from 'react-icons/fi';
import checkIcon from './img/check-icon.png'
import Tooltip from '@mui/material/Tooltip';
import $ from 'jquery'
import { Input } from '@mui/material';

function App() {
  const [link, setLink] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [displayGenerate, setDisplayGenerate] = useState(true)
  
  async function handleGenerateLink(e) {
    e.preventDefault()

    const formatedPhone = phone != null ? phone.slice(1) : ''
    let url

    if (!isPossiblePhoneNumber(phone)) { toggleError('add') }

    else if (formatedPhone !== '') {
      if (message === '' || message == null) {
        toggleError('remove')

        url = `https://api.whatsapp.com/send?phone=${formatedPhone}`
        setLink(url)
        setDisplayGenerate(false)
      }
      else {
        toggleError('remove')

        const formatedMessage = message.split(' ').join('%20')
        url = `https://api.whatsapp.com/send?phone=${formatedPhone}&text=${formatedMessage}`
        setLink(url)
        setDisplayGenerate(false)
      }     
    }
      const name = document.querySelector('input[name=name]').value;
      const email = document.querySelector('input[name=email]').value;
      const phoneNumber = document.querySelector('input[name=phone-number]').value; 

      fetch('https://api.sheetmonkey.io/form/csFzg2HHgSDwsxjmQVmtJT', {
        method: 'post',
        headers: {
          'Accept': "application/json",
          'Content-type': 'application/json'
        },
        body: JSON.stringify({name, email, phoneNumber})
      })
  }

  function toggleError(method) {
    const phoneInputContainer = document.getElementById('phone-input-container')
    const haveClassError = phoneInputContainer.classList.contains('error')

    if (method === 'add' && !haveClassError) {
      phoneInputContainer.classList.add('error')
    }
    if (method === 'remove' && haveClassError) {
      phoneInputContainer.classList.remove('error')
    }
  }

  function copyLink(e, id) {
    const paragraph = document.getElementById(id)
    paragraph.select()

    try {
      document.execCommand('copy');
      $('.alert').show()
    } catch (err) {
      alert('O evento de copiar não está disponível no seu navegador.');
    }
  }

  function newLink(e) {
    setLink('')
    setDisplayGenerate(true)
  } 

  return (
    <main className="page-home">

        <div className='container'>
            <div className='row'>
              <div className='col-md'>
                <div className="initial">
                  <div className="page-name">
                    <h1 className='titulo-pagina'>Gerador de links para WhatsApp</h1>
                    <ol className='passo-a-passo'>
                      <li className='item-passo-a-passo'>Insira o número de WhatsApp da empresa</li>
                      <li className='item-passo-a-passo'>Escreva a mensagem padrão que deseja enviar</li>
                      <li className='item-passo-a-passo'>Clique em gerar link.</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className='col-md'>
                <div className='generate-link'>
                <form
                  onSubmit={(e) => handleGenerateLink(e)}
                  className="generate-link-form form-container"
                  style={{ display: displayGenerate ? "block" : "none" }}
                >
                  <div className="input-container" id="name-input-container">
                    <label htmlFor="name">Seu nome*</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Digite seu nome"
                        className="input"
                        required
                      />
                  </div>

                  <div className="input-container" id="email-input-container">
                    <label htmlFor="email">Seu email*</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Digite seu email"
                        className="input"
                        required
                      />
                  </div>

                  <div className="input-container" id="phone-input-container">
                    <label htmlFor="phone-number">Número de celular com DDD*</label>
                    <PhoneInput
                      name="phone-number"
                      defaultCountry="BR"
                      placeholder="00 000000000"
                      onChange={setPhone}
                      className="input"
                      required
                    />
                  </div>

                  <div className="input-container">
                    <label htmlFor="message">Digite sua mensagem padrão</label>
                    <textarea
                      name="message"
                      placeholder="Exemplo: Olá! Gostaria de informações sobre os produtos."
                      value={message}
                      className="input"
                      onChange={(e) => setMessage(e.target.value)}></textarea>
                  </div>

                  <button type="submit" 
                  id="btn-gerar-link" 
                  className="btn-green-1BBB60">
                    <span className="icon-button">
                      <FiLink2 size={24} />
                    </span>
                    Gerar link
                  </button>
                </form>

                <article
                className="copy-link-form form-container"
                style={{ display: !displayGenerate ? "block" : "none" }}
                >
                <div className="input-container">
                  <div className='success-message'>
                    <img src={checkIcon} alt="Ícone sucesso"/>
                    <h2>Pronto!</h2>
                    <p>Agora é só copiar e compartilhar nas redes sociais ou canais de vendas.</p>
                  </div>
                  <label htmlFor="link-long">Copiar link</label>
                  <div className="display-link">
                      <input id="link-long" value={link} placeholder={link} readOnly className="input-display"/>
                      <Tooltip title="Copiar link" placement="top" arrow>
                      <button
                        onClick={(e) => copyLink(e, 'link-long')}
                        className="btn-copy"
                        >
                        <FiCopy size={24} />
                        </button>
                      </Tooltip>
                  </div>
                  <div class="alert alert-success" role="alert">
                      Link copiado com sucesso!
                  </div>
                </div>

                <button
                  className="btn-green-1BBB60"
                  onClick={(e) => newLink(e)}
                >
                  <span className="icon-button">
                    <FiRepeat size={24} />
                  </span>
                  Gerar novo link
                </button>
                  </article>
                </div>
              </div>
            </div>
        </div>    
    </main>
  );
}

export default App;