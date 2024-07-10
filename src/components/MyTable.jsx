import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  Container,
  TableBody,
  Avatar,
  Button,
} from "@mui/material";
import { deleteProduct, getAllProducts } from "../apis";
import { useNavigate } from "react-router-dom";
// import dummyData from "../assets/json/PRODUCT";

export default function MyTable() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);
  // to display all data
  const init = async () => {
    try {
      let res = await getAllProducts();
      console.log(res.data);
      setList(res.data);
    } catch (error) {}
  };
  //delete a row of data

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      let updatedList = list.filter((list) => list._id !== id);
      setList(updatedList);
    } catch (error) {}
  };
  const handleEdit = async (id) => {
    try {
      navigate(`/editProduct/${id}`);
    } catch (error) {}
  };

  return (
    <>
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Sl no
                </TableCell> */}
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Title
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Description
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Image
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Quantity
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  edit/delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row, index) => (
                <TableRow key={index}>
                  {/* <TableCell>{row.serial_no}</TableCell> */}
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.Description}</TableCell>
                  <TableCell>
                    <Avatar
                      alt="Remy Sharp"
                      src={`http://localhost:2010/upload/${row.image}`}
                    />
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleEdit(row._id)}
                      sx={{ marginLeft: "5px" }}
                      variant="contained"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(row._id)}
                      sx={{ marginLeft: "5px" }}
                      variant="contained"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
