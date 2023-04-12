import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  CardActions,
  Stack,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
/*import { Products } from "../data/ProductsData";*/

import { getProducts } from "../../src/services/api";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/apiCalls/ProductApiCall";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  {
    /*const [products, setProducts] = useState([]);

  const getProductsFunction = async () => {
    const response = await getProducts();
    setProducts(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getProductsFunction();
  }, []);*/
  }

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                sx={{ height: 300 }}
                image={product.picture}
                title="green iguana"
              />
              <CardContent>
                <Stack spacing={2}>
                  {/*I have used the parametric route here to acces the details of the product*/}

                  <Link
                    to={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                    product={product}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Stack flexDirection={"row"} columnGap={2}>
                    <Typography variant="body2" color="primary">
                      Likes : {product.likes}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Price : {product.price}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Quantity: {product.Quantity}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
              <CardActions>
                <Button size="small">Like</Button>
                <Button size="small">Add</Button>
                <Button size="small">Update</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Product;
