import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from "@mui/material";

function createData(math, thai, eng, it, social, law) {
  return { math, thai, eng, it, social, law };
}

const rows = [createData(159, 6.0, 24, 4.0, 24, 37)];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "2px solid #797D7F",
  fontSize: 16,
  backgroundColor: "#EAF2F8",
  color: "#154360"
}));

export default function CardTableScore() {
  return (
    <Box sx={{ width: "60%", margin: "auto", marginTop: "20px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">1.ทั่วไป (30)</StyledTableCell>
              <StyledTableCell align="center">2.ภาษาไทย (25)</StyledTableCell>
              <StyledTableCell align="center">
                3.ภาษาอังกฤษ (30)
              </StyledTableCell>
              <StyledTableCell align="center">4.สารสนเทศ (25)</StyledTableCell>
              <StyledTableCell align="center">5.สังคม (20)</StyledTableCell>
              <StyledTableCell align="center">6.กฏหมาย (20)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.math}
                sx={{
                  "&:last-child td, &:last-child th": { border: "2px solid #797D7F", color: "#0000FF" },
                }}
              >
                <TableCell align="center">{row.math}</TableCell>
                <TableCell align="center">{row.thai}</TableCell>
                <TableCell align="center">{row.eng}</TableCell>
                <TableCell align="center">{row.it}</TableCell>
                <TableCell align="center">{row.social}</TableCell>
                <TableCell align="center">{row.law}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 700, marginTop: "20px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"  sx={{ color: "red"}}>
                รวมคะแนนทั้งหมด (150)
              </StyledTableCell>
              <StyledTableCell align="center">รวมร้อยละ</StyledTableCell>
              <StyledTableCell align="center">ลำดับที่ได้</StyledTableCell>
              <StyledTableCell align="center"  sx={{ color: "red"}}>ผลสอบข้อเขียน</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.math}
                sx={{
                  "&:last-child td, &:last-child th": { border: "2px solid #797D7F" },
                }}
              >
                <TableCell align="center"  sx={{ color: "red"}}>118</TableCell>
                <TableCell align="center" sx={{ color: "#0000FF"}}>58.1</TableCell>
                <TableCell align="center" sx={{ color: "#0000FF"}}
                >121</TableCell>
                <TableCell align="center" sx={{ color: "red"}}> ตัวจริง (อยู่ในกลุ่มทดสอบความเหมาะสมตำแหน่ง รอบที่2)</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
