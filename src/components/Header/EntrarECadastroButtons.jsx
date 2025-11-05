import { Link } from 'react-router-dom';

const EntrarECadastroButtons = ({ button1Order, button2Order, className }) => {
  return (
    <div className={`buttons-container d-flex ${className || ''}`}>
      
      <style>
        {`
          #btn_login:hover {
            background-color: var(--tertiary) !important;
          }
        `}
      </style>

      <Link to='/cadastro'>
        <button 
          type="button" 
          className="btn text-dark w-50 text-underline"
          style={{ order: button2Order }}
        >
          Cadastre-se
        </button>
      </Link>

      <Link to='/login'>
        <button 
          type="button" 
          id='btn_login'
          className="btn background-primary text-light w-50"
          style={{ order: button1Order }}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
};

export default EntrarECadastroButtons;