import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";

const DoctorList = () => {
  const doctors = [
    {
      name: "Dr. Thomas Mitchell",
      specialty: "Brain, Spinal Specialist",
      years: 6,
      rating: 4.5,
      reviews: 543,
      image: "doctor.jpg",
    },
    {
      name: "Dr. Marcus Thomas",
      specialty: "Brain, Spinal Specialist",
      years: 8,
      rating: 4.2,
      reviews: 687,
      image: "doctor.jpg",
    },
    {
      name: "Dr. Marcus Thomas",
      specialty: "Brain, Spinal Specialist",
      years: 8,
      rating: 4.2,
      reviews: 687,
      image: "doctor.jpg",
    },
    {
      name: "Dr. Marcus Thomas",
      specialty: "Brain, Spinal Specialist",
      years: 8,
      rating: 4.2,
      reviews: 687,
      image: "doctor.jpg",
    },
  ];

  return (
    <Box sx={{ mt: 3, mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Recommendation Doctors
        </Typography>
        <Typography variant="body2" color="primary">
          See all
        </Typography>
      </Box>
      {doctors.map((doc, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            mt: 2,
            p: 2,
            borderRadius: 3,
            boxShadow: 1,
            backgroundColor: "white",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 80, borderRadius: 2, mr: 2 }}
            image={doc.image}
            alt={doc.name}
          />
          <CardContent
            sx={{
              flex: 1,
              p: "0 !important",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6">{doc.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {doc.specialty} | {doc.years} years
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Rating value={doc.rating} precision={0.5} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({doc.reviews} reviews)
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DoctorList;
