import React, {useState} from 'react';
import './App.css';

/*
Regra geral: 
- O texto da mensagem não pode conter espaço em branco, sendo substituído por %20
- O número deve conter o CountryCode+DDD+numero = 5513988282873
- Link geral: https://api.whatsapp.com/send?phone=55${phone}&text=${message}
*/

/*
Colors
Teal Green
#075E54 (dark)
#128C7E (light)

Light Green
#25D366

Checkmark Blue
#34B7F1
*/

function App() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  let urlWhatsappLink = `https://api.whatsapp.com/send?phone=55${phone}&text=${message}`

  return (
    <main>

    </main>
  );
}

export default App;
