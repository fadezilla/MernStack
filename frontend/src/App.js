import {BrowserRouter, Routes, Route} from "react-router-dom"
import ProtectedRoutesComponent from "./Component/ProtectedRoutesComponent";

//Components
import HeaderComponent from "./Component/HeaderComponent";
import FooterComponent from "./Component/FooterComponent";

//user components
import RoutesWithUserChatComponent from "./Component/User/RoutesWithUserChatComponent";

//Public open pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";

//Protected User pages
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";

//Protected Admin Pages
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatPage from "./pages/admin/AdminChatPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <HeaderComponent />
      <Routes>
       <Route element={<RoutesWithUserChatComponent /> }>
      {/*Public open routes */}
      <Route path="/" element={<HomePage />} />
        <Route path="/Cart" element={<CartPage /> } />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/product-details" element={<ProductDetailsPage /> } />
        <Route path="/product-details/:id" element={<ProductDetailsPage /> } />
        <Route path="/product-list" element={<ProductListPage /> } />
        <Route path="/register" element={<RegisterPage /> } />
        <Route path="*" element={"Page does not exist 404"} />
         </Route>
         
        {/*User protected routes */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage /> } />
          <Route path="/user/my-orders" element={<UserOrdersPage /> } />
          <Route path="/user/cart-details" element={<UserCartDetailsPage /> } />
          <Route path="/user/order-details" element={<UserOrderDetailsPage /> } />
        </Route>
      
        {/*Admin protected routes */}
        <Route element={<ProtectedRoutesComponent admin={true} /> }>
          <Route path="/admin/users" element={<AdminUsersPage /> } />
          <Route path="/admin/edit-user" element={<AdminEditUserPage/> } />
          <Route path="/admin/products" element={<AdminProductsPage /> } />
          <Route path="/admin/create-new-product" element={<AdminCreateProductPage /> } />
          <Route path="/admin/edit-product" element={<AdminEditProductPage /> } />
          <Route path="/admin/orders" element={<AdminOrdersPage /> } />
          <Route path="/admin/order-details" element={<AdminOrderDetailsPage /> } />
          <Route path="/admin/chats" element={<AdminChatPage /> } />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage /> } />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
