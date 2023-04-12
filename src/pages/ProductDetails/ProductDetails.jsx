import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Stack, TextField } from "@mui/material";

/*-----------------------------------------------redux-----------------------------------------*/

import { addToCart } from "../../redux/apiCalls/CartApiCall";

/*-------------------------------redux get product by id----------------------------------------*/

import { getProductById } from "../../redux/apiCalls/ProductApiCall";

/*import { Products } from "../../data/ProductsData";*/
{
  /*import { getProductById } from "../../services/api";*/
}

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  console.log(product);
  {
    /* extratc the id parameter from the url*/
  }
  {
    /*const { id } = useParams();*/
  }
  /*i used this to get the data when i clicked on a product
  we use useParams hook from React Router Dom to get the id
   from the URL then we can find the product that we want from the product Array.
  */
  /*const product = Products.find((product) => product.id === +id);*/

  {
    /*param is an object that contains the URL parameters passed to your component. 
    You are using useParams hook from React Router Dom to get the id parameter from the URL, 
    and then pass it as an argument to the getProductById function to fetch the product data 
    for that specific id. */
  }
  const param = useParams();

  useEffect(() => {
    dispatch(getProductById(param.id));
  }, [param.id]);

  {
    /*The useState hook is used in the code to create a state variable named product which is an empty object {} by default.*/
  }
  {
    /*const [product, setProduct] = useState({});

  const getProductFunction = async (id) => {
    const response = await getProductById(param.id);
    setProduct(response.data);
    console.log(response.data);
  };
*/
  }
  {
    /* useEffect(() => {
    getProductFunction(param.id);
  }, [param.id]);*/
  }

  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: qty,
        price: product?.price,
        title: product?.title,
        picture: product?.picture,
        likes: product?.likes,
      })
    );
  };

  return (
    <Card sx={{ display: "flex", marginTop: "5%" }} elevation={0}>
      <CardMedia
        component="img"
        sx={{ width: 500 }}
        image={product?.picture}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack spacing={5}>
            <Typography component="div" variant="h5">
              {product?.title}
            </Typography>
            <Stack spacing={2}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {product?.description}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                price : {product?.price}
              </Typography>

              <Stack flexDirection={"row"}>
                <TextField
                  label="quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  sx={{ width: 200 }}
                />
                <Button onClick={addToCartHandler} variant="contained">
                  Add to cart
                </Button>
              </Stack>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Likes : {product?.likes}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};
export default ProductDetails;
