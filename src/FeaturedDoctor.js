import {
  Card,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";

const FeaturedDoctor = () => {
  const [activeDoctor] = useState(null);

  const doctors = [
    {
      name: "Dr. Kriss Hemsworth",
      specialty: "Brain specialist",
      years: 6,
      price: 90,
      image: "doctor.jpg",
    },
  ];

  return (
    <Box sx={{ position: "relative", mt: 3 }}>
      <Card
        sx={{
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: 3,
          p: 2,
          position: "relative",
          overflow: "visible",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "white",
          }}
        >
          <MoreHorizIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            sx={{
              width: 90,
              height: 90,
              borderRadius: 2,
              border: "4px solid white",
              objectFit: "cover",
            }}
            image={doctors[activeDoctor].image}
            alt="Doctor"
          />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">{doctors[activeDoctor].name}</Typography>
            <Typography variant="body2">
              {doctors[activeDoctor].specialty} • {doctors[activeDoctor].years}{" "}
              years
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <AccessTimeIcon fontSize="small" />
              <Typography variant="body2" sx={{ ml: 1 }}>
                Starts in 30 min
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ mt: 2 }}>
          ${doctors[activeDoctor].price} / session
        </Typography>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: -15,
            right: 30,
            background: "white",
            color: "#007bff",
            boxShadow: "0 10px 15px rgba(0,123,255,0.4)",
            borderRadius: "50px",
            padding: "12px 25px",
            "&:hover": {
              background: "white",
              transform: "scale(1.05)",
            },
            transition: "all 0.3s ease",
          }}
          startIcon={<CallIcon />}
        >
          Join Call
        </Button>
      </Card>
    </Box>
  );
};

export default FeaturedDoctor;
