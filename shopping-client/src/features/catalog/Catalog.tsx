import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./CatalogApi";

export default function Catalog() {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   fetch("https://localhost:5001/api/products")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, []);
  const { data, isLoading } = useFetchProductsQuery();

  if (isLoading || !data) return <p>Loading...</p>;

  return (
    <>
      <ProductList products={data}></ProductList>
    </>
  );
}
