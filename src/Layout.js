import "./assets/css/main.css";
import anhlogo from "./assets/images/hinh1.png";
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
    <div className="layout-wrapper" style={{ position: "relative", minHeight: "100vh" }}>
      {/* Hero Background đứng yên */}
      <div
        className="hero-bg"
        style={{
          backgroundImage:
            'url("https://upload.vmnghia.id.vn/uploads/files-1763347260943-595945345.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "1000px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Header nằm trên banner */}
        <header>
          <div id="divheader" className="header1">
            <div id="banner" className="banner1" style={{ position: "relative" }}>
              {/* Menu trái */}
              <div id="topleft">
                <ul className="ul1">
                  <li><a href="/#">TRANG CHỦ</a></li>
                  <li><a href="/trang1">EGOV</a></li>
                  <li><a href="/admin/products">QUẢN TRỊ</a></li>
                </ul>
              </div>

              {/* Logo */}
              <div id="logo" className="logo1" style={{ textAlign: "center" }}>
                <img src={anhlogo} width="354" alt="Logo" />
              </div>

              {/* Phần tìm kiếm */}
              <div
                id="divtimkiem"
                style={{ width: "300px", margin: "10px auto", textAlign: "center" }}
              >
                Phần tìm kiếm
              </div>

              {/* Đăng nhập / đăng xuất */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
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
                    style={{ color: "blue", fontWeight: "bold", textDecoration: "none" }}
                  >
                    Đăng nhập
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Video YouTube nằm giữa banner */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
          }}
        >
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/E7kcUv_-n5c"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
          ></iframe>
        </div>
      </div>

      {/* Nội dung chính (danh sách sản phẩm xuống dưới) */}
      <main id="container" className="container">
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default Layout;
