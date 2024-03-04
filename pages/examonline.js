import * as React from "react";
import ResponsiveDrawerExam from "@/components/layout";
import Countdown from "react-countdown";
import CountdownTimer from "@/components/CountdownTimer";
import CardProposition from "@/components/cardProposition";

import { Typography, Box, Paper } from "@mui/material";

// Random component
const Completionist = () => <span>You are good to go!</span>;

const examList = [
  {
    examNo: 1,
    year: 64,
    id: 1,
    subject: "math",
    question: "What is the capital of Haryana?",
    options: ["1.Yamunanagar", "2.Panipat", "3.Gurgaon", "4.Chandigarh"],
    answer: "Chandigarh",
  },
  {
    examNo: 1,
    year: 64,
    id: 2,
    subject: "math",
    question: "What is the capital of Punjab?",
    options: ["1.Patiala", "2.Ludhiana", "3.Amritsar", "4.Chandigarh"],
    answer: "Chandigarh",
  },
  {
    examNo: 1,
    year: 64,
    id: 3,
    subject: "math",
    question: "What is the capital of India?",
    options: ["1.Delhi", "2.Mumbai", "3.Kolkata", "4.Chennai"],
    answer: "Delhi",
  },
  {
    examNo: 1,
    year: 64,
    id: 4,
    subject: "math",
    question: "What is the capital of Uttarakhad?",
    options: ["1.Roorkee", "2.Haridwar", "3.Dehradun", "4.Nanital"],
    answer: "Dehradun",
  },
  {
    examNo: 1,
    year: 64,
    id: 5,
    subject: "math",
    question: "What is capital of Uttar Pradesh?",
    options: ["1.GB Nagar", "2.Lucknow", "3.Prayagraj", "4.Agra"],
    answer: "Lucknow",
  },
  {
    examNo: 1,
    year: 64,
    id: 6,
    subject: "thai",
    question: "What is the capital of Haryana?",
    options: ["1.Yamunanagar", "2.Panipat", "3.Gurgaon", "4.Chandigarh"],
    answer: "Chandigarh",
  },
  {
    examNo: 1,
    year: 64,
    id: 7,
    subject: "thai",
    question: "What is the capital of Punjab?",
    options: ["1.Patiala", "2.Ludhiana", "3.Amritsar", "4.Chandigarh"],
    answer: "Chandigarh",
  },
  {
    examNo: 1,
    year: 64,
    id: 8,
    subject: "thai",
    question: "What is the capital of India?",
    options: ["1.Delhi", "2.Mumbai", "3.Kolkata", "4.Chennai"],
    answer: "Delhi",
  },
  {
    examNo: 1,
    year: 64,
    id: 9,
    subject: "thai",
    question: "What is the capital of Uttarakhad?",
    options: ["1.Roorkee", "2.Haridwar", "3.Dehradun", "4.Nanital"],
    answer: "Dehradun",
  },
  {
    examNo: 1,
    year: 64,
    id: 10,
    subject: "thai",
    question: "What is capital of Uttar Pradesh?",
    options: ["1.GB Nagar", "2.Lucknow", "3.Prayagraj", "4.Agra"],
    answer: "Lucknow",
  },
];
export default function ExamOnline() {
  const THREE_DAYS_IN_MS = 3 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + 10000;
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div>
      <Paper elevation={0} sx={{ minHeight: "100vh" }}>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          ข้อที่ 1-25 ข้อสอบนายสิบตำรวจ ปราบปราม ปี 64 ส่วน ความสามารถทั่วไป
        </Typography>
        <Box sx={{ width: "60%", margin: "auto" }}>
          <CardProposition examList={examList} />
        </Box>
      </Paper>
    </div>
  );
}

ExamOnline.getLayout = function getLayout(ExamOnline) {
  return <ResponsiveDrawerExam>{ExamOnline}</ResponsiveDrawerExam>;
};
