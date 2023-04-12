import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        margin: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Stack spacing={4}>
              <Typography variant="h1">404</Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="/"
                sx={{ width: 200 }}
              >
                Back Home
              </Button>
            </Stack>
          </Grid>
          <Grid xs={6}>
            <img
              src="https://i.imgur.com/qIufhof.png"
              alt=""
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default NotFoundPage;
