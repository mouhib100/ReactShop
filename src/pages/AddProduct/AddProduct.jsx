import { Box, InputLabel, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <div>
      <Stack spacing={3}>
        <Typography variant="h4">AddProduct</Typography>
        <Stack spacing={3}>
          <Box>
            <InputLabel shrink={true}>Product Name</InputLabel>
            <TextField fullWidth label="product name" id="fullWidth" />
          </Box>
          <Box>
            <InputLabel shrink={true}>Description</InputLabel>
            <TextField fullWidth label="description" id="fullWidth" />
          </Box>
          <Box>
            <InputLabel shrink={true}>Price</InputLabel>
            <TextField fullWidth label="price" id="fullWidth" />
          </Box>
          <Box>
            <InputLabel shrink={true}>Quantity</InputLabel>
            <TextField fullWidth label="Quantity" id="fullWidth" />
          </Box>
          <Box>
            <InputLabel shrink={true}>Image</InputLabel>
            <TextField
              type="file"
              variant="outlined"
              fullWidth
              onChange={handleFileChange}
              inputProps={{ accept: "image/*" }}
            />
          </Box>
        </Stack>
      </Stack>
    </div>
  );
};

export default AddProduct;
