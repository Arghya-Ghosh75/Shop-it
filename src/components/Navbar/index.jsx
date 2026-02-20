import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../context/login-context";


const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loginDispatch } = useLogin();

  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);

  const handleLogout = () => {
    // ✅ clear localStorage
    localStorage.removeItem("accessToken");

    // ✅ update context
    loginDispatch({ type: "LOGOUT" });

    setIsAccountDropDownOpen(false);
    navigate("/");
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        padding: "18px 36px",
        backgroundColor: "#1f5e4b",
        borderBottom: "1px solid #2a6f5a",
        boxShadow: "0 2px 10px rgba(0,0,0,0.35)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h2
        onClick={() => navigate("/")}
        style={{
          cursor: "pointer",
          color: "#ecfdf5",
          fontWeight: "700",
          letterSpacing: "0.5px",
        }}
      >
        Shop It
      </h2>

      <nav style={{ marginLeft: "auto", display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
          Cart
        </Link>

        <Link to="/wishlist" style={{ color: "#fff", textDecoration: "none" }}>
          Wishlist
        </Link>

        <div style={{ position: "relative" }}>
          <span
            onClick={() =>
              setIsAccountDropDownOpen(!isAccountDropDownOpen)
            }
            style={{
              color: "#ecfdf5",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            Account
          </span>

          {isAccountDropDownOpen && (
            <div
              style={{
                position: "absolute",
                top: "140%",
                right: 0,
                backgroundColor: "#245f4b",
                borderRadius: "8px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                minWidth: "140px",
                overflow: "hidden",
              }}
            >
              {!isAuthenticated ? (
                <>
                  <button
                    onClick={() => {
                      navigate("/auth/login");
                      setIsAccountDropDownOpen(false);
                    }}
                    style={menuBtnStyle}
                  >
                    Login
                  </button>

                  <button
                    onClick={() => {
                      navigate("/signup");
                      setIsAccountDropDownOpen(false);
                    }}
                    style={menuBtnStyle}
                  >
                    Signup
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  style={menuBtnStyle}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

const menuBtnStyle = {
  width: "100%",
  padding: "10px 14px",
  background: "transparent",
  border: "none",
  color: "#ecfdf5",
  textAlign: "left",
  cursor: "pointer",
};

export default Navbar;
