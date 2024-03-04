import * as React from "react";

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
} from "@mui/material";

const commonStyles = {
  borderColor: "text.primary",
  m: 1,
//   border: 1,
  textAlign: "center",
};

export default function CardProposition({ examList }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [openPopup, setOpenPopup] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [answers, setAnswer] = React.useState([]);
  const [subject, setSubject] = React.useState("math");

  const handleRadioChange = (event, questionDetail) => {
    setValue(event.target.value);
    let index = questionDetail.id - 1;
    setSubject(questionDetail.subject);
    if (answers && answers.length) {
      answers[index] = event.target.value;
    } else {
      setAnswer((answers) => [...answers, event.target.value]);
    }

    console.log("answers > ", answers);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = () => {
    console.log("Submit");
  };

  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClose = () => {
    setOpenPopup(false);
    // ยิงไป save answer to db
    // return success vvv
    // show popup pending รอตรวจคำตอบสักครู่
  };

  const Choice = (question, indexQuestion) => (
    <>
      <RadioGroup
        key={question.id}
        aria-labelledby="demo-error-radios"
        name="quiz"
        value={value}
        row
        onChange={(event, value) => {
          handleRadioChange(event, {
            id: question.id,
            subject: question.subject,
          });
        }}
      >
        <>
          {question.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio checked={option === answers[indexQuestion]} />} //
              label={option}
            />
          ))}
        </>
      </RadioGroup>
    </>
  );

  return (
    <>
      {examList.map((i, index) => (
        <form key={index}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel id="demo-error-radios">
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    ...commonStyles,
                    borderRadius: "30%",
                    width: "2rem",
                    height: "1.5rem",
                    backgroundColor: "#D9D9D9",
                  }}
                >
                  <Typography variant="caption">Q{i.id}</Typography>
                </Box>

                <Typography variant="subtitle1">{i.question}</Typography>
              </Stack>
            </FormLabel>
            <Box sx={{ marginTop: "10px"}}>{Choice(i, i.id - 1)}</Box>
          </FormControl>
        </form>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleSubmit();
        }}
      >
        บันทึก
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        sx={{ float: "right" }}
      >
        ส่งข้อสอบ
      </Button>
      <Dialog
        open={openPopup}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"คำเตือน!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            โปรดตรวจทานคำตอบให้ถูกต้องครบถ้วน ก่อนกดยืนยัน!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ตรวจทานอีกครั้ง</Button>
          <Button onClick={handleClose} component="a" href="/answers">
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
