import * as React from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Grid,
  Avatar,
  CssBaseline,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CardTableScore from "@/components/cardTableScore";
import ExamOnline from "./examonline";
const drawerWidth = 240;

export default function AnswerExam() {
  const settings = ["Logout"];
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            backgroundColor: "#FFF",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Link href={"/dashboard/page"}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ color: "#43425D" }}
                  >
                    Tit Yot
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ flexGrow: 0, float: "right" }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Paper elevation={0} sx={{ minHeight: "100vh", marginTop: "64px" }}>
        <Box sx={{ width: "100%", textAlign: "center", paddingTop: "25px" }}>
          <Typography variant="h4">ประกาศผลสอบ</Typography>
          <Typography variant="subtitle1" sx={{ marginTop: "30px" }}>
            ชื่อ - นามสกุล : นาย กฤษดา ไชยวงค์
          </Typography>
          <Typography variant="subtitle1">
            หน่วยรับสมัคร : กองบัญชาการตำรวจนครบาล
          </Typography>
          <Typography variant="subtitle1">
            วันที่ทำข้อสอบ : 15-03-2022 20:00
          </Typography>
        </Box>
        <CardTableScore />
        <ExamOnline />
      </Paper>
    </>
  );
}
