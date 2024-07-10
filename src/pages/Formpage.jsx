import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import MyTable from "../components/MyTable";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addProduct, getProductById, updateProduct } from "../apis";
import { useParams } from "react-router-dom";

const Formpage = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const { register, handleSubmit, reset, setValue } = useForm();
  // to load data to edit

  const loadData = async () => {
    if (!isEdit) return;
    try {
      let res = await getProductById(id);
      let formData = res.data;
      console.log(formData);
      Object.keys(formData).forEach((key) => {
        setValue(key, formData[key]);
      });
    } catch (error) {
      console.log(error);
      toast.error("failed to load product");
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  // to add new products
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    const fileInput = document.getElementById("image");
    if (fileInput && fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    }
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      await addProduct(formData);
      // await addProduct(formData);
      toast.success("success");
      reset();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onEdit = async (data) => {
    console.log("Original Data:", data);
    // remove _id from data
    const { _id, createdAt, updatedAt, __v, ...dataWithoutId } = data;

    console.log("data withoutid:", dataWithoutId);
    const formData = new FormData();
    Object.keys(dataWithoutId).forEach((key) => {
      formData.append(key, dataWithoutId[key]);
    });
    const fileInput = document.getElementById("image");
    if (fileInput && fileInput.files[0]) {
      formData.append("image", fileInput.files[0]);
    }
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      await updateProduct(id, formData);
      // await addProduct(formData);
      toast.success("successfully updated");
      reset();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      {" "}
      <NavBar />
      <Container>
        <Box sx={{ margin: 5 }}>
          <Paper elevation={24} sx={{ width: "50%" }}>
            <form onSubmit={handleSubmit(isEdit ? onEdit : onSubmit)} action="">
              <Typography align="center" variant="h3">
                {isEdit ? "Update Product" : "Add Product"}
              </Typography>
              <Grid container spacing={2}>
                <Grid item sx={{ marginLeft: "40px" }} sm={12}>
                  <Typography variant="h6">Upload image</Typography>
                  <input type="file" name="image" id="image" />
                </Grid>
                <Grid item sm={12} sx={{ marginLeft: "40px" }}>
                  <TextField
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    {...register("title")}
                  />
                </Grid>
                <Grid item sm={12} sx={{ marginLeft: "40px" }}>
                  <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    {...register("Description")}
                  />
                </Grid>
                <Grid item sm={12} sx={{ marginLeft: "40px" }}>
                  <TextField
                    id="outlined-basic"
                    label="Price"
                    variant="outlined"
                    {...register("price")}
                  />
                </Grid>
                <Grid item sm={12} sx={{ marginLeft: "40px" }}>
                  <TextField
                    id="outlined-basic"
                    label="Quantity"
                    variant="outlined"
                    {...register("quantity")}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ marginLeft: "40px" }}
              >
                {isEdit ? "Update" : "Add"}
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Formpage;
