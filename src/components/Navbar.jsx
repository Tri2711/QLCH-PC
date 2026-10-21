import { useEffect, useState } from "react";
import "./Navbar.css";

// id khớp với các khu vực được bọc trong App.jsx
const NAV_LINKS = [
  { id: "nav-home", label: "Trang chủ" },
  { id: "nav-categories", label: "Danh mục" },
  { id: "nav-products", label: "Sản phẩm" },
  { id: "nav-contact", label: "Liên hệ" },
];

function Navbar({ cartCount = 0, onSearch, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState(NAV_LINKS[0].id);
  const [query, setQuery] = useState("");

  // Theo dõi cuộn trang: đổ bóng navbar + đánh dấu mục đang xem
  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.id);
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 8);

      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

      let current = ids[0];
      if (atBottom) {
        current = ids[ids.length - 1];
      } else {
        const line = window.innerHeight * 0.35;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) current = id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Nhấn Esc để đóng menu mobile
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Tự đóng menu khi màn hình rộng ra lại
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = query.trim();
    if (value && onSearch) onSearch(value);
    setMenuOpen(false);
  };

  // Ô tìm kiếm xuất hiện 2 chỗ: trên navbar (desktop) và trong menu (điện thoại nhỏ)
  const renderSearch = () => (
    <form className="navbar-search" role="search" onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm linh kiện, PC gaming..."
        aria-label="Tìm kiếm sản phẩm"
      />
      <button type="submit" aria-label="Tìm kiếm">
        ⌕
      </button>
    </form>
  );

  return (
    <header className={`navbar${scrolled ? " is-scrolled" : ""}`}>
      <a className="navbar-logo" href="#nav-home" aria-label="NOVAPC - Trang chủ">
        <span className="navbar-logo-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
          </svg>
        </span>
        NOVA<span className="navbar-logo-highlight">PC</span>
      </a>

      <nav
        id="nav-menu"
        className={`navbar-menu${menuOpen ? " is-open" : ""}`}
        aria-label="Điều hướng chính"
      >
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`navbar-link${activeId === id ? " is-active" : ""}`}
            aria-current={activeId === id ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        {renderSearch()}
      </nav>

      <div className="navbar-actions">
        {renderSearch()}

        <button
          type="button"
          className="navbar-cart"
          aria-label={`Giỏ hàng, ${cartCount} sản phẩm`}
          onClick={onCartClick}
        >
          🛒 <span className="navbar-cart-label">Giỏ hàng</span>
          {cartCount > 0 && (
            <strong className="navbar-cart-count">{cartCount}</strong>
          )}
        </button>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;