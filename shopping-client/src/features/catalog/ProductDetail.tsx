import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../app/models/products";
import { Grid2 } from "@mui/material";

export default function ProductDetail() {
  const id = useParams().id;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  <Grid2></Grid2>;
  return <div>{product?.name}</div>;
}
