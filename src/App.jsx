import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'

// 🧱 Comentado temporariamente até criarmos esses componentes:
 import Header from './components/Header/Header.jsx'
 import Footer from "./components/Footer/Footer.jsx";
// import Login from './pages/Login.jsx'
// import Signin from './pages/Signin.jsx'
// import { ProductsSection } from './pages/Products.jsx';
// import MyProfile from './pages/MyProfile.jsx';
// import ProductDetail from './pages/ProductDetail.jsx';

function App() {
    return (
        <Router>
            <Routes>

             
                <Route path="/" element={
                    <>
                        <Header showSearchBar={true} showShoppingCart={true} showHeader2={true} /> 
                        <Home />
                        <Footer />
                    </>
                } />

               
               
                {/*
                <Route path="/login" element={<>
                    <Header showSearchBar={false} showShoppingCart={false} showHeader2={false} />
                    <Login />
                </>} />

                <Route path="/cadastro" element={<>
                    <Header showSearchBar={false} showShoppingCart={false} showHeader2={false} />
                    <Signin />
                </>} />

                <Route path="/produtos" element={<>
                    <Header showSearchBar={true} showShoppingCart={true} showHeader2={true} />
                    <ProductsSection />
                </>} />

                <Route path="/categorias" element={<>
                    <Header showSearchBar={true} showShoppingCart={true} showHeader2={true} />
                    EM MANUTENÇÃO...
               </>} />

                <Route path='/myprofile' element={<>
                    <Header showSearchBar={true} showShoppingCart={true} showHeader2={true} />
                    <MyProfile />
                </>} />

                <Route path='/product-detail/:id' element={<>
                    <Header showSearchBar={true} showShoppingCart={true} showHeader2={true} />
                    <ProductDetail />
                </>} />

                <Route path="/meus-pedidos" element={<>
                    <Header showSearchBar={true} showShoppingCart={true} showHeader2={true} />
                    EM MANUTENÇÃO...
               </>} />
                */}

            </Routes>
        </Router>
    );
}

export default App;