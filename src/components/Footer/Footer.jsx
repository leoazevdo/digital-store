import '@globalStyles/ColorsVariables.css'
import '../../globalStyles/reset.css'
import './Footer.css'
import logo from '../../assets/logo-footer.svg'
import face from '../../assets/facebook.svg'
import insta from '../../assets/instagram.svg'
import x from '../../assets/twitter.svg'

export function Footer() {
    return(
        <>
        <footer>
            <div className='top'>
                <div className='social'>
                    <img className='logo' src={logo} alt="logo-digital-college" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className='icons'>
                        <a href="#"><img src={face} /></a>
                        <a href="#"><img src={insta} /></a>
                        <a href="#"><img src={x} /></a>
                    </div>
                </div>
                <div className='info-cat'>
                    <div className='info'>
                        <h3>Informação</h3>
                        <a>Sobre Drip Store</a>
                        <a>Segurança</a>
                        <a>Wishlist</a>
                        <a>Blog</a>
                        <a>Trabalhe conosco</a>
                        <a>Meus pedidos</a>
                    </div>
                    <div className='cat'>
                        <h3>Categorias</h3>
                        <a>Camisetas</a>
                        <a>Calças</a>
                        <a>Bonés</a>
                        <a>Headphones</a>
                        <a>Tênis</a>
                    </div>
                </div>
                <div className='contato'>
                    <h3>Contato</h3>
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </div>
            <div className='direitos'>
                <hr />
                <p className='direitos'>@ 2022 Digital College</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;