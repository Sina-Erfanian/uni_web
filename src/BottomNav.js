import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";

const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "sm",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(15px)",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        boxShadow: "0 -5px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          py: 1,
          backgroundColor: "transparent",
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{ color: value === 0 ? "#007bff" : "grey" }}
        />
        <BottomNavigationAction
          label="Message"
          icon={<ChatIcon />}
          sx={{ color: value === 1 ? "#007bff" : "grey" }}
        />
        <BottomNavigationAction
          icon={
            <Box
              sx={{
                backgroundColor: "#007bff",
                borderRadius: "50%",
                p: 1,
                boxShadow: "0 5px 15px rgba(0, 123, 255, 0.4)",
                transform: "translateY(-10px)",
                color: "white",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#0056b3",
                  transform: "translateY(-15px)",
                  boxShadow: "0 10px 25px rgba(0, 123, 255, 0.6)",
                },
              }}
            >
              <CameraAltIcon sx={{ fontSize: 30 }} />
            </Box>
          }
        />
        <BottomNavigationAction
          label="Booking"
          icon={<CalendarTodayIcon />}
          sx={{ color: value === 3 ? "#007bff" : "grey" }}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          sx={{ color: value === 4 ? "#007bff" : "grey" }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
