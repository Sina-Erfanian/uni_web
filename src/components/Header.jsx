import {
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  InputBase,
  Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        p: 2,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar src="avatar.jpg" sx={{ width: 60, height: 60 }} />
          <Box sx={{ ml: 1 }}>
            <Typography variant="body2" color="textSecondary">
              Welcome Back
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              Sara 👋
            </Typography>
          </Box>
        </Box>
        <Box>
          <IconButton
            sx={{
              backgroundColor: "white",
              boxShadow: 1,
              mr: 1,
              "&:hover": { backgroundColor: "white" },
            }}
          >
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 4,
            flex: 1,
            p: 1,
            boxShadow: 1,
          }}
        >
          <SearchIcon sx={{ color: "grey" }} />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search doctor or anything..."
          />
        </Box>
        <IconButton
          sx={{
            backgroundColor: "white",
            boxShadow: 1,
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <TuneIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
