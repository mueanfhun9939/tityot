import React from "react";
import DateTimeDisplay from "./dateTimeDisplay";
import { useCountdown } from "@/hooks/useCountdown";
import { Button, Dialog, Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ExpiredNotice = () => {
  return (
    // <div className="expired-notice">
    //   <span>Expired!!!</span>
    //   <p>Please select a future date and time.</p>
    // </div>
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"แจ้งเตือน!!!"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="h6" sx={{ color: "red" }}>
            หมดเวลาในการทำข้อสอบ กรุณาส่งข้อสอบ
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
            ขอให้ท่านโชคดี สอบติดอย่างที่หวัง
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={false} autoFocus>
          ส่งข้อสอบ
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={hours} type={"ชั่วโมง"} isDanger={hours <= 3} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"นาที"} isDanger={hours == 0 && minutes == 0} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"วินาที"} isDanger={hours == 0 && minutes == 0 && seconds == 0} />
      </a>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds <= 0) {
    return (
      <>
        <ExpiredNotice />
        <ShowCounter hours={0} minutes={0} seconds={0} />
      </>
    );
  } else {
    return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default CountdownTimer;
