
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-main">
        <div>
          <a href="#home" className="logo">
            <span className="logo-icon">N</span>
            NOVA<span className="logo-highlight">PC</span>
          </a>

          <p>
            Đồng hành cùng bạn xây dựng
            cấu hình PC phù hợp với mọi nhu cầu.
          </p>
        </div>

        <div>
          <h3>Danh mục</h3>
          <a href="#categories">PC Gaming</a>
          <a href="#categories">Card đồ họa</a>
          <a href="#categories">CPU và RAM</a>
        </div>

        <div>
          <h3>Hỗ trợ</h3>
          <a href="#footer">Chính sách bảo hành</a>
          <a href="#footer">Chính sách đổi trả</a>
          <a href="#footer">Liên hệ</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NOVAPC. Giao diện demo học tập.</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  );
}

export default Footer;
