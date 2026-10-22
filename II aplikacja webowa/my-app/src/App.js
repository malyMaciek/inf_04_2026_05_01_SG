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
  return (
    <div className="App">
      <div>
        <h1>Menadzer haseł - wykonal 12345678901</h1>
        <Form class="text-start">
            <Form.Group class="m-4 text-start">
              <Form.Label htmlFor='adresWWW'>Adres WWW:</Form.Label>
              <Form.Control id="adresWWW" type="text" placeholder='Adres strony WWW'/>
            </Form.Group>

            <Form.Group class="m-4 text-start">
              <Form.Label htmlFor='login'>Login:</Form.Label>
              <Form.Control id="login" type="text" placeholder='Twój login'/>
            </Form.Group>

            <Form.Group class="m-4 text-start">
              <Form.Check defaultChecked={true}/>
              <Form.Label htmlFor='haslo'>Haslo</Form.Label>
              <Form.Control id="haslo" type='password'/>
            </Form.Group>

            <Form.Group class="m-4 text-start">
              <Button>Zapisz</Button>
            </Form.Group>
        </Form>
      </div>

      <div>
        <p class="m-2 text-primary">Adres: {adresWWW}</p>
        <p>Login: {login}</p>
        <p>Hasło: {czyGenerujeHaslo ? "Haslo generowane automatycznie" : haslo}</p>
      </div>
    </div>
  );
}

export default App;
