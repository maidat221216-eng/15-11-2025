import "./assets/css/main.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="layout-wrapper">
      {/* Background full màn hình */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://upload.vmnghia.id.vn/uploads/files-1762585365893-354464584.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
          zIndex: 0,
        }}
      ></section>

      {/* Header/menu/login */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <div className="header1">
          <div className="banner1" style={{ position: "relative" }}>
            {/* MENU TRÁI */}
            <div
              id="topleft"
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                display: "flex",
                alignItems: "center",
                gap: "25px",
                padding: "10px 15px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(4px)",
              }}
            >
              {/* TRANG CHỦ */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                <img
                  src="https://upload.vmnghia.id.vn/uploads/files-1762593535768-919091275.png"
                  alt="TRANG CHỦ"
                  width={45}
                />
                <span style={{ fontSize: "0.8rem", marginTop: "4px" }}>
                  TRANG CHỦ
                </span>
              </div>

              {/* SHOP */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/trang1")}
              >
                <img
                  src="https://upload.vmnghia.id.vn/uploads/files-1762594264284-282891578.png"
                  alt="SHOP"
                  width={40}
                />
                <span style={{ fontSize: "0.8rem", marginTop: "4px" }}>
                  SHOP
                </span>
              </div>

              {/* QUẢN TRỊ (chỉ admin) */}
              {user?.role === "admin" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/admin/products")}
                >
                  <img
                    src="https://upload.vmnghia.id.vn/uploads/files-1763194925451-784037242.png"
                    alt="QUẢN TRỊ"
                    width={40}
                  />
                  <span style={{ fontSize: "0.8rem", marginTop: "4px" }}>
                    QUẢN TRỊ
                  </span>
                </div>
              )}
            </div>

            {/* LOGIN / LOGOUT */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                zIndex: 100,
                backgroundColor: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
              }}
            >
              {user ? (
                <>
                  <span className="username">👤 {user.username}</span>
                  <button
                    className="logout-btn"
                    onClick={handleLogout}
                    style={{ marginLeft: "10px" }}
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <a
                  href="/login"
                  className="login-link"
                  style={{
                    color: "blue",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Đăng nhập
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          background: "#fff",
          marginTop: "0vh",
          paddingTop: "40px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
      >
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default Layout;
