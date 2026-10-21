
function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <span className="product-tag">{product.tag}</span>

        <img src={product.image} alt={product.name} />

        <button
          className="favorite-button"
          type="button"
          aria-label="Yêu thích sản phẩm"
          onClick={() => alert(`Đã chọn ${product.name}`)}
        >
          ♡
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <div className="product-rating">
          <span>★</span> {product.rating}
          <span className="review-count">
            ({product.reviews} đánh giá)
          </span>
        </div>

        <div className="product-bottom">
          <strong className="product-price">
            {product.price}
          </strong>

          <button
            type="button"
            className="add-cart"
            onClick={() => alert(`Đã thêm ${product.name} vào giỏ hàng`)}
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
