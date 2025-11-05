import '@globalStyles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.style.css';
import logo from '../../assets/logo-header.svg';
import '@globalStyles/ColorsVariables.css';
import { ShoppingCartButton } from './shoppingCart';
import EntrarECadastroButtons from './EntrarECadastroButtons';
import { SearchBar } from './SearchBar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = ({
  showSearchBar = true,
  showShoppingCart = true,
  showHeader2 = true
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
   
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); 
    }
  }, []); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <>
      <header className="d-flex flex-column ">
        <div className="header1">
          <a href="/" className="header_logo"><img src={logo} alt="logo" /></a>
          {showSearchBar && <SearchBar className={"header1searchBar"} />}
          {!user && <EntrarECadastroButtons button1Order={2} button2Order={1} className="gap-4" />}
          {showShoppingCart && <ShoppingCartButton />}
          {user && (
            <div className="user_info_header">
              <button
                className="image_user_button"
                style={{ backgroundImage: 'url(src/assets/user.svg)' }}
                onClick={toggleMenu}
              />
              <span className="user_name" onClick={toggleMenu}>Olá, {user.firstname}</span>
              {menuOpen && (
                <div className="dropdown_menu" onBlur={closeMenu}>
                  <ul>
                    <li><Link to="/myprofile" className="text-decoration-none">Meu Perfil</Link></li>
                    <li><button className="btn btn-link text-decoration-none p-0" onClick={handleLogout}>Sair</button></li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {showHeader2 && (
          <div className="header2">
            <Link to="/" className="text-decoration-none">Home</Link>
            <Link to="/produtos" className="text-decoration-none">Produtos</Link>
            <Link to="/categorias" className="text-decoration-none">Categorias</Link>
            <Link to="/myprofile" className="text-decoration-none">Meus Pedidos</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;