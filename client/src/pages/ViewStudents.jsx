import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StudentTable from "../components/StudentTable";
import { useState } from "react";
import { useEffect } from "react";
export default function ViewStudents() {
  const [products, setProducts] = useState([]);
  useEffect(() => {}, []);
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" component={Link} to={"/insert"}>
          Insert New
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Students</Typography>
      </Box>
      <Box>
        <StudentTable />
      </Box>
    </div>
  );
}
