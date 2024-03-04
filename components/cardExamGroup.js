import * as React from "react";
import { Box, Button, Card, CardHeader, CardActions, Divider, Grid, Stack, Typography } from "@mui/material";

const cardDetail = [
  {
    createdAt: "2023-11-20T03:10:17.820Z",
    year: 64,
    id: "1",
    title: "ข้อสอบนายสิบตำรวจสายปราบปราม",
    status: "status 1",
    categoryId: "categoryId 1",
  },
  {
    createdAt: "2023-11-19T07:23:11.367Z",
    year: 64,
    id: "2",
    title: "ข้อสอบนายสิบตำรวจสายปราบปราม",
    status: "status 2",
    categoryId: "categoryId 1",
  },
  {
    createdAt: "2023-11-19T14:44:31.974Z",
    year: 64,
    id: "3",
    title: "ข้อสอบนายสิบตำรวจสายปราบปราม",
    status: "status 3",
    categoryId: "categoryId 1",
  },
  {
    createdAt: "2023-11-19T14:35:13.800Z",
    year: 64,
    id: "4",
    title: "ข้อสอบนายสิบตำรวจสายปราบปราม",
    status: "status 4",
    categoryId: "categoryId 1",
  },
  {
    createdAt: "2023-11-19T13:20:21.108Z",
    year: 64,
    id: "5",
    title: "ข้อสอบนายสิบตำรวจสายปราบปราม",
    status: "status 5",
    categoryId: "categoryId 1",
  },
  {
    createdAt: "2023-11-20T03:10:17.820Z",
    year: 65,
    id: "1",
    title: "ข้อสอบนายสิบตำรวจสายปราบปราม",
    status: "status 1",
    categoryId: "categoryId 1",
  },
  {
    createdAt: "2023-11-20T03:10:17.820Z",
    year: 65,
    id: "1",
    title: "ข้อสอบนายสิบตำรวจสายปราบปราม",
    status: "status 1",
    categoryId: "categoryId 1",
  },
];
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardExamGroup() {
  return (
    <div>
      <Box sx={{ margin: "20px", background: "#FFFFFF", minHeight: "50px" }}>
        <Typography
          sx={{
            fontSize: {
              lg: 40,
              sm: 30,
              xs: 20,
            },
          }}
        >
          สายปราบปราม ข้อสอบมีทั้งหมด 150 ข้อ จำนวน 10 ชุด
        </Typography>
      </Box>
      <Stack direction="row" spacing={1} sx={{ margin: "20px" }}>
        <Button
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "#7077A1",
              color: "white",
            },
            color: "#000000",
            backgroundColor: "#FFFFFF",
          }}
        >
          ข้อสอบย้อนหลัง ปี 64
        </Button>
        <Button
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "#7077A1",
              color: "white",
            },
            color: "#000000",
            backgroundColor: "#FFFFFF",
          }}
        >
          ข้อสอบย้อนหลัง ปี 65
        </Button>
        <Button
          variant="contained"
          sx={{
            ":hover": {
              bgcolor: "#7077A1",
              color: "white",
            },
            "&:active": {
              bgcolor: "#7077A1",
              color: "white",
            },
            color: "#000000",
            backgroundColor: "#FFFFFF",
          }}
        >
          ข้อสอบย้อนหลัง ปี 66
        </Button>
      </Stack>
      <Grid container spacing={2}>
        {cardDetail.map(() => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Card
              sx={{
                maxWidth: 600,
                maxHeight: 300,
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <CardHeader
                action={
                  <Button
                    variant="contained"
                    sx={{
                      ":hover": {
                        bgcolor: "#363062",
                        color: "white",
                      },
                      borderRadius: "50px",
                      backgroundColor: "#818FB4",
                    }}
                  >
                    เริ่มทำข้อสอบ
                  </Button>
                }
                title={
                  <Typography
                    sx={{
                      fontSize: {
                        lg: 25,
                        sm: 20,
                        xs: 15,
                      },
                    }}
                  >
                    ข้อสอบชุดที่ 1 ปี 64
                  </Typography>
                }
                subheader={
                  <Typography variant="caption">
                    มี 150 ข้อ ประกอบด้วย ทั่วไป 30, ไทย 30, อังกฤษ 25, ไอที 20,
                    สังคม 10, กฏหมาย 10
                  </Typography>
                }
              />
              <Divider />
              <CardActions>
                <Typography variant="caption" sx={{ color: "#07D400" }}>
                  Status: เสร็จสิ้น
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
