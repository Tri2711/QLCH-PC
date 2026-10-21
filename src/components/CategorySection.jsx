
const categories = [
  { icon: "🖥️", name: "PC Gaming", count: "Bộ máy hoàn chỉnh" },
  { icon: "🎮", name: "Card đồ họa", count: "GPU & VGA" },
  { icon: "⚡", name: "Bộ vi xử lý", count: "CPU Intel & AMD" },
  { icon: "💾", name: "RAM & SSD", count: "Nâng cấp hiệu năng" },
];

function CategorySection() {
  return (
    <section className="section" id="categories">
      <div className="section-heading">
        <div>
          <span className="eyebrow">EXPLORE OUR STORE</span>
          <h2>Danh mục <span>nổi bật</span></h2>
        </div>

        <p>Tìm đúng linh kiện cho cấu hình của bạn.</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <a
            href="#products"
            className="category-card"
            key={category.name}
          >
            <span className="category-icon">{category.icon}</span>
            <h3>{category.name}</h3>
            <p>{category.count}</p>
            <span className="category-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
