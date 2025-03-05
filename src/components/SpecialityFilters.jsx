import { Box, Chip, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import BrainIcon from "@mui/icons-material/Psychology";
import RadiologyIcon from "@mui/icons-material/Visibility";

const SpecialityFilters = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Doctor Speciality
        </Typography>
        <Typography variant="body2" color="primary">
          See all
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1, overflowX: "auto", pb: 1 }}>
        <Chip
          label="All"
          color="primary"
          sx={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
          }}
        />
        <Chip
          label="General"
          variant="outlined"
          icon={<LocalHospitalIcon />}
          sx={{
            padding: "8px 16px",
          }}
        />
        <Chip
          label="Neurologic"
          variant="outlined"
          icon={<BrainIcon />}
          sx={{
            padding: "8px 16px",
          }}
        />
        <Chip
          label="Radiology"
          variant="outlined"
          icon={<RadiologyIcon />}
          sx={{
            padding: "8px 16px",
          }}
        />
      </Box>
    </Box>
  );
};

export default SpecialityFilters;
