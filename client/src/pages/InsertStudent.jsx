import { Box, Typography } from "@mui/material";
import React from "react";
import StudentForm from "../components/StudentForm";

export default function InsertStudent() {
  return (
    <div>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Student Form</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StudentForm />
        </Box>
      </Box>
    </div>
  );
}
