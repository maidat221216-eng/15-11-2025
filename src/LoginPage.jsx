import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import anhlogo1 from "./assets/images/keylogin.png";
import "./assets/css/login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // ADMIN: username "admin", password "123"
      if (username === "admin" && password === "123") {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: "admin", role: "admin" })
        );
        alert("✅ Đăng nhập Admin thành công!");
        navigate("/admin/products"); // admin mới được vào trang quản trị
      } 
      // USER bình thường
      else if (username.trim() && password.trim()) {
        localStorage.setItem(
          "user",
          JSON.stringify({ username, role: "user" })
        );
        alert("✅ Đăng nhập thành công!");
        navigate("/Trang1"); // user sẽ vào trang bình thường
      } 
      else {
        alert("❌ Vui lòng nhập đầy đủ thông tin!");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src={anhlogo1} alt="Logo.png" className="login-logo" />
        <h2 className="login-title">Đăng nhập vào tài khoản</h2>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "⏳ Đang xử lý..." : "Đăng nhập"}
          </button>
        </form>
        <p className="register-link">
          Bạn chưa có tài khoản? <a href="#">Tạo tài khoản mới</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
