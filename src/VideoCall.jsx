import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
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
      minHeight="100vh"
      sx={{ backgroundColor: "#f0f0f0" }}
    >
      <Paper
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "sm",
          height: "100vh",
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
            padding: "10px 15px",
            borderRadius: 10,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Dr. Monica Taylor
          </Typography>
          <Typography variant="body2">{formatTime(timeElapsed)}</Typography>
        </Box>
        <video
          ref={myVideoRef}
          autoPlay
          muted
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 200,
            height: 200,
            borderRadius: 10,
            border: "2px solid white",
            objectFit: "cover",
            backgroundColor: "black",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "gray",
              borderRadius: "50%",
              paddingX: 1,
              paddingY: 1.8,
              "&:hover": { backgroundColor: "darkgray" },
            }}
          >
            <Mic sx={{ color: "white" }} />
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              paddingX: 1,
              paddingY: 1.8,
              borderRadius: "50%",
              "&:hover": { backgroundColor: "darkred" },
            }}
            onClick={() => navigate("/")} // Navigate to home page
          >
            <Phone sx={{ color: "white", fontSize: 30 }} />
          </Button>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "gray",
              paddingX: 1,
              paddingY: 1.8,
              borderRadius: "50%",
              "&:hover": { backgroundColor: "darkgray" },
            }}
          >
            <Videocam sx={{ color: "white" }} />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default VideoCall;
