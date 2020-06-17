import React, { useState } from 'react';

/*
Regra geral: 
- O texto da mensagem não pode conter espaço em branco, sendo substituído por %20
- O número deve conter o CountryCode+DDD+numero = 5513988282873
- Link geral: https://api.whatsapp.com/send?phone=55${phone}&text=${message}
- Encurtar link : https://dev.bitly.com/
*/


function App() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  let urlWhatsappLink = `https://api.whatsapp.com/send?phone=55${phone}&text=${message}`

  return (
    <main className="page-home">
      <section className="initial">
        <h1>Gerador de links para Whatsapp</h1>

        <ol>
          <li>Entre com seu número de telefone.</li>
          <li>Escreva a mensagem padrão que será exibida.</li>
          <li>Clique em gerar link.</li>
          <li>Copie o link e use como quiser!</li>
        </ol>

      </section>

      <section className="generate-link">

        <form action="" className="generate-link-form form-container">

          <div className="input-container">
            <label htmlFor="phone-number">Número do celular</label>
            <input type="text" className="input" name="phone-number" placeholder="Digite seu número de celular"/>
          </div>
          
          <div className="input-container">
            <label htmlFor="message">Mensagem</label>
            <textarea name="message" id="" cols="5"></textarea>
          </div>

          <button>
            <span className="icon-button"></span>
            Gerar link
          </button>

        </form>

        <article className="copy-link-form form-container">

          <div className="input-container">
            <label htmlFor="link-long">Link</label>
            <div className="display-link" name="link-long">
              <button>Icon</button>
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="link-short">Link encurtado</label>
            <div className="display-link" name="link-short">
              <button>Icon</button>
            </div>
          </div>        

          <button>
            <span className="icon-button"></span>
            Novo link
          </button>
          
        </article>
      </section>
    </main>
  );
}

export default App;
