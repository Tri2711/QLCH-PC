
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "NOVA Gaming Pro X",
    category: "PC GAMING",
    price: "24.990.000đ",
    rating: "4.9",
    reviews: 128,
    tag: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Gaming Setup RGB",
    category: "PC GAMING",
    price: "19.490.000đ",
    rating: "4.8",
    reviews: 96,
    tag: "HOT",
    image:
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "High Performance PC",
    category: "WORKSTATION",
    price: "32.990.000đ",
    rating: "4.9",
    reviews: 74,
    tag: "PREMIUM",
    image:
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=700&q=80",
  },
];

function ProductSection() {
  return (
    <section className="section products-section" id="products">
      <div className="section-heading">
        <div>
          <span className="eyebrow">HANDPICKED FOR YOU</span>
          <h2>Sản phẩm <span>nổi bật</span></h2>
        </div>

        <a href="#categories" className="view-all">
          Xem tất cả ↗
        </a>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
