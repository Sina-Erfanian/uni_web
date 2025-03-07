import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Tab,
  Tabs,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import {
  ArrowBack,
  Favorite,
  Share,
  AccessTime,
  Star,
  People,
  Work,
  AttachMoney,
  Message,
  Event,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const DoctorProfile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [isFavorite, setIsFavorite] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ p: 0 }}>
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          pb: 2,
          height: "100dvh",
        }}
      >
        <Box
          sx={{
            position: "relative",
            background:
              "linear-gradient(to bottom, #d0eaff 20%, #eaf4ff 40%, #f8fbff 70%, #ffffff 100%)",
            pb: 4,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: 10,
              bottom: 0,
              zIndex: 0,
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <img
              src="doctor1.png"
              alt="Doctor"
              style={{
                height: "auto",
                maxHeight: "340px",
                objectFit: "contain",
                objectPosition: "bottom right",
              }}
            />
          </Box>

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{ backgroundColor: "white", width: 40, height: 40 }}
                onClick={handleBack}
              >
                <ArrowBack />
              </IconButton>
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  sx={{ backgroundColor: "white", width: 40, height: 40 }}
                  onClick={toggleFavorite}
                >
                  <Favorite color={isFavorite ? "error" : "action"} />
                </IconButton>
                <IconButton
                  sx={{ backgroundColor: "white", width: 40, height: 40 }}
                >
                  <Share />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ px: 2, display: "flex", alignItems: "center", mb: 1 }}>
              <AccessTime
                sx={{ fontSize: 16, color: "text.secondary", mr: 0.5 }}
              />
              <Typography variant="body2" color="text.secondary">
                Neurologic
              </Typography>
            </Box>
            <Box sx={{ px: 2, mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 0.5 }}>
                Dr.Matthew
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.4 }}
              >
                MBBS, FCPS
              </Typography>
            </Box>
            <Box sx={{ px: 2, mb: 2 }}>
              <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                $90
                <Typography
                  component="span"
                  variant="body2"
                  color="text.secondary"
                >
                  /session
                </Typography>
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ px: 2 }}>
              <Grid item xs={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <Work sx={{ color: "#FF9800", fontSize: 20, mr: 0.5 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    11 years
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Experience
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <Star sx={{ color: "#FFC107", fontSize: 20 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    4.8
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rating
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    <People sx={{ color: "#9C27B0", fontSize: 20 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    1500+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Patients
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "white" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              ml: 1,
              my: 3,
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-flexContainer": {
                  backgroundColor: "#f5f5f5",
                  borderRadius: "24px",
                  padding: "3px",
                },
                "& .Mui-selected": {
                  backgroundColor: "#fff",
                  borderRadius: "24px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "600",
                  minWidth: "auto",
                  padding: "6px 14px",
                },
              }}
              TabIndicatorProps={{
                sx: {
                  display: "none",
                },
              }}
            >
              <Tab label="About" />
              <Tab label="Availability" />
              <Tab label="Experience" />
              <Tab label="Education" />
            </Tabs>
          </Box>
          <Box sx={{ px: 2, mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              Description
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.5 }}
            >
              Dr. Matthew Thomas is a highly experienced, board-certified
              cardiologist with over 11 years of expertise in cardiovascular
              medicine. His specialization includes...
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ px: 2, mb: 3 }}>
            <Grid item xs={6}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <AttachMoney sx={{ color: "text.secondary", mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    Session Fee
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  $95.00
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "white",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Message sx={{ color: "text.secondary", mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    Message Fee
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  $20.00{" "}
                  <Typography
                    component="span"
                    variant="caption"
                    color="text.secondary"
                  >
                    (30 days)
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box
            sx={{
              px: 2,
            }}
          >
            <Button
              variant="contained"
              fullWidth
              startIcon={<Event />}
              sx={{
                borderRadius: 2,
                py: 1.5,
                background: "linear-gradient(to right, #2196F3, #1976D2)",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default DoctorProfile;
