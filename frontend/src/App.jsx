

import { Layout } from "./components/NavBar/Layout"
import { ProductWhithQuery } from "./container/ProductWhitQuery";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { CartProvider } from "./Context/cart";
import { Information } from "./components/Information";
import { Home } from './pages/Home'
import { BookCategoryQuery } from "./container/BookCategoryQuery";
import { CategoryGetQuery } from "./container/CategoryGetQuery";
import  {userContext}  from "./Context/user";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { Favoritos } from './pages/Favoritos'
import { HomeProducts } from "./Admin/pages/HomeProducts";
import { UsersAdmin } from "./Admin/pages/UsersAdmin";
import { PageVentas } from "./Admin/pages/PageVentas";
import { useContext } from "react";
import { HistorialPage } from "./pages/HistorialPage";
import { useQuery } from "@apollo/client";
import { GET_ADMIN } from "./hoc/Query/getAdmin";
import { CategoryPage } from "./Admin/pages/CategoryPage";
import { HeaderAdmin } from "./Admin/Components/HeaderAdmin";
import { CuponesPage } from "./Admin/pages/CuponesPage";
import { LayoutUser } from "./components/NavBar/LayoutUser";
import { InfoUser } from "./components/InfoUser";
import { RecoveryPassword } from "./components/RecoveryPassword";
function App() {

  const { isAuth } = useContext(userContext)
  const { data, loading } = useQuery(GET_ADMIN, {
    variables: { tokenUser: isAuth }
  })
  

  return (  

    <CartProvider>
      { 
        loading 
          ? null
          : data !== undefined 
            ? data && data.LoginUser.user.es_admin === true   //si es admin 
              ? <>
                  <HeaderAdmin />
                  <Routes>
                    <></>
                    <Route path="/:isbn?" element={<HomeProducts />}/>
                    <Route path="/admin/user" element={<UsersAdmin/>}/>
                    <Route path="/admin/categorias" element={<CategoryPage/>}/>
                    <Route path='/admin/ventas' element={<PageVentas />}/>
                    <Route path='/admin/cupon' element={<CuponesPage />}/>
                  </Routes>
                </>
              :<LayoutUser>
                 {/* si esta logueado */}
                  <Routes>
                    <Route path="/:search?" element={<Home />}/>
                    <Route path="/book/:isbn" element={<ProductWhithQuery />}/>
                    <Route path="/book/cart" element={<Cart />} />
                    <Route path="/book/information" element={<Information />}/>
                    <Route path="/category" element={<CategoryGetQuery />} />          
                    <Route path="/category/:genero" element={<BookCategoryQuery />}/>
                    <Route path="/historial" element={<HistorialPage />}/>
                    <Route path="/favoritos" element={<Favoritos />}/>
                    <Route path="/user" element={<InfoUser />}/>
                  </Routes>
                </LayoutUser>
            : <Layout> 
            {/* entra si la data es undefined, osea si no esta logueado */}
                
                <Routes>
                  <Route path="/:search?" element={<Home />}/>
                  <Route path="/book/:isbn" element={<ProductWhithQuery />}/>
                  <Route path="/category" element={<CategoryGetQuery />} />          
                  <Route path="/category/:genero" element={<BookCategoryQuery />}/>
                  <Route path="/login" element={<NotRegisterUser />}/>
                  <Route path="/historial" element={<NotRegisterUser />}/>
                  <Route path="/book/cart" element={<NotRegisterUser />}/>
                  <Route path="/recoveryPassword" element={<RecoveryPassword />}/>
                </Routes>
              </Layout> 

      }
    </CartProvider>
  )
}

export default App
