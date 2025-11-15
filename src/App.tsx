import "./styles.css";
import Layout from "./Layout";
import Trang1 from "./Trang1";
import Chitietsanpham from "./Chitietsanpham";
import ListProducts_SP from "./ListProducts_SP";
import Trang2 from "./Trang2";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import ProtectedRoute from "./ProtectedRoute";
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
import EditProduct from "./EditProduct";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout chung cho toàn hệ thống */}
        <Route path="/" element={<Layout />}>
          {/* Trang chính */}
          <Route index element={<ListProducts_SP />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />

          {/* Trang đăng nhập / đăng xuất */}
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />

          {/* Trang quản trị (chỉ admin) */}
          <Route
            path="admin/products"
            element={
              <ProtectedRoute>
                <ListProducts_SP_Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/edit/:id"
            element={
              <ProtectedRoute>
                <EditProduct />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
