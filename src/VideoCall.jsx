import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, Paper } from "@mui/material";
import { Phone, Mic, Videocam } from "@mui/icons-material";

const VideoCall = () => {
  const navigate = useNavigate();
  const myVideoRef = useRef(null);
  const [callStarted, setCallStarted] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    startCamera();
  }, []);

  useEffect(() => {
    let timer;
    if (callStarted) {
      timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [callStarted]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
      }
      setCallStarted(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100dvh"
      sx={{ backgroundColor: "#f0f0f0", padding: 1 }}
    >
      <Paper
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 500,
          height: "90vh",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <img
          src="/doctor.jpg"
          alt="Doctor"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(8px)",
            padding: "8px 12px",
            borderRadius: 10,
            maxWidth: "80%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            Dr. Monica Taylor
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: "12px", sm: "14px" } }}
          >
            {formatTime(timeElapsed)}
          </Typography>
        </Box>
        <video
          ref={myVideoRef}
          autoPlay
          muted
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: "30vw",
            height: "30vh",
            maxWidth: "120px",
            maxHeight: "120px",
            borderRadius: 10,
            border: "2px solid white",
            objectFit: "cover",
            backgroundColor: "black",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: <Mic sx={{ color: "white" }} />, bg: "gray" },
            {
              icon: <Phone sx={{ color: "white", fontSize: 30 }} />,
              bg: "red",
              onClick: () => navigate("/"),
            },
            { icon: <Videocam sx={{ color: "white" }} />, bg: "gray" },
          ].map(({ icon, bg, onClick }, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={onClick}
              sx={{
                backgroundColor: bg,
                width: 50,
                height: 50,
                borderRadius: "50%",
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: bg === "red" ? "darkred" : "darkgray",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default VideoCall;
