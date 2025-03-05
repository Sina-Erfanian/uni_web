import { Container, Box } from "@mui/material";
import Header from "./Header";
import FeaturedDoctor from "./FeaturedDoctor";
import SpecialityFilters from "./SpecialityFilters";
import DoctorList from "./DoctorList";
import BottomNav from "./BottomNav";

function App() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container
        maxWidth="sm"
        sx={{
          background:
            "linear-gradient(to bottom, #d0eaff 20%, #eaf4ff 40%, #f8fbff 70%, #ffffff 100%)",
          pt: 2,
        }}
      >
        <Header />
        <FeaturedDoctor />
        <SpecialityFilters />
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: "50vh",
            pr: 1,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <DoctorList />
        </Box>
      </Container>
      <BottomNav />
    </Box>
  );
}

export default App;
