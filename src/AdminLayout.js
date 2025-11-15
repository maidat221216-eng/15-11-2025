import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Trang Quản Trị</h2>

      {/* MENU ADMIN */}
      <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <button onClick={() => navigate("/admin/products")}>Sản phẩm</button>
        <button onClick={() => navigate("/admin/orders")}>Đơn hàng</button>
        <button onClick={() => navigate("/admin/users")}>Người dùng</button>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminLayout;
