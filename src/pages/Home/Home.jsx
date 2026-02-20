import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts";
import { getAllCategories } from "../../api/getAllCategories";
import { ProductCards } from "../../components/ProductCards";
import { useCart } from "../../context/CartContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { cart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
  selectedCategory === "All"
    ? products
    : products.filter(
        (product) =>
          product.category?.name === selectedCategory
      );


  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getAllProducts();
      const categoriesData = await getAllCategories();

      setProducts(productsData);
      setCategories(categoriesData);
    };

    fetchData();
  }, []);

  return (
    <>
      
      <p>Welcome to Shop It</p>

      <div className="category-list">
  <span
    className={`category-chip ${
      selectedCategory === "All" ? "active" : ""
    }`}
    onClick={() => setSelectedCategory("All")}
  >
    All
  </span>

  {categories.map((category) => (
    <span
      key={category.id}
      className={`category-chip ${
        selectedCategory === category.name ? "active" : ""
      }`}
      onClick={() => setSelectedCategory(category.name)}
    >
      {category.name}
    </span>
  ))}
</div>



{/* PRODUCTS */}
<main className="product-grid">
  {filteredProducts?.length > 0 ? (
    filteredProducts.map((product) => (
      <ProductCards key={product.id} product={product} />
    ))
  ) : (
    <p className="no-products">
      No products found. Please try another category.
    </p>
  )}
</main>


    </>
  );
};

export default Home;
