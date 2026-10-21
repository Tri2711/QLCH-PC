
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">
          PERFORMANCE WITHOUT LIMITS
        </span>

        <h1>
          BUILD YOUR
          <br />
          <span>DREAM PC.</span>
        </h1>

        <p>
          Khám phá sức mạnh công nghệ với những bộ PC gaming
          và linh kiện hiệu năng cao dành riêng cho bạn.
        </p>

        <div className="hero-actions">
          <a href="#products" className="btn-primary">
            Khám phá sản phẩm ↗
          </a>

          <a href="#categories" className="btn-secondary">
            Xem danh mục
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>500+</strong>
            <span>Sản phẩm</span>
          </div>

          <div>
            <strong>2.000+</strong>
            <span>Khách hàng</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Hỗ trợ</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>
        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=85"
          alt="Bộ máy tính gaming"
        />
        <div className="hero-badge">
          <span>GAMING SERIES</span>
          <strong>UNLEASH THE POWER</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;
