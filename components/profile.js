import * as React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  FormControl,
  Typography,
  TextField,
  styled,
  InputBase,
  InputLabel,
  alpha,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, rating) {
  return { name, rating };
}

const rows = [
  createData("ข้อสอบนายสิบตำรวจ ปราบปราม ปี 64 ชุด 1", "103/150"),
  createData("ข้อสอบนายสิบตำรวจ ปราบปราม ปี 64 ชุด 2", "89/150"),
  createData("ข้อสอบนายสิบตำรวจ ปราบปราม ปี 64 ชุด 3", "110/150"),
  createData("ข้อสอบนายสิบตำรวจ ปราบปราม ปี 64 ชุด 4", "79/150"),
];

export default function Profile() {
  // const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#FFF", minHeight: "100vh", marginTop: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={5}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: "80%",
                    borderColor: "black",
                  },
                  "& .MuiFormLabel-root.MuiInputLabel-root.Mui-disabled": {
                    color: "black",
                  },
                  "& .MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled": {
                    background: "revert",
                  },
                  "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "black",
                    },
                  width: "100%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "left",
                    width: "80%",
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                >
                  ข้อมูลของฉัน
                </Typography>
                <TextField
                  disabled
                  fullWidth
                  color="warning"
                  id="outlined-disabled"
                  label="ชื่อ - สกุล"
                  defaultValue="Hello World"
                />
                <TextField
                  fullWidth
                  disabled
                  id="fullWidth"
                  label="เบอร์โทรศัพท์"
                  defaultValue="099891072"
                />
                <TextField
                  fullWidth
                  disabled
                  id="outlined-disabled"
                  label="อีเมล"
                  defaultValue="jaidee@gmail.com"
                />
                <TextField
                  fullWidth
                  disabled
                  id="outlined-disabled"
                  label="วันที่สมัครสมาชิก"
                  defaultValue="01-01-2024 17:00:00"
                />
                <TextField
                  fullWidth
                  disabled
                  id="outlined-disabled"
                  label="วันหมดอายุสมาชิก"
                  defaultValue="01-02-2024 17:00:00"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={7}>
              <Box
                sx={{
                  "& .MuiTableContainer-root": {
                    width: "80%",
                    margin: "auto",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ width: "80%", margin: "auto", marginBottom: "20px" }}
                >
                  ประวัติทำข้อสอบ
                </Typography>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table" sx={{ backgroundColor: "ghostwhite"}}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Typography variant="h6">รายละเอียด</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="h6">คะแนน</Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Typography variant="subtitle2" sx={{ color: "#282828"}}>
                              {row.name}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#BDBDBD" }}
                            >
                              21-01-2020 14:34
                            </Typography>
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#FF7373" }}>
                            {row.rating}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
