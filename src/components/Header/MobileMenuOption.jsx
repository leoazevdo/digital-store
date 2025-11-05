import EntrarECadastroButtons from "./EntrarECadastroButtons"

export const MobileMenuOptions = ({closeOptions}) => {
  return(
  <>
    <div className="overlay d-lg-none" onClick={closeOptions}></div>
    <div className="mobile-menu d-lg-none d-flex flex-column p-3 gap-3">
      <div className="links d-flex flex-column gap-2  ">
        <p className='mb-2'>Paginas</p>
        <a href="/" className="mobile-nav-link">Home</a>
        <a href="/produtos" className="mobile-nav-link">Produtos</a>
        <a href="/categorias" className="mobile-nav-link">Categorias</a>
        <a href="/meus-pedidos" className="mobile-nav-link">Meus Pedidos</a>
      </div>
      <EntrarECadastroButtons button1Order={0} button2Order={1} className={'w-100'}/>
    </div>
  </>
  )
}