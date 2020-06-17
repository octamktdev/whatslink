import React, {useState} from 'react';

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

    </main>
  );
}

export default App;
