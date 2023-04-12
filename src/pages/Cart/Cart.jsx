import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardMedia, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

/*----------------------------------------------redux-----------------------------------------*/
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/apiCalls/CartApiCall";

const Cart = () => {
  /*cart haki reducer mel store*/
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  console.log("cartItems", cartItems);

  return (
    <>
      {cartItems.length < 1 ? (
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          There are no products in your cart
        </Typography>
      ) : (
        <Card sx={{ margin: 10 }} elevation={0} variant="oulined">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack sx={{ width: "100%" }} gap={2}>
              <Stack spacing={2}>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{ textAlign: "center" }}
                >
                  Shopping Cart
                </Typography>
                <Divider
                  variant="inset"
                  sx={{ bgcolor: "#0d6efd", opacity: 0.8 }}
                />
              </Stack>
              <Typography variant="h5" component="div"></Typography>
              {cartItems.map((item) => (
                <Card key={item.id} sx={{ display: "flex", mb: 2, p: 2 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={item.picture}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        {item.title}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Quantity : {item.quantity}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        price : {item.price * item.quantity}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        likes : {item.likes}
                      </Typography>
                      <Button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        color="warning"
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </CardContent>
                  </Box>
                </Card>
              ))}
              <Stack
                flexDirection={"row"}
                justifyContent={"space-around"}
                alignItems={"center"}
                sx={{ backgroundColor: "#cde1ff", borderRadius: "50px" }}
              >
                <Typography variant="h5">Total</Typography>
                <Typography variant="h5">
                  {/*acc represent the store, curr mean the current item and 0 the inital value */}
                  {cartItems.reduce(
                    (acc, cur) => acc + cur.price * cur.quantity,
                    0
                  )}
                  Dt
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      )}
    </>
  );
};
export default Cart;

{
  /*
const cartItems = [
  {
    id: 1,
    picture:
      "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/8/1/81w101g7fg_1_1.jpg",
    title: "Pc Lenovo",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    price: 1400,
    Quantity: 23,
    likes: 0,
  },
  {
    id: 2,
    picture:
      "https://bestbuytunisie.tn/wp-content/uploads/2022/08/Souris-Gamer-Sandberg-Azazinator-Mouse-6400-Best-buy-tunisie-prix-tunisie-11.png",
    title: "Mouse",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    price: 30,
    Quantity: 23,
    likes: 0,
  },
];

*/
}
