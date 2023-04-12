import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    price: "",
    quantity: "",
    picture: "",
  });

  const handleFileChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setInputData({ ...inputData, picture: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:3001/Products", inputData)
      .then((res) => {
        alert("Data added successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Stack spacing={3}>
        <Typography variant="h4">AddProduct</Typography>
        <Stack spacing={3}>
          <Box>
            <InputLabel shrink={true}>Product Name</InputLabel>
            <TextField
              fullWidth
              label="product name"
              id="fullWidth"
              onChange={(e) =>
                setInputData({ ...inputData, title: e.target.value })
              }
            />
          </Box>
          <Box>
            <InputLabel shrink={true}>Description</InputLabel>
            <TextField
              fullWidth
              label="description"
              id="fullWidth"
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
          </Box>
          <Box>
            <InputLabel shrink={true}>Price</InputLabel>
            <TextField
              fullWidth
              label="price"
              id="fullWidth"
              onChange={(e) =>
                setInputData({ ...inputData, price: e.target.value })
              }
            />
          </Box>
          <Box>
            <InputLabel shrink={true}>Quantity</InputLabel>
            <TextField
              fullWidth
              label="Quantity"
              id="fullWidth"
              onChange={(e) =>
                setInputData({ ...inputData, quantity: e.target.value })
              }
            />
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
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default AddProduct;
