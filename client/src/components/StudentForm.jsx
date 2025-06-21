import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export default function StudentForm() {
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInfo);
    axios
      .post("http://localhost:7005/product/insert", formInfo)
      .then((res) => {
        // console.log(res.data);
        if (res.data.success) {
          alert(res.data.message);
          navigate("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: "60%", p: 5 }} elevation={5}>
        <Box component={"form"} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                required
                onChange={handleChange}
                value={formInfo.name}
                label="Product Name"
                placeholder="enter product name here"
                name="name"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Product Price"
                placeholder="enter product price here"
                name="price"
                type="number"
                required
                onChange={handleChange}
                value={formInfo.price}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Product Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Product Category"
                  //   onChange={handleChange}
                  name="category"
                  required
                  onChange={handleChange}
                  value={formInfo.category}
                >
                  <MenuItem value={"Mobile"}>Mobile</MenuItem>
                  <MenuItem value={"Laptop"}>Laptop</MenuItem>
                  <MenuItem value={"Camera"}>Camera</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Product Description"
                placeholder="type product description here"
                name="description"
                required
                onChange={handleChange}
                value={formInfo.description}
                multiline
                rows={3}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                color="secondary"
                component={Link}
                to={"/"}
                variant="contained"
                fullWidth
              >
                View All
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
