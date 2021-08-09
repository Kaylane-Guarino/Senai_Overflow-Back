import logo from './logo.svg';
import './App.css';

function App() {
  return (
       // <div className="App">
       // <header className="App-header">
       // <img src={logo} className="App-logo" alt="logo" />
       // <p>
       //   Edit <code>src/App.js</code> and save to reload.
       // </p>
       // <a
       //   className="App-link"
       //   href="https://reactjs.org"
       //   target="_blank"
       //   rel="noopener noreferrer"
       // >
       //   Learn React
       //  </a>
       // </header>
       // </div>
       <div className="login">
        <div className="login-right">
         <img src={logo} className="App-logo" alt="logo" />
            <h1>Acessar App</h1>

            <div className="login-loginInputEmail">
              <label for="email">E-mail:</label>
              <input id="email" type="email" placeholder="E-mail"/>
            </div>

            <div className="login-loginInputPassword">
            <label for="senha">Senha:</label>
            <input id="senha" type="password" placeholder="Senha"/>
            </div>
            <button type="submit">
                Login
            </button>
            <footer>
              Copyright &copy; Natã Sato Rodrigues
            </footer>
         </div>
        </div>   
  );
}

export default App;
