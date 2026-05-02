import { useParams } from "react-router-dom";
import {
  Divider,
  Grid2,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useFetchProductDetailsQuery } from "./CatalogApi";

export default function ProductDetail() {
  const id = useParams().id;
  //const [product, setProduct] = useState<Product | null>(null);

  // useEffect(() => {
  //   fetch(`https://localhost:5001/api/products/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data));
  // }, [id]);

  // if (product === null) {
  //   return <h2>Loading...</h2>;
  // }
  const { data: product, isLoading } = useFetchProductDetailsQuery(
    id ? parseInt(id) : 0,
  );

  if (isLoading || !product) return <h2>Loading...</h2>;

  console.log(product);
  const productDetails = [
    { label: "Description", value: product.description },
    { label: "Price", value: `$${product.price.toFixed(2)}` },
    { label: "Type", value: product.type },
    { label: "Brand", value: product.brand },
    { label: "Quantity In Stock", value: product.quantityInStock },
  ];

  return (
    <Grid2 container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid2 size={6}>
        <img
          src={product?.pictureUrl}
          alt={product?.name}
          style={{ width: "100%" }}
        />
      </Grid2>
      <Grid2 size={6}>
        <Typography variant="h4">{product?.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <TableContainer>
          <Table>
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {detail.label}
                  </TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid2>
    </Grid2>
  );
}
