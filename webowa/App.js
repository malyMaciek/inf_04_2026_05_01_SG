import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [czyGenerujeHaslo, setCzyGenerujeHaslo] = useState(true);
  const [adresWWW, setAdresWWW] = useState("")
  const [login, setLogin] = useState("")
  const [haslo, setHaslo] = useState("")

  const handleCheckBox = (param) => {
    setCzyGenerujeHaslo(param)
  }

  const handleButtonClick = () => {
    
  }
  return (
    <div className="App">
      <div>
        <h1>Menedzer haseł - wykonal 12345678901</h1>
        <Form class="text-start">
          <Form.Group class="m-4 text-start">
            <Form.Label htmlFor='adresWWW'>Adres WWW:</Form.Label>
            <Form.Control id="adresWWW" type="text" placeholder='Adres strony WWW' onChange={(e)=>setAdresWWW(e.target.value)}/>
          </Form.Group>

          <Form.Group class="m-4 text-start">
            <Form.Label htmlFor='login'>Login:</Form.Label>
            <Form.Control id="login" type="text" placeholder='Twój login' onChange={(e)=>setLogin(e.target.value)}/>
          </Form.Group>

          <Form.Group class="m-4 text-start">
            <Form.Check id='generujHaslo' defaultChecked={true} onChange={(e) => handleCheckBox(e.target.checked)} />
            <Form.Label htmlFor='generujHaslo'>Wygeneruj haslo</Form.Label>
          </Form.Group>

          <Form.Group class="m-4 text-start">
            <Form.Label htmlFor='haslo'>Haslo</Form.Label>
            <Form.Control id="haslo" type='password' disabled={czyGenerujeHaslo ? true : false} onChange={(e)=>setHaslo(e.target.value)}/>
          </Form.Group>

          <Form.Group class="m-3 text-start">
            <Button onClick={handleButtonClick}>Zapisz</Button>
          </Form.Group>
        </Form>
      </div>

      <div class="text-start">
        <p class="m-2 text-primary">Adres: {adresWWW}</p>
        <p className='m-2'>Login: {login}</p>
        <p className='m-2'>Hasło: {czyGenerujeHaslo ? "Haslo generowane automatycznie" : haslo}</p>
      </div>
    </div>
  );
}

export default App;
