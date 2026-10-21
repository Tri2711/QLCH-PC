
import { useState } from "react";

function Header() {
  const [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    if (keyword.trim()) {
      alert(`Bạn đang tìm kiếm: ${keyword}`);
    }
  }

  return (
    <header className="header">
      <a href="#home" className="logo">
        <span className="logo-icon">N</span>
        NOVA<span className="logo-highlight">PC</span>
      </a>

      <nav className="nav-menu">
        <a href="#home">Trang chủ</a>
        <a href="#categories">Danh mục</a>
        <a href="#products">Sản phẩm</a>
        <a href="#footer">Liên hệ</a>
      </nav>

      <form className="search-box" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <button type="submit" aria-label="Tìm kiếm">
          ⌕
        </button>
      </form>

      <a href="#products" className="cart-button">
        🛒 <span>Giỏ hàng</span>
      </a>
    </header>
  );
}

export default Header;
